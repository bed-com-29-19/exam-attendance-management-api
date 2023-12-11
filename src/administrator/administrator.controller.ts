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
<<<<<<< HEAD
import { ApiTags } from '@nestjs/swagger';
@Injectable()
@ApiTags('administrators')
@Controller('administrators')
=======
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('administrator')
@Controller('administrator')
>>>>>>> 55d5674182c3961db4dac1ba0781a0444fe4dfc1
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

<<<<<<< HEAD
  @Put(':id')
  async updateAdministrator(
    @Param('id') id: number,
    @Body() administratorDto: AdministratorDto,
  ) {
    return this.administratorService.updateAdministrator(id, administratorDto);
=======
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdministratorDto: UpdateAdministratorDto) {
    return this.administratorService.update(+id, updateAdministratorDto);
>>>>>>> 55d5674182c3961db4dac1ba0781a0444fe4dfc1
  }

  @Delete(':id')
  async deleteAdministrator(@Param('id') id: number) {
    return this.administratorService.deleteAdministrator(id);
  }
}
