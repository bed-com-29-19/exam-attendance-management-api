import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invigilator } from './entities/login.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Invigilator)
    private readonly invigilatorRepository: Repository<Invigilator>,
  ) {}

  // async createInvigilator(invigilatorData: Partial<Invigilator>): Promise<Invigilator> {
  //   const newInvigilator = this.invigilatorRepository.create(invigilatorData);
  //   return await this.invigilatorRepository.save(newInvigilator);
  // }

  async getInvigilator(): Promise<Invigilator[]>{
    return await this.invigilatorRepository.find();
  }

  async getOneInvigilator(id: number): Promise<Invigilator> {
    const invigilator = await this.invigilatorRepository.findOneById('id');
    if (!invigilator) {
      throw new NotFoundException(`Invigilator with ID ${id} not found`);
    }
    return invigilator;
  }

  async removeInvigilator(id: number){
    return this.invigilatorRepository.delete(id);
  }

  async updateInvigilator(id: number, invigilatorData: Partial<Invigilator>): Promise<Invigilator> {
    await this.getOneInvigilator(id); // Check if invigilator exists
    await this.invigilatorRepository.update(id, invigilatorData);
    return await this.invigilatorRepository.findOneById(id);
  }
}
