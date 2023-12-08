import { Course } from '../entities/course.entity';
import { Student } from '../entities/student.entity';

export interface CourseService {
  createCourse(course: Course): Promise<Course>;
  studentsInThisCourse(courseCode: string): Promise<Student[]>;
  getCourseByCourseCode(courseCode: string): Promise<Course>;
  getCourseByAttendedTrue(courseCode: string): Promise<Course>;
  addCommentToCourse(
    courseCode: string,
    updatedCourse: Course,
  ): Promise<Course>;
  getCourseBySubmittedTrue(courseCode: string): Promise<Course>;
  getThoseWhoDidNotSubmit(courseCode: string): Promise<Course>;
  getBothAttendedAndSubmitted(courseCode: string): Promise<Course>;
  getNotAttendedAndSubmitted(courseCode: string): Promise<Course>;
}
