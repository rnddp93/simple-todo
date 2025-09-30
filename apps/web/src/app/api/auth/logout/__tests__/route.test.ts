import { describe, it, expect } from 'vitest';
import { POST } from '../route';

describe('POST /api/auth/logout', () => {
  it('should return 200 and a success message', async () => {
    const request = new Request('http://localhost/api/auth/logout', {
      method: 'POST',
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.message).toBe('Logout successful');
  });
});
