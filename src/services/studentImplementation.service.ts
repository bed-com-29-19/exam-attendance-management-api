import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../entities/student.entity';
import { StudentRepository } from '../repositories/student.repository';
import { CourseService } from './course.service';
import { StudentService } from './student.service';

@Injectable()
export class StudentImplementation implements StudentService {
  constructor(
    @InjectRepository(StudentRepository)
    private readonly studentRepo: StudentRepository,
    private readonly courseService: CourseService,
  ) {}
  async getStudentByRegNumber(regNumber: string): Promise<Student> {
    const students = await this.studentRepo.getAttendanceDetails(regNumber);
    return students;
  }

  async createStudent(student: Student): Promise<Student> {
    const a_student = await this.studentRepo.save({
      name: student.name,
      regNumber: student.regNumber,
      courseCode: student.courseCode,
      year: student.year,
      attended: student.attended,
      submitted: student.submitted,
    });

    return a_student;
  }

  async editAttendedForStudentTakingThisCourse(
    courseCode: string,
    regNumber: string,
    aStudent: Student,
  ): Promise<Student | null> {
    const studentsTakingThisCourse =
      await this.courseService.studentsInThisCourse(courseCode);

    // now edit the students attendance
    for (const student of studentsTakingThisCourse) {
      // check if the given regNumber is available in this course
      if (student.regNumber.toLowerCase() === regNumber.toLowerCase()) {
        const editedStudent = await this.studentRepo.findByRegNumber(regNumber);
        editedStudent.attended = aStudent.attended;
        await this.studentRepo.save(editedStudent);

        return editedStudent;
      }
    }

    return null;
  }

  async editSubmittedForStudentTakingThisCourse(
    courseCode: string,
    regNumber: string,
    aStudent: Student,
  ): Promise<Student | null> {
    const studentsTakingThisCourse =
      await this.courseService.studentsInThisCourse(courseCode);

    // now edit the students attendance
    for (const student of studentsTakingThisCourse) {
      // check if the given regNumber is available in this course
      if (student.regNumber.toLowerCase() === regNumber.toLowerCase()) {
        const editedStudent = await this.studentRepo.findByRegNumber(regNumber);
        editedStudent.submitted = aStudent.submitted;
        await this.studentRepo.save(editedStudent);

        return editedStudent;
      }
    }

    return null;
  }
}
