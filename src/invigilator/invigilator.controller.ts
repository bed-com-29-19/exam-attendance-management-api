/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InvigilatorDTO } from './dto/create-invigilator.dto';
import { InvigilatorService } from './invigilator.service';
<<<<<<< HEAD

@ApiTags('invigilators')
@Controller('invigilators')
=======
import { CreateInvigilatorDto } from './dto/create-invigilator.dto';
import { UpdateInvigilatorDto } from './dto/update-invigilator.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('invigilator')
@Controller('invigilator')
>>>>>>> 55d5674182c3961db4dac1ba0781a0444fe4dfc1
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

<<<<<<< HEAD
  @Put(':id')
  async updateInvigilator(
    @Param('id', ParseIntPipe) id: number,
    @Body() invigilatorDTO: InvigilatorDTO,
  ) {
    return this.invigilatorService.updateInvigilator(id, invigilatorDTO);
=======
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInvigilatorDto: UpdateInvigilatorDto,
  ) {
    return this.invigilatorService.update(+id, updateInvigilatorDto);
>>>>>>> 55d5674182c3961db4dac1ba0781a0444fe4dfc1
  }

  @Delete(':id')
  async deleteInvigilator(@Param('id', ParseIntPipe) id: number) {
    return this.invigilatorService.deleteInvigilator(id);
  }
}
