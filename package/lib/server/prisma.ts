import { PrismaClient } from '@prisma/client';

// Next.js hot-reloads modules in dev, which would otherwise create a new
// PrismaClient (and new DB connection pool) on every file save.
// Caching it on `globalThis` avoids that.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;