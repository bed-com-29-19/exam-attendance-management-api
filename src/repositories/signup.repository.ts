import { SignIn } from 'src/entities/signin.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(SignIn)
export class SignupRepository extends Repository<SignIn> {
  findByUserName(userName: string): Promise<SignIn | undefined> {
    return this.findOne({ where: { userName } });
  }
}
