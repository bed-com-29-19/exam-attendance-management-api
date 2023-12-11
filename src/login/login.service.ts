import { Injectable } from '@nestjs/common';
import { Invigilator } from './entities/login.entity'; // Import the Invigilator class

@Injectable()
export class InvigilatorService {
  private invigilators: Invigilator[] = []; // Initialize an empty array to hold Invigilator instances

  async createInvigilator(username: string, email: string, password: string): Promise<Invigilator> {
    const newInvigilator = new Invigilator();
    newInvigilator.username = username;
    newInvigilator.email = email;
    newInvigilator.password = password;

    this.invigilators.push(newInvigilator);
    return newInvigilator;
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
