import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';
import {  CreateAdministratorDto } from './create-administrator.dto';
@ApiTags('administrator')
@Controller('administrator')
export class AdmininistratorController {
  administratorService: any;
  constructor() {}

  @Post('create-administrator')
  async createAdministrator(@Body() createAdministratorDto: CreateAdministratorDto): Promise<Administrator> {
    return this.administratorService.createAdministrator(createAdministratorDto);
  }
}
