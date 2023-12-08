import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class invigilator {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}