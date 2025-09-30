import { describe, it, expect, vi } from 'vitest';
import { POST } from '../route';
import { db } from '@repo/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

vi.mock('@repo/db', () => ({
  db: {
    query: vi.fn(),
  },
}));

vi.mock('bcrypt', () => ({
  default: {
    hash: vi.fn().mockResolvedValue('hashed_password'),
  },
}));

describe('POST /api/auth/signup', () => {
  it('should create a new user and return 201', async () => {
    const mockUser = { id: 1, email: 'test@example.com' };
    vi.mocked(db.query).mockResolvedValue({ rows: [mockUser] } as any);

    const request = new Request('http://localhost/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com', password: 'password123', phoneNumber: '12345' }),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(201);
    expect(body.user).toEqual(mockUser);
    expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
    expect(db.query).toHaveBeenCalledWith(
      expect.any(String),
      ['test@example.com', 'hashed_password', expect.stringContaining(':')]
    );
  });

  it('should return 400 for invalid email', async () => {
    const request = new Request('http://localhost/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email: 'invalid-email', password: 'password123' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('should return 409 for duplicate email', async () => {
    vi.mocked(db.query).mockRejectedValue({ code: '23505' });

    const request = new Request('http://localhost/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(409);
  });
});
