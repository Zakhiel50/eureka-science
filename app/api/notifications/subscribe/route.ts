import { NextRequest, NextResponse } from 'next/server';
import { existsSync, writeFileSync, readFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const dbDir = join(process.cwd(), 'lib/db');
const dbPath = join(dbDir, 'subscriptions.json');

export const dynamic = 'force-dynamic';

function getSubscriptions(): any[] {
  if (!existsSync(dbDir)) {
    mkdirSync(dbDir, { recursive: true });
  }
  if (!existsSync(dbPath)) {
    writeFileSync(dbPath, '[]', 'utf-8');
    return [];
  }
  try {
    const content = readFileSync(dbPath, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.error('Error reading subscriptions database:', err);
    return [];
  }
}

function saveSubscriptions(subs: any[]) {
  if (!existsSync(dbDir)) {
    mkdirSync(dbDir, { recursive: true });
  }
  writeFileSync(dbPath, JSON.stringify(subs, null, 2), 'utf-8');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, subscription } = body;

    if (!subscription || !subscription.endpoint) {
      return NextResponse.json({ error: 'Subscription structure is invalid' }, { status: 400 });
    }

    const subscriptions = getSubscriptions();

    if (action === 'subscribe') {
      // Vérifier si l'abonnement existe déjà
      const index = subscriptions.findIndex(s => s.endpoint === subscription.endpoint);
      if (index === -1) {
        subscriptions.push(subscription);
      } else {
        // Mettre à jour l'abonnement existant pour rafraîchir les clés
        subscriptions[index] = subscription;
      }
      saveSubscriptions(subscriptions);
      return NextResponse.json({ success: true, message: 'Subscribed successfully' });
    } else if (action === 'unsubscribe') {
      const filtered = subscriptions.filter(s => s.endpoint !== subscription.endpoint);
      saveSubscriptions(filtered);
      return NextResponse.json({ success: true, message: 'Unsubscribed successfully' });
    } else {
      return NextResponse.json({ error: 'Invalid action. Must be "subscribe" or "unsubscribe"' }, { status: 400 });
    }
  } catch (err: any) {
    console.error('Error in subscribe endpoint:', err);
    return NextResponse.json({ error: 'Internal server error', details: err.message }, { status: 500 });
  }
}
