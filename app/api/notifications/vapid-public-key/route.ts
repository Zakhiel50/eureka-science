import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { existsSync, writeFileSync, readFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const keysDir = join(process.cwd(), 'lib/db');
const keysPath = join(keysDir, 'vapid-keys.json');

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (!existsSync(keysDir)) {
      mkdirSync(keysDir, { recursive: true });
    }

    let vapidKeys;
    if (existsSync(keysPath)) {
      try {
        vapidKeys = JSON.parse(readFileSync(keysPath, 'utf-8'));
      } catch (e) {
        // En cas d'erreur de lecture/parse, on régénère
        vapidKeys = webpush.generateVAPIDKeys();
        writeFileSync(keysPath, JSON.stringify(vapidKeys, null, 2), 'utf-8');
      }
    } else {
      vapidKeys = webpush.generateVAPIDKeys();
      writeFileSync(keysPath, JSON.stringify(vapidKeys, null, 2), 'utf-8');
    }

    return NextResponse.json({ publicKey: vapidKeys.publicKey });
  } catch (err: any) {
    console.error('Error getting/generating VAPID key:', err);
    return NextResponse.json(
      { error: 'Failed to retrieve public VAPID key', details: err.message },
      { status: 500 }
    );
  }
}
