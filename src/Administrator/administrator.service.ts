import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { administrator} from './administrator';
import { CreateAdministratorDto } from './create-administrator.dto';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class administratorServiceService {
  constructor(
    @InjectRepository(administrator)
    private readonly administratorRepositary: Repository<administrator>,
  ) {}

  async createAdministrator(createAdministratorDto: CreateAdministratorDto): Promise<administrator> {
    const administrator = this.administratorRepositary.create(createAdministratorDto);
    return await this.administratorRepositary.save(administrator);
  }
}


@Injectable()
export class administratorService {}