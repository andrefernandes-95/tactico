import { Injectable } from '@nestjs/common';
import { getPrismaForTenant } from 'src/prisma/prisma.service';

@Injectable()
export class MatchesService {
  async getMatchesByTenant(tenant: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const prisma = getPrismaForTenant(tenant);

    // Tenant-aware query
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return await prisma?.match.findMany({
      orderBy: { matchDate: 'desc' },
    });
  }
}
