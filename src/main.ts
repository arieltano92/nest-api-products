import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //To remove all the attributtes not defined into the DTO
      whitelist: true,
      //To fail with 400 in case of attributes not allowed
      forbidNonWhitelisted: true,
    }),
  );

  // Documentation with OpenAPI
  const config = new DocumentBuilder()
    .setTitle('NestJs api')
    .setDescription('NestJs api API description')
    .setVersion('1.0')
    .addTag('NestJs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  //Enable cors
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
