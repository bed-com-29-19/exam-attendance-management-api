import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from '../entities/course.entity';
import { Student } from '../entities/student.entity';
import { CourseRepository } from '../repositories/course.repository';
import { StudentRepository } from '../repositories/student.repository';
import { CourseService } from './course.service';

@Injectable()
export class CourseImplementationService implements CourseService {
  constructor(
    @InjectRepository(CourseRepository)
    private readonly courseRepo: CourseRepository,
    @InjectRepository(StudentRepository)
    private readonly studentRepo: StudentRepository,
  ) {}
  async createCourse(course: Course): Promise<Course> {
    const a_course = await this.courseRepo.save({
      courseName: course.courseName,
      courseCode: course.courseCode,
      comment: course.comment,
      yearOffered: course.yearOffered,
    });
    return a_course;
  }

  async studentsInThisCourse(courseCode: string): Promise<Student[]> {
    const course = await this.courseRepo.findByCourseCode(courseCode);

    const studentList = await this.studentRepo.find();

    const studentsTakingThisCourse = studentList.filter((student) =>
      student.regNumber.includes(courseCode.toLowerCase()),
    );

    course.studentList = studentsTakingThisCourse;

    return studentsTakingThisCourse;
  }

  async getCourseByCourseCode(courseCode: string): Promise<Course> {
    const course = await this.courseRepo.findByCourseCode(courseCode);

    course.studentList = await this.studentsInThisCourse(courseCode);

    await this.courseRepo.save(course);

    return course;
  }

  async getCourseByAttendedTrue(courseCode: string): Promise<Course> {
    const course = await this.courseRepo.findByCourseCode(courseCode);

    const studentList = await this.studentRepo.find();

    const studentsAttended = studentList.filter(
      (student) =>
        student.courseCode === courseCode.toLowerCase() &&
        student.attended === true,
    );

    course.studentList = studentsAttended;

    return course;
  }

  async addCommentToCourse(
    courseCode: string,
    updatedCourse: Course,
  ): Promise<Course> {
    const course = await this.courseRepo.findByCourseCode(courseCode);
    course.comment = updatedCourse.comment;

    await this.courseRepo.save(course);

    return course;
  }

  async getCourseBySubmittedTrue(courseCode: string): Promise<Course> {
    const course = await this.courseRepo.findByCourseCode(courseCode);

    const studentList = await this.studentRepo.find();

    const studentsSubmitted = studentList.filter(
      (student) =>
        student.courseCode === courseCode.toLowerCase() &&
        student.submitted === true,
    );

    course.studentList = studentsSubmitted;

    return course;
  }

  async getThoseWhoDidNotSubmit(courseCode: string): Promise<Course> {
    const course = await this.courseRepo.findByCourseCode(courseCode);

    const studentList = await this.studentsInThisCourse(courseCode);

    const studentsNotSubmitted = studentList.filter(
      (student) => student.submitted === false && student.attended === true,
    );

    course.studentList = studentsNotSubmitted;

    return course;
  }

  async getBothAttendedAndSubmitted(courseCode: string): Promise<Course> {
    const course = await this.courseRepo.findByCourseCode(courseCode);

    const studentList = await this.studentRepo.find();

    const attendedAndSubmittedList = studentList.filter(
      (student) =>
        student.courseCode === courseCode.toLowerCase() &&
        student.attended === true &&
        student.submitted === true,
    );

    course.studentList = attendedAndSubmittedList;

    return course;
  }

  async getNotAttendedAndSubmitted(courseCode: string): Promise<Course> {
    const course = await this.courseRepo.findByCourseCode(courseCode);

    const studentList = await this.studentRepo.find();

    const notAttendedAndSubmittedList = studentList.filter(
      (student) =>
        student.courseCode === courseCode.toLowerCase() &&
        student.attended === false &&
        student.submitted === false,
    );

    course.studentList = notAttendedAndSubmittedList;

    return course;
  }
  async getAttendanceDetails(courseCode: string) {
    const students = await this.studentRepo.getAttendanceDetails(courseCode);
    return students;
  }
}
