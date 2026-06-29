import { NextResponse } from 'next/server';
import { getVapidKeys } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const keys = getVapidKeys();
    return NextResponse.json({ publicKey: keys.publicKey });
  } catch (err: any) {
    console.error('Error getting/generating VAPID key:', err);
    return NextResponse.json(
      { error: 'Failed to retrieve public VAPID key', details: err.message },
      { status: 500 }
    );
  }
}

