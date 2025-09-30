import { describe, it, expect, vi } from 'vitest';
import { POST } from '../route';
import { db } from '@repo/db';
import bcrypt from 'bcrypt';

vi.mock('@repo/db', () => ({
  db: {
    query: vi.fn(),
  },
}));

vi.mock('bcrypt', () => ({
  default: {
    compare: vi.fn(),
  },
}));

describe('POST /api/auth/login', () => {
  it('should return user data and 200 for valid credentials', async () => {
    const mockUser = { id: 1, email: 'test@example.com', password_hash: 'hashed_password' };
    vi.mocked(db.query).mockResolvedValue({ rows: [mockUser] } as any);
    vi.mocked(bcrypt.compare).mockResolvedValue(true as never);

    const request = new Request('http://localhost/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com', password: 'password123' }),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.user).toEqual({ id: 1, email: 'test@example.com' });
    expect(db.query).toHaveBeenCalledWith('SELECT * FROM users WHERE email = $1', ['test@example.com']);
    expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashed_password');
  });

  it('should return 401 for non-existent user', async () => {
    vi.mocked(db.query).mockResolvedValue({ rows: [] } as any);

    const request = new Request('http://localhost/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: 'nouser@example.com', password: 'password123' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(401);
  });

  it('should return 401 for incorrect password', async () => {
    const mockUser = { id: 1, email: 'test@example.com', password_hash: 'hashed_password' };
    vi.mocked(db.query).mockResolvedValue({ rows: [mockUser] } as any);
    vi.mocked(bcrypt.compare).mockResolvedValue(false as never);

    const request = new Request('http://localhost/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com', password: 'wrongpassword' }),
    });

    const response = await POST(request);
    expect(response.status).toBe(401);
  });
});
