import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SignIn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userName: string;

  @Column()
  password: string;

  constructor(userName: string, password: string) {
    this.userName = userName;
    this.password = password;
  }
}
