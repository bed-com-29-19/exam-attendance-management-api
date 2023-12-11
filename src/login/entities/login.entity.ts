import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
@Entity()
export class Invigilator  {
  @PrimaryGeneratedColumn()

  id: number;
  @Column()
firstname: string;
@Column()
surname:string;
  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
