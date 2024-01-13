import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { BoardProviders } from './board.providers';
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardsController],
  providers: [BoardsService, ...BoardProviders],
})
export class BoardsModule {}
