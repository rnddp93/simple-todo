import { NextResponse } from 'next/server';
import { db } from '@repo/db';
import bcrypt from 'bcrypt';
import { randomBytes, createCipheriv } from 'crypto';

// IMPORTANT: Move these to environment variables in a real application
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || '12345678901234567890123456789012'; // 32 bytes
const IV_LENGTH = 16; // For AES, this is always 16

function encrypt(text: string) {
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, phoneNumber } = body;

    if (!email || !password || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email and password are required' }, { status: 400 });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    let phoneNumberEncrypted = null;
    if (phoneNumber) {
      phoneNumberEncrypted = encrypt(phoneNumber);
    }

    const result = await db.query(
      'INSERT INTO users (email, password_hash, phone_number_encrypted) VALUES ($1, $2, $3) RETURNING id, email, created_at',
      [email, passwordHash, phoneNumberEncrypted]
    );

    const newUser = result.rows[0];

    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error: any) {
    console.error('Signup error:', error);
    if (error.code === '23505') { // unique_violation
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
