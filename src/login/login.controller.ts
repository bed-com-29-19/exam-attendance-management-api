import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvigilatorService } from './Login.service';
import { Invigilator } from './entities/Login.entity';
import {InvigilatorDTO } from './dto/Login.dto';
import { ApiTags } from '@nestjs/swagger';
import { GoogleSheetsService } from 'src/google-sheets.services';

@ApiTags('invigilator')
@Controller('invigilator')
export class InvigilatorController {
  constructor(private readonly InvigilatorService: InvigilatorService) {}

  @Post('Login')
  async createInvigilator(@Body() InvigilatorData: InvigilatorDTO): Promise<Invigilator> {
    const { username, email, password } = InvigilatorData;
    return this.InvigilatorService.createInvigilator(username, email, password);
  }

  @Get()
  async findAllInvigilators(): Promise<Invigilator[]> {
    return this.InvigilatorService.findAllInvigilators();
  }

  @Post()
  async createInvigilatorData(@Body() invigilatorData: InvigilatorDTO): Promise<Invigilator> {
    const createdInvigilator = await this.invigilatorService.createInvigilator(invigilatorData);

    // Append the data to Google Sheets
    await this.sheetsService.appendRow(Object.values(createdInvigilator));

    return createdInvigilator;
  }

  // constructor(private readonly InvigilatorService: InvigilatorService) {}

  // @Post('Login')
  // async createInvigilator(@Body() InvigilatorData: InvigilatorDTO): Promise<Invigilator> {
  //   const { username, email, password } = InvigilatorData;
  //   return this.InvigilatorService.createInvigilator(username, email, password);
  // }

  // @Get()
  // async findAllInvigilators(): Promise<Invigilator[]> {
  //   return this.InvigilatorService.findAllInvigilators();
  // }

  // @Get(':id')
  // async findInvigilatorById(@Param('id') id: string): Promise<Invigilator | undefined> {
  //   return this.InvigilatorService.findInvigilatorById(+id);
  // }

  // @Patch(':id')
  // async updateInvigilator(
  //   @Param('id') id: string,
  //   @Body() InvigilatorData: InvigilatorDTO,
  // ): Promise<Invigilator | undefined> {
  //   const { username, email, password } = InvigilatorData;
  //   return this.InvigilatorService.updateInvigilator(+id, username, email, password);
  // }

  // @Delete(':id')
  // async deleteInvigilator(@Param('id') id: string): Promise<boolean> {
  //   return this.InvigilatorService.deleteInvigilator(+id);
  // }
}


