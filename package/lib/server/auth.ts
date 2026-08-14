import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import type { AuthTokenPayload } from '@/types/socket';

const JWT_SECRET: string = process.env.JWT_SECRET || 'dev_secret_change_me';

export function signToken(payload: AuthTokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): AuthTokenPayload {
  // throws if invalid/expired -- callers should catch
  return jwt.verify(token, JWT_SECRET) as AuthTokenPayload;
}

export function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}