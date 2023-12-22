import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrator } from './entities/admin.entity'; 
import { Invigilator } from 'src/login/entities/login.entity';

@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(Administrator)
    private readonly administratorRepository: Repository<Administrator>,
  
    @InjectRepository(Invigilator)
    private readonly invigilatorRepository: Repository<Invigilator>,
  ) {}

 

  createAdministrator(username: string, password: string): Promise<Administrator> {
    const newAdministrator = this.administratorRepository.create({
      username,
      password,
    });

    return  this.administratorRepository.save(newAdministrator);
  }

  async findAllAdministrator(): Promise<Administrator[]> {
    return this.administratorRepository.find();
  }

  async createInvigilator(invigilatorData: Partial<Invigilator>): Promise<Invigilator> {
    const newInvigilator = this.invigilatorRepository.create(invigilatorData);
    return await this.invigilatorRepository.save(newInvigilator);
  }

}
