/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { InvigilatorService } from './Login.service';
import { Invigilator } from './entities/Login.entity';
import {InvigilatorDTO } from './dto/Login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Invigilator')
@Controller('Invigilator')
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

  @Get(':id')
  async findInvigilatorById(@Param('id') id: string): Promise<Invigilator | undefined> {
    return this.InvigilatorService.findInvigilatorById(+id);
  }

  @Patch(':id')
  async updateInvigilator(
    @Param('id') id: string,
    @Body() InvigilatorData: InvigilatorDTO,
  ): Promise<Invigilator | undefined> {
    const { username, email, password } = InvigilatorData;
    return this.InvigilatorService.updateInvigilator(+id, username, email, password);
  }

  @Delete(':id')
  async deleteInvigilator(@Param('id') id: string): Promise<boolean> {
    return this.InvigilatorService.deleteInvigilator(+id);
  }
}

//adding admin end points 
// @ApiTags('Administrator')
// @Controller('Administrator')
// export class AdministratorController{
//  constructor (private readonly AdministratorService: AdministratorService){}

//  @Post('Login')
//   async createAdministrator(@Body() AdministratorData: AdministratorDTO): Promise<Administrator> {
//     const { username, email, password } = AdministratorData;
//     return this.AdministratorService.createAdministrator(username, email, password);
//   }


// }

