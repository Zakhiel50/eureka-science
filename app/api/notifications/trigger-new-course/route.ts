import { NextRequest, NextResponse } from 'next/server';
import webpush from 'web-push';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const keysPath = join(process.cwd(), 'lib/db/vapid-keys.json');
const dbPath = join(process.cwd(), 'lib/db/subscriptions.json');

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, body: text, url, isTest, targetSubscription } = body;

    // Charger les clés VAPID
    if (!existsSync(keysPath)) {
      return NextResponse.json({ error: 'Les clés VAPID ne sont pas encore générées' }, { status: 500 });
    }
    const vapidKeys = JSON.parse(readFileSync(keysPath, 'utf-8'));

    webpush.setVapidDetails(
      'mailto:eureka.science.contact@gmail.com',
      vapidKeys.publicKey,
      vapidKeys.privateKey
    );

    // Déterminer les abonnements cibles
    let subscriptions: any[] = [];
    if (isTest && targetSubscription) {
      subscriptions = [targetSubscription];
    } else {
      if (existsSync(dbPath)) {
        try {
          subscriptions = JSON.parse(readFileSync(dbPath, 'utf-8'));
        } catch (e) {
          subscriptions = [];
        }
      }
    }

    if (subscriptions.length === 0) {
      return NextResponse.json({ success: true, count: 0, message: 'Aucun abonnement trouvé' });
    }

    const payload = JSON.stringify({
      title: title || 'Nouveau cours disponible !',
      body: text || 'Découvre une nouvelle aventure scientifique sur Eureka.',
      url: url || '/'
    });

    const results = await Promise.allSettled(
      subscriptions.map(async (sub) => {
        try {
          await webpush.sendNotification(sub, payload);
          return { endpoint: sub.endpoint, success: true };
        } catch (err: any) {
          // Si l'abonnement a expiré ou n'existe plus (410 Gone ou 404 Not Found), on le signale pour le supprimer
          if (err.statusCode === 410 || err.statusCode === 404) {
            return { endpoint: sub.endpoint, success: false, expired: true };
          }
          console.error(`Erreur d'envoi à ${sub.endpoint}:`, err.message || err);
          return { endpoint: sub.endpoint, success: false, error: err.message };
        }
      })
    );

    // Nettoyer les abonnements expirés (uniquement en cas de broadcast global)
    if (!isTest && existsSync(dbPath)) {
      const expiredEndpoints = results
        .filter((r): r is PromiseFulfilledResult<any> => r.status === 'fulfilled' && Boolean(r.value?.expired))
        .map(r => r.value.endpoint);

      if (expiredEndpoints.length > 0) {
        try {
          const currentSubs = JSON.parse(readFileSync(dbPath, 'utf-8'));
          const activeSubs = currentSubs.filter((s: any) => !expiredEndpoints.includes(s.endpoint));
          writeFileSync(dbPath, JSON.stringify(activeSubs, null, 2), 'utf-8');
        } catch (e) {
          console.error('Erreur lors du nettoyage des abonnements expirés:', e);
        }
      }
    }

    const successCount = results.filter(
      r => r.status === 'fulfilled' && r.value.success
    ).length;
    const failureCount = results.length - successCount;

    const overallSuccess = successCount > 0;

    return NextResponse.json({
      success: overallSuccess,
      sent: results.length,
      successCount,
      failureCount,
      results: results.map(r => r.status === 'fulfilled' ? r.value : { success: false, error: 'Rejeté' })
    });
  } catch (err: any) {
    console.error('Error triggering notifications:', err);
    return NextResponse.json(
      { error: 'Failed to send notifications', details: err.message },
      { status: 500 }
    );
  }
}
