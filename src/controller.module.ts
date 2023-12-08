import { Module } from '@nestjs/common';
import { InvigilatorController } from './invigilator/invigilator.controller';
import { AdministratorController } from './administrator/administrator.controller';

@Module({
  controllers: [InvigilatorController, AdministratorController],
})
export class ControllerModule {}
