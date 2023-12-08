/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('UEAMS')
    .setDescription('UNIMA EXAM ATTENDANCE MANAGMENT SYSTEM API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
 await app.listen(3000);
}
bootstrap();
