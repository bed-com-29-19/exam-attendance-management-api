/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Administrator {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
