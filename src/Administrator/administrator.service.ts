import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrator } from './entities/admin.entity'; // Adjust this import based on your entity location

@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(Administrator)
    private readonly administratorRepository: Repository<Administrator>,
  ) {}

  async createAdministrator(username: string, password: string): Promise<Administrator> {
    const newAdministrator = this.administratorRepository.create({
      username,
      password,
    });
    return await this.administratorRepository.save(newAdministrator);
  }

  async findAllAdministrator(): Promise<Administrator[]> {
    return this.administratorRepository.find();
  }
}
