import { Injectable } from '@nestjs/common';
import { Administrator } from './entities/admin.entity';
@Injectable()
export class administratorService {

  private administrators: Administrator[] = [];
   //this service is for the login of Administrators 
   async createAdministrator(username: string, password: string): Promise<Administrator> {
    const newAdministrator = new Administrator();
    newAdministrator.username = username;
    newAdministrator.password = password;
    this.administrators.push(newAdministrator);
    return newAdministrator;
  }
  async findAllAdministrator(): Promise<Administrator[]> {
    return this.administrators;
  }

}