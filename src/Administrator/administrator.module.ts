import { Module } from '@nestjs/common';
import { administratorService } from './administrator.service';

@Module({
  providers: [administratorService]
})
export class AdministratorModule {}
