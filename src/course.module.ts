import { Module } from '@nestjs/common';
import { CourseImplementationService } from './services/courseImplementation.service';
import { CourseController } from './controllers/course.controller';
@Module({
  imports: [],
  controllers: [CourseController, CourseController],
  providers: [CourseImplementationService],
})
export class CourseModule {}
