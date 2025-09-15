// prisma.service.ts
import { PrismaClient } from '../../generated/prisma';

const prismaClients: Map<string, PrismaClient> = new Map();

export function getPrismaForTenant(tenantId: string) {
  if (!prismaClients.has(tenantId)) {
    // Lazily create a PrismaClient for this tenant
    const url = process.env[`DATABASE_URL_${tenantId.toUpperCase()}`];

    console.log(url);

    const client = new PrismaClient({
      datasources: {
        db: { url },
      },
    });
    prismaClients.set(tenantId, client);
  }

  return prismaClients.get(tenantId);
}
