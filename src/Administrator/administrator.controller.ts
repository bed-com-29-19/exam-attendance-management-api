import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Administrator } from './entities/admin.entity';
import { AdministratorDTO } from './dto/administrator.dto';
//import { GoogleSheetsService } from 'src/google-sheets.services';
import { AdministratorService } from './administrator.service'; // Make sure to import the correct path
import { InvigilatorDTO } from 'src/login/dto/login.dto';
import { Invigilator } from 'src/login/entities/login.entity';


@ApiTags('Administrator')
@Controller('Administrator')
export class AdministratorController {
  constructor(
    ///private readonly sheetsService: GoogleSheetsService,
    private readonly administratorService: AdministratorService,
    ) {}

  @Post('Login')
  async createAdministrator(@Body() administratorData: AdministratorDTO): Promise<Administrator> {
    const { username, password } = administratorData;
    return this.administratorService.createAdministrator(username, password);
  }
  
  @Post('CreateInvigilator')
async createInvigilator(@Body() invigilatorData: InvigilatorDTO): Promise<Invigilator>{

  const {firstname, username, email, password} = invigilatorData;
  return await this.administratorService.createInvigilator(invigilatorData);
}


}
