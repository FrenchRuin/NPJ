import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const config = new DocumentBuilder()
    .setTitle('NestJS REST API')
    .setDescription('NestJS REST API')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const port = 3000;
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  logger.log(`Application is running on: ${port}`);
}
bootstrap();
