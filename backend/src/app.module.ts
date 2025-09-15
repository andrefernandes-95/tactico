import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchesController } from 'src/controllers/matches.controllers';
import { MatchesService } from 'src/services/matches.service';

@Module({
  imports: [],
  controllers: [AppController, MatchesController],
  providers: [AppService, MatchesService],
})
export class AppModule {}
