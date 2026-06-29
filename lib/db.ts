import { join } from 'path';
import { existsSync, writeFileSync, readFileSync, mkdirSync } from 'fs';
import webpush from 'web-push';

function getDbDir(): string {
  // On Vercel or in serverless production, process.cwd() / 'lib/db' is read-only.
  // We use '/tmp' as a fallback to avoid EROFS.
  if (
    process.env.VERCEL ||
    process.env.AWS_LAMBDA_FUNCTION_NAME ||
    process.env.NODE_ENV === 'production'
  ) {
    return '/tmp';
  }
  return join(process.cwd(), 'lib/db');
}

export function getSubscriptionsPath(): string {
  return join(getDbDir(), 'subscriptions.json');
}

export function getVapidKeysPath(): string {
  return join(getDbDir(), 'vapid-keys.json');
}

export function getSubscriptions(): any[] {
  const path = getSubscriptionsPath();
  if (!existsSync(path)) {
    return [];
  }
  try {
    const content = readFileSync(path, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.error('Error reading subscriptions database:', err);
    return [];
  }
}

export function saveSubscriptions(subs: any[]) {
  const path = getSubscriptionsPath();
  const dir = getDbDir();
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(path, JSON.stringify(subs, null, 2), 'utf-8');
}

export interface VapidKeys {
  publicKey: string;
  privateKey: string;
}

export function getVapidKeys(): VapidKeys {
  // Check env vars first (standard production configuration)
  const envPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || process.env.VAPID_PUBLIC_KEY;
  const envPrivateKey = process.env.VAPID_PRIVATE_KEY;
  
  if (envPublicKey && envPrivateKey) {
    return {
      publicKey: envPublicKey,
      privateKey: envPrivateKey
    };
  }

  const path = getVapidKeysPath();
  if (existsSync(path)) {
    try {
      const content = readFileSync(path, 'utf-8');
      return JSON.parse(content);
    } catch (e) {
      console.warn('Error reading vapid-keys.json, regenerating keys...', e);
    }
  }

  // Generate new keys and write them
  const newKeys = webpush.generateVAPIDKeys();
  const dir = getDbDir();
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  try {
    writeFileSync(path, JSON.stringify(newKeys, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write vapid-keys.json. Using in-memory generated keys.', err);
  }
  return newKeys;
}
