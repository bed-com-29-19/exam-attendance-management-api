/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvigilatorDTO } from './dto/create-invigilator.dto';
import { Invigilator } from './entities/invigilator.entity';
import { InvigilatorRepository } from './repository/invigilatro.repository';
@Injectable()
export class InvigilatorService {
  constructor(
    @InjectRepository(InvigilatorRepository)
    private readonly invigilatorRepository: Repository<Invigilator>,
  ) {}
  async getAllInvigilators(): Promise<Invigilator[]> {
    return this.invigilatorRepository.find();
  }

  async createInvigilator(invigilatorDTO: InvigilatorDTO): Promise<Invigilator> {
    const newInvigilator = this.invigilatorRepository.create(invigilatorDTO);
    return this.invigilatorRepository.save(newInvigilator);
  }

  async getInvigilatorById(id: number): Promise<Invigilator> {
    const invigilator = await this.invigilatorRepository.findOne({ where: { id } });
    if (!invigilator) {
      throw new NotFoundException('Invigilator not found');
    }
    return invigilator;
  }

  async updateInvigilator(
    id: number,
    invigilatorDTO: InvigilatorDTO,
  ): Promise<Invigilator> {
    const invigilator = await this.getInvigilatorById(id);
    Object.assign(invigilator, invigilatorDTO);
    return this.invigilatorRepository.save(invigilator);
  }

  async deleteInvigilator(id: number): Promise<void> {
    const invigilator = await this.getInvigilatorById(id);
    await this.invigilatorRepository.remove(invigilator);
  }
}
