import { Controller, Get, Req } from '@nestjs/common';
import { MatchesService } from '../services/matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Get()
  async getMatches(@Req() req: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    return this.matchesService.getMatchesByTenant(req.tenant);
  }
}
