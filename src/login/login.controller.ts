// login.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { LoginService } from './login.service';
import { Invigilator } from './entities/login.entity';
import { ApiTags } from '@nestjs/swagger';

<<<<<<< HEAD
@ApiTags('invigilator')
@Controller('invigilator')
export class InvigilatorController {
  sheetsService: any;
  constructor(private readonly InvigilatorService: InvigilatorService) {}
=======
@ApiTags('Invigilator')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
>>>>>>> d50ad89780cdff29617dbc4b0ddc3ac1ba1d99bc

  @Post('/createInvigilator')
  async createInvigilator(@Body() invigilatorData: Partial<Invigilator>): Promise<Invigilator> {
    return this.loginService.createInvigilator(invigilatorData);
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
