/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Injectable,
} from '@nestjs/common';
import { AdministratorDto} from './dto/create-administrator.dto';
import { AdministratorService } from './administrator.service';
import { ApiTags } from '@nestjs/swagger';
@Injectable()
@ApiTags('administrators')
@Controller('administrators')
export class AdministratorController {
  constructor(private readonly administratorService: AdministratorService) {}

  @Get()
  async getAllAdministrators() {
    return this.administratorService.getAllAdministrators();
  }

  @Post()
  async createAdministrator(@Body() administratorDTO: AdministratorDto) {
    return this.administratorService.createAdministrator(administratorDTO);
  }

  @Get(':id')
  async getAdministratorById(@Param('id') id: number) {
    return this.administratorService.getAdministratorById(id);
  }

  @Put(':id')
  async updateAdministrator(
    @Param('id') id: number,
    @Body() administratorDto: AdministratorDto,
  ) {
    return this.administratorService.updateAdministrator(id, administratorDto);
  }

  @Delete(':id')
  async deleteAdministrator(@Param('id') id: number) {
    return this.administratorService.deleteAdministrator(id);
  }
}
