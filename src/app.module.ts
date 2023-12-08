import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student.controller';
import { StudentImplementation } from './services/studentImplementation.service';
import { CourseImplementationService } from './services/courseImplementation.service';
import { CourseController } from './controllers/course.controller';
@Module({
  imports: [],
  controllers: [StudentController, CourseController],
  providers: [StudentImplementation, CourseImplementationService],
})
export class AppModule {}
