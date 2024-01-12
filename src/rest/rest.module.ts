import { Module } from '@nestjs/common';
import { RestService } from './rest.service';
import { RestController } from './rest.controller';

@Module({
  controllers: [RestController],
  providers: [RestService],
})
export class RestModule {}
