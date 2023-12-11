<<<<<<< HEAD
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
=======
export class Administrator {}
>>>>>>> 55d5674182c3961db4dac1ba0781a0444fe4dfc1
