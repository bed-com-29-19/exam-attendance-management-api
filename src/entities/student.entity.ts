import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  regNumber: string;

  @Column()
  courseCode: string;

  @Column()
  year: number;

  @Column()
  attended: boolean;

  @Column()
  submitted: boolean;

  @ManyToOne(() => Course, (course) => course.studentList, { eager: true })
  course: Course;

  constructor(
    name: string,
    regNumber: string,
    courseCode: string,
    year: number,
    attended: boolean,
    submitted: boolean,
  ) {
    this.name = name;
    this.regNumber = regNumber;
    this.courseCode = courseCode;
    this.year = year;
    this.attended = attended;
    this.submitted = submitted;
  }
}
