import { Module } from '@nestjs/common';
import { InvigilatorController} from './login.controller';
import { InvigilatorService} from './Login.service';

@Module({
  controllers: [InvigilatorController],
  providers: [InvigilatorService],
})
export class LoginModule {}
