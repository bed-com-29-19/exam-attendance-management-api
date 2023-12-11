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
  // Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('UEAMS API Documentation')
    .setDescription(
      'API documentation for UNIMA EXAM ATTENDANCE MANAGEMENT SYSTEM',
    )
    .setVersion('1.0')
    .addTag('administrator', 'Operations related to administrators')
    .addTag('invigilator', 'Operations related to invigilators')
    .setBasePath('api') // Set a base path for your API, e.g., '/api'
    .addBearerAuth() // Enable authentication using Bearer token
    .build();

  // Create Swagger document
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  // Setup Swagger UI with custom theme
  SwaggerModule.setup('api', app, swaggerDocument, {
    swaggerOptions: {
      theme: 'muted', // Use the 'muted' theme from swagger-ui-themes
    },
  });

  await app.listen(3000);
}

bootstrap();
