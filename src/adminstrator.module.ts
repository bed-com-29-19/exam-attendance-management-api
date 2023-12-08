/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Administrator } from './administrator/entities/administrator.entity';
import { AdministratorRepository } from './administrator/repository/adminstrator.repository';
import { AdministratorService } from './administrator/administrator.service';
@Module({
  imports: [TypeOrmModule.forFeature([Administrator, AdministratorRepository])],
  providers: [AdministratorService],
})
export class AdministratorModule {}
