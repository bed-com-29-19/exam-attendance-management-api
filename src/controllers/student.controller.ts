import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { StudentService } from '../services/student.service';
import { Student } from '../entities/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createStudent(@Body() student: Student): Promise<Student> {
    return this.studentService.createStudent(student);
  }
  @Get(':regNumber')
  getStudentByRegNumber(
    @Param('regNumber') regNumber: string,
  ): Promise<Student> {
    return this.studentService.getStudentByRegNumber(regNumber);
  }

  @Put('edit/attended/:courseCode/:regNumber')
  editAttendedForStudentTakingThisCourse(
    @Param('courseCode') courseCode: string,
    @Param('regNumber') regNumber: string,
    @Body() student: Student,
  ): Promise<Student | null> {
    return this.studentService.editAttendedForStudentTakingThisCourse(
      courseCode,
      regNumber,
      student,
    );
  }

  @Put('edit/submitted/:courseCode/:regNumber')
  editSubmittedForStudentTakingThisCourse(
    @Param('courseCode') courseCode: string,
    @Param('regNumber') regNumber: string,
    @Body() student: Student,
  ): Promise<Student | null> {
    return this.studentService.editSubmittedForStudentTakingThisCourse(
      courseCode,
      regNumber,
      student,
    );
  }
}
