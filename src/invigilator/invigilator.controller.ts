import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvigilatorService } from './invigilator.service';
import { CreateInvigilatorDto } from './dto/create-invigilator.dto';
import { UpdateInvigilatorDto } from './dto/update-invigilator.dto';

@Controller('invigilator')
export class InvigilatorController {
  constructor(private readonly invigilatorService: InvigilatorService) {}

  @Post()
  create(@Body() createInvigilatorDto: CreateInvigilatorDto) {
    return this.invigilatorService.create(createInvigilatorDto);
  }

  @Get()
  findAll() {
    return this.invigilatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invigilatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvigilatorDto: UpdateInvigilatorDto) {
    return this.invigilatorService.update(+id, updateInvigilatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invigilatorService.remove(+id);
  }
}
