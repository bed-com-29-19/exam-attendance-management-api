import { Module } from '@nestjs/common';
import { InvigilatorService } from './invigilator.service';
import { InvigilatorController } from './invigilator.controller';

@Module({
  controllers: [InvigilatorController],
  providers: [InvigilatorService],
})
export class InvigilatorModule {}
