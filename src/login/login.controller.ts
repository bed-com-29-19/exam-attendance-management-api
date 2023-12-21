// login.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { LoginService } from './login.service';
import { Invigilator } from './entities/login.entity';
import { ApiTags } from '@nestjs/swagger';
import { InvigilatorDTO } from './dto/login.dto';

@ApiTags('Invigilator')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  // @Post('/createInvigilator')
  // async createInvigilator(@Body() invigilatorData: Partial<Invigilator>): Promise<Invigilator> {
  //   return this.loginService.createInvigilator(invigilatorData);
  // }

 

  @Post('/createInvigilator')
  async createInvigilator(@Body() InvigilatorData: InvigilatorDTO): Promise<Invigilator>{
    const { username, email, password, } = InvigilatorData;
    return this.loginService.createInvigilator(InvigilatorData);
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
