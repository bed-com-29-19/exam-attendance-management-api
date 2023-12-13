import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { Administrator } from './entities/admin.entity';
import { AdministratorDTO } from './dto/administrator.dto';
import { administratorService } from './administrator.service';


@ApiTags('Administrator')
@Controller('administrator')
export class AdministratorController {

 constructor (private readonly AdministratorService: administratorService){}

 @Post('Login')
  async createAdministrator(@Body() AdministratorData: AdministratorDTO): Promise<Administrator> {
    const { username, password } = AdministratorData;
    return this.AdministratorService.createAdministrator(username, password);
  }


}

