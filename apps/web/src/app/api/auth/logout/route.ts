import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // TODO: Integrate with NextAuth.js to invalidate the session
  return NextResponse.json({ message: 'Logout successful' }, { status: 200 });
}
