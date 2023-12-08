/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Invigilator } from '../entities/invigilator.entity';
@EntityRepository(Invigilator)
export class InvigilatorRepository extends Repository<Invigilator> {
  async createInvigilator(invigilatorData: Partial<Invigilator>): Promise<Invigilator> {
    const invigilator = this.create(invigilatorData);
    return this.save(invigilator);
  }

  async getInvigilatorById(id: number): Promise<Invigilator | undefined> {
    return this.findOne({ where: { id } });
  }

  async updateInvigilator(id: number, invigilatorData: Partial<Invigilator>): Promise<Invigilator | undefined> {
    await this.update(id, invigilatorData);
    return this.findOne({ where: { id } });
  }

  async deleteInvigilator(id: number): Promise<void> {
    await this.delete(id);
  }
}
