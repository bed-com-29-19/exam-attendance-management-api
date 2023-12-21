// login.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invigilator } from './entities/login.entity'; 
import { InvigilatorController } from './login.controller';
import { LoginService } from './login.service';
import { GoogleSheetsService } from 'src/google-sheets.services';

@Module({
  imports: [TypeOrmModule.forFeature([Invigilator])], // Import TypeORM module with the Invigilator entity
  controllers: [InvigilatorController], 
  providers: [LoginService, GoogleSheetsService],
})
export class LoginModule {}
