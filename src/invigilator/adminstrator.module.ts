/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Invigilator } from './entities/invigilator.entity';
import { InvigilatorService } from './invigilator.service';
import { InvigilatorRepository } from './repository/invigilatro.repository';
@Module({
  imports: [TypeOrmModule.forFeature([Invigilator, InvigilatorRepository])],
  providers: [InvigilatorService],
})
export class InvigilatorModule {}
