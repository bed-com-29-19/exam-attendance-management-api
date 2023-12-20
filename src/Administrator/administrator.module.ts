import { Module } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';
import { Administrator } from './entities/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleSheetsService } from 'src/google-sheets.services';

@Module({
  imports: [TypeOrmModule.forFeature([Administrator])],
  providers: [AdministratorService, GoogleSheetsService ],
  controllers: [AdministratorController]

})
export class AdministratorModule {}
