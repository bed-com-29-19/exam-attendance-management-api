import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseName: string;

  @Column({ unique: true })
  courseCode: string;

  @Column()
  comment: string;

  @Column()
  yearOffered: number;

  @OneToMany(() => Student, (student) => student.course)
  studentList: Student[];

  constructor(
    courseName: string,
    courseCode: string,
    comment: string,
    yearOffered: number,
  ) {
    this.courseName = courseName;
    this.courseCode = courseCode;
    this.comment = comment;
    this.yearOffered = yearOffered;
  }
}
