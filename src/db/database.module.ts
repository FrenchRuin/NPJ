import { Module } from '@nestjs/common';
import { DatabaseProviders } from './database.provider';

@Module({
  imports: [],
  providers: [...DatabaseProviders],
  exports: [...DatabaseProviders],
})
export class DatabaseModule {}
