import { Module } from '@nestjs/common';
import { administratorService } from './administrator.service';
import { AdministratorController } from './administrator.controller';

@Module({
  providers: [administratorService],
  controllers: [AdministratorController]

})
export class AdministratorModule {}
