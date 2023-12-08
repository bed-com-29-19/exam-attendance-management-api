import { Module } from '@nestjs/common';
import { InvigilatorService } from './invigilator/invigilator.service';
import { AdministratorService } from './administrator/administrator.service';
@Module({
  providers: [InvigilatorService, AdministratorService],
})
export class ProviderModule {}
