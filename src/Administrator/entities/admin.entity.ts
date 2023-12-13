import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Administrator  {
  @PrimaryGeneratedColumn()

  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
}
