/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Administrator } from '../entities/administrator.entity';
@EntityRepository(Administrator)
export class AdministratorRepository extends Repository<Administrator> {
  async createAdministrator(administratorData: Partial<Administrator>): Promise<Administrator> {
    const administrator = this.create(administratorData);
    return this.save(administrator);
  }

  async getAdministratorById(id: number): Promise<Administrator | undefined> {
    return this.findOne({ where: { id } });
  }

  async updateAdministrator(id: number, administratorData: Partial<Administrator>): Promise<Administrator | undefined> {
    await this.update(id, administratorData);
    return this.findOne({ where: { id } });
  }

  async deleteAdministrator(id: number): Promise<void> {
    await this.delete( id) ;
  }
}
