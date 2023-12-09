import { Module } from '@nestjs/common';
import { InvigilatorModule } from './invigilator/invigilator.module';
import { AdministratorModule } from './administrator/administrator.module';
import { SwaggerController } from './swagger.controller';
import { CourseModule } from './course/course.module';
import { StudentModule } from './student/student.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';

@Module({
  imports: [
    InvigilatorModule,
    AdministratorModule,
    CourseModule,
    StudentModule,
    LoginModule,
    SignupModule,
  ],
  controllers: [SwaggerController],
})
export class AppModule {}
