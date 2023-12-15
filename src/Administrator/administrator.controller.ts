import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Administrator } from './entities/admin.entity';
import { AdministratorDTO } from './dto/administrator.dto';
import { administratorService } from './administrator.service';
import { GoogleSheetsService } from 'src/google-sheets.services';


@ApiTags('Administrator')
@Controller('Administrator')
export class AdministratorController {

constructor(private readonly sheetsService: GoogleSheetsService){}

@Get()
async getAdministratorData(): Promise<any[]> {
  const data = await this.sheetsService.getSheetData();
  return data;
}

@Post()
createAdministrator(@Body() data: any): string {
  this.sheetsService.appendRow(Object.values(data));
  return 'Administrator Data Created';

}

//  constructor (private readonly AdministratorService: administratorService){}

//  @Post('Login')
//   async createAdministrator(@Body() AdministratorData: AdministratorDTO): Promise<Administrator> {
//     const { username, password } = AdministratorData;
//     return this.AdministratorService.createAdministrator(username, password);
//   }

  

}

