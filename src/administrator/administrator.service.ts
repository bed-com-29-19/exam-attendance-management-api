/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrator } from './entities/administrator.entity';
import { AdministratorDto } from './dto/create-administrator.dto';// Import the repository
import { AdministratorRepository } from './repository/adminstrator.repository';

@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(AdministratorRepository)
    private readonly administratorRepository: Repository<Administrator>,
  ) {}

  async getAllAdministrators(): Promise<Administrator[]> {
    return this.administratorRepository.find();
  }

  async createAdministrator(administratorDto: AdministratorDto): Promise<Administrator> {
    const newAdministrator = this.administratorRepository.create(administratorDto);
    return this.administratorRepository.save(newAdministrator);
  }

  async getAdministratorById(id: number): Promise<Administrator> {
    const administrator = await this.administratorRepository.findOne({ where: { id } });
    if (!administrator) {
      throw new NotFoundException('Administrator not found');
    }
    return administrator;
  }

  async updateAdministrator(id: number, administratorDto: AdministratorDto): Promise<Administrator> {
    const administrator = await this.getAdministratorById(id);
    // Update only properties that were passed in the DTO
    Object.assign(administrator, administratorDto);
    return this.administratorRepository.save(administrator);
  }

  async deleteAdministrator(id: number): Promise<void> {
    const administrator = await this.getAdministratorById(id);
    await this.administratorRepository.remove(administrator);
  }
}
