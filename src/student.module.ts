import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student.controller';
import { StudentImplementation } from './services/studentImplementation.service';
@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentImplementation],
})
export class StudentModule {}
