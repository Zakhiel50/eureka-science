import { NextRequest, NextResponse } from 'next/server';
import { EdgeTTS } from 'node-edge-tts';
import { readFileSync, unlinkSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { z } from 'zod';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

// --- Security Configuration ---
const ALLOWED_VOICES = ['fr-FR-DeniseNeural', 'fr-FR-HenriNeural', 'fr-FR-EloiseNeural'] as const;
const MAX_TEXT_LENGTH = 1500;
const REQUESTS_PER_MINUTE = 10;

// Schema Validation with Zod
const ttsSchema = z.object({
  text: z.string()
    .min(1, "Le texte ne peut pas être vide")
    .max(MAX_TEXT_LENGTH, `Le texte est trop long (max ${MAX_TEXT_LENGTH} caractères)`),
  voice: z.enum(ALLOWED_VOICES).default('fr-FR-DeniseNeural'),
});

// In-memory rate limiting
const ipCache = new Map<string, { count: number, lastRequest: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipCache.get(ip);

  if (!record) {
    ipCache.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  if (now - record.lastRequest > 60000) {
    record.count = 1;
    record.lastRequest = now;
    return false;
  }

  if (record.count >= REQUESTS_PER_MINUTE) {
    return true;
  }

  record.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown';
  const requestId = Math.random().toString(36).substring(7);
  const tempPath = join(tmpdir(), `tts-${Date.now()}-${requestId}.mp3`);

  try {
    // 1. CSRF/Origin Protection
    if (process.env.NODE_ENV === 'production') {
      const origin = req.headers.get('origin');
      const host = req.headers.get('host');
      if (!origin?.includes(host!)) {
        return NextResponse.json({ error: 'Unauthorized origin' }, { status: 403 });
      }
    }

    // 2. Rate Limiting
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Trop de requêtes, réessayez dans une minute.' }, { status: 429 });
    }

    // 3. Schema Validation with Zod
    const body = await req.json();
    const result = ttsSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ 
        error: 'Données invalides', 
        details: result.error.format() 
      }, { status: 400 });
    }

    const { text, voice } = result.data;

    // 4. Processing
    console.log(`[TTS ${requestId}] Generating for IP ${ip}...`);
    
    const tts = new EdgeTTS({
      voice: voice,
      lang: 'fr-FR',
      timeout: 15000
    });

    const ttsPromise = tts.ttsPromise(text, tempPath);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('TTS Generation Timeout')), 25000)
    );

    await Promise.race([ttsPromise, timeoutPromise]);

    if (!existsSync(tempPath)) {
      throw new Error('Le fichier audio n\'a pas pu être généré');
    }

    const stats = statSync(tempPath);
    if (stats.size === 0) {
      throw new Error('Le fichier audio généré est vide');
    }

    const audioBuffer = readFileSync(tempPath);
    
    // Cleanup
    try { unlinkSync(tempPath); } catch (e) {}

    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.length.toString(),
        'Cache-Control': 'public, max-age=3600',
      },
    });

  } catch (error: any) {
    console.error(`[TTS ${requestId}] Error:`, error.message || error);
    
    if (existsSync(tempPath)) {
      try { unlinkSync(tempPath); } catch (e) {}
    }

    return NextResponse.json({ 
      error: 'Erreur lors de la génération',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}
