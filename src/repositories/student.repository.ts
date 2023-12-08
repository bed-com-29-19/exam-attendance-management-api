import { EntityRepository, Repository } from 'typeorm';
import { Student } from '../entities/student.entity';

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  findAll() {
    throw new Error('Method not implemented.');
  }
  findByRegNumber(regNumber: string) {
    return this.findOne({ where: { regNumber } });
  }
  getAttendanceDetails(courseCode: string) {
    return this.findOne({ where: { courseCode } });
  }
}
