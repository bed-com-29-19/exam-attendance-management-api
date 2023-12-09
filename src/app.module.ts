import { Module } from '@nestjs/common';
import { InvigilatorModule } from './invigilator/invigilator.module';
import { AdministratorModule } from './administrator/administrator.module';

@Module({
  imports: [InvigilatorModule, AdministratorModule],
})
export class AppModule {}
