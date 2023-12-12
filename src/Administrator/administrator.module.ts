import { Module } from '@nestjs/common';
import { administratorService } from './administrator.service';

@Module({
  providers: [administratorService]
  //Controllers: [AdministratorController]
})
export class AdministratorModule {}
