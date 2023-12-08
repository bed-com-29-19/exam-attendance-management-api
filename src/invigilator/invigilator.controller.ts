/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InvigilatorDTO } from './dto/create-invigilator.dto';
import { InvigilatorService } from './invigilator.service';

@ApiTags('invigilators')
@Controller('invigilators')
export class InvigilatorController {
  constructor(private readonly invigilatorService: InvigilatorService) {}

  @Get()
  async getAllInvigilators() {
    return this.invigilatorService.getAllInvigilators();
  }

  @Post()
  async createInvigilator(@Body() invigilatorDTO: InvigilatorDTO) {
    return this.invigilatorService.createInvigilator(invigilatorDTO);
  }

  @Get(':id')
  async getInvigilatorById(@Param('id', ParseIntPipe) id: number) {
    return this.invigilatorService.getInvigilatorById(id);
  }

  @Put(':id')
  async updateInvigilator(
    @Param('id', ParseIntPipe) id: number,
    @Body() invigilatorDTO: InvigilatorDTO,
  ) {
    return this.invigilatorService.updateInvigilator(id, invigilatorDTO);
  }

  @Delete(':id')
  async deleteInvigilator(@Param('id', ParseIntPipe) id: number) {
    return this.invigilatorService.deleteInvigilator(id);
  }
}
