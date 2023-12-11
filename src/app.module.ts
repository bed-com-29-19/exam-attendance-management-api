/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorModule } from './adminstrator.module';
import { InvigilatorModule } from './invigilator/adminstrator.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AdministratorModule,
    InvigilatorModule,
  ],
=======
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
>>>>>>> 55d5674182c3961db4dac1ba0781a0444fe4dfc1
})
export class AppModule {}
