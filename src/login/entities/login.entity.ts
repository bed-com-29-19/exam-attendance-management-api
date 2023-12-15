import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

//invigilator
@Entity()
export class Invigilator  {
  @PrimaryGeneratedColumn()

  id: number;
  @Column()
  firstname: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

