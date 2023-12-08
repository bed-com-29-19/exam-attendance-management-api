import { Student } from '../entities/student.entity';

export interface StudentService {
  getStudentByRegNumber(studentID: string): Promise<Student>;
  createStudent(student: Student): Promise<Student>;
  editAttendedForStudentTakingThisCourse(
    courseCode: string,
    studentId: string,
    student: Student,
  ): Promise<Student | null>;
  editSubmittedForStudentTakingThisCourse(
    courseCode: string,
    studentId: string,
    student: Student,
  ): Promise<Student | null>;
}
