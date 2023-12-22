import { Module } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';
import { Administrator } from './entities/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleSheetsService } from 'src/google-sheets.services';
import { Invigilator } from 'src/login/entities/login.entity';
import { LoginService } from 'src/login/login.service';

@Module({
  imports: [TypeOrmModule.forFeature([Administrator, Invigilator])],
  providers: [AdministratorService, GoogleSheetsService, LoginService ],
  controllers: [AdministratorController]

})
export class AdministratorModule {}
