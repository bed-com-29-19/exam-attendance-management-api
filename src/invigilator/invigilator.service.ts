import { Injectable } from '@nestjs/common';
import { CreateInvigilatorDto } from './dto/create-invigilator.dto';
import { UpdateInvigilatorDto } from './dto/update-invigilator.dto';

@Injectable()
export class InvigilatorService {
  create(createInvigilatorDto: CreateInvigilatorDto) {
    return 'This action adds a new invigilator';
  }

  findAll() {
    return `This action returns all invigilator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invigilator`;
  }

  update(id: number, updateInvigilatorDto: UpdateInvigilatorDto) {
    return `This action updates a #${id} invigilator`;
  }

  remove(id: number) {
    return `This action removes a #${id} invigilator`;
  }
}
