/* eslint-disable prettier/prettier */

// login.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { LoginService } from './login.service';
import { Invigilator } from './entities/login.entity';
import { ApiTags } from '@nestjs/swagger';
import { InvigilatorDTO } from './dto/login.dto';

@ApiTags('invigilator')
@Controller('invigilator')
export class InvigilatorController {
  sheetsService: any;
  loginService: any;
  constructor(private readonly InvigilatorService: LoginService) {}

  // @Post('/createInvigilator')
  // async createInvigilator(@Body() invigilatorData: Partial<Invigilator>): Promise<Invigilator> {
  //   return this.loginService.createInvigilator(invigilatorData);
  // }

 

  @Post('/createInvigilator')
  async createInvigilator(@Body() InvigilatorData: InvigilatorDTO): Promise<Invigilator>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { username, email, password, } = InvigilatorData;
    return this.loginService.createInvigilator(InvigilatorData);
  }

  @Get('/getInvigilators')
  getinvigilator(){
      return this.loginService.getInvigilator();
  }

  @Get('/getInvigilator/:id')
  async getInvigilator(@Param('id') id: number): Promise<Invigilator> {
    return this.loginService.getOneInvigilator(id);
  }

  @Delete('/removeInvigilator/:id')
  async removeInvigilator(@Param('id', ParseIntPipe) id: number){
    return this.loginService.removeInvigilator(id);
  }

  @Put('/updateInvigilator/:id')
  async updateInvigilator(
    @Param('id') id: number,
    @Body() invigilatorData: Partial<Invigilator>,
  ): Promise<Invigilator> {
    return this.loginService.updateInvigilator(id, invigilatorData);
  }
}
