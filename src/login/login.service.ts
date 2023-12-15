import { Injectable } from '@nestjs/common';
import { Invigilator } from './entities/login.entity'; // Import the Invigilator class
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvigilatorDTO } from './dto/Login.dto';


@Injectable()
export class InvigilatorService {
  constructor(
  private invigilators: Invigilator[] = [],// Initialize an empty array to hold Invigilator instances

  @InjectRepository(Invigilator)
  private readonly invigilatorRepository: Repository<Invigilator>,
  ){}

 async createInvigilator(invigilatorData: InvigilatorDTO): Promise<Invigilator> {
    const newInvigilator = this.invigilatorRepository.create(invigilatorData);
    return this.invigilatorRepository.save(newInvigilator);
  }

  async findAllInvigilators(): Promise<Invigilator[]> {
    return this.invigilators;
  }

  async findInvigilatorById(id: number): Promise<Invigilator | undefined> {
    return this.invigilators.find(invigilator => invigilator.id === id);
  }

  async updateInvigilator(id: number, username: string, email: string, password: string): Promise<Invigilator | undefined> {
    const invigilatorToUpdate = this.invigilators.find(invigilator => invigilator.id === id);
    if (invigilatorToUpdate) {
      invigilatorToUpdate.username = username;
      invigilatorToUpdate.email = email;
      invigilatorToUpdate.password = password;
      return invigilatorToUpdate;
    }
    return undefined;
  }

  async deleteInvigilator(id: number): Promise<boolean> {
    const initialLength = this.invigilators.length;
    this.invigilators = this.invigilators.filter(invigilator => invigilator.id !== id);
    return this.invigilators.length !== initialLength;
  }
}
