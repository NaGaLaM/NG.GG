import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionsController } from './champions/champions.controller';

@Module({
  imports: [],
  controllers: [AppController, ChampionsController],
  providers: [AppService],
})
export class AppModule { }
