import { EntityRepository, Repository } from 'typeorm';
import { Course } from '../entities/course.entity';

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {
  findByCourseCode(courseCode: string): Promise<Course | undefined> {
    return this.findOne({ where: { courseCode } });
  }
}
