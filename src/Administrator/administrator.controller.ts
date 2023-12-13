import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { administratorService } from './administrator.service';
import { AdministratorDTO } from './dto/administrator.dto';
import { Administrator } from './entities/admin.entity';
@ApiTags('Administrator')
@Controller('administrator')
export class AdministratorController {

 constructor (private readonly AdministratorService: administratorService){}

 @Post('Signup')
  async createAdministrator(@Body() AdministratorData: AdministratorDTO): Promise<Administrator> {
    const { username, password } = AdministratorData;
    return this.AdministratorService.createAdministrator(username, password);
  }
  @Get('Login')
  async findAllAdministrator(): Promise<Administrator[]> {
    return this.AdministratorService.findAllAdministrator();
  }


}

