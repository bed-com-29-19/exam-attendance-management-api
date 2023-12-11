/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SwaggerController } from './swagger.controller';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    LoginModule,
  ],
  controllers: [SwaggerController],
})
export class AppModule {}
