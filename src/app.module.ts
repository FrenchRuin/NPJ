import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestModule } from './rest/rest.module';

@Module({
  imports: [RestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
