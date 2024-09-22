import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
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
  await app.listen(3000);
}
bootstrap();
