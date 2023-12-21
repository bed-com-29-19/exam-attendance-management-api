import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Administrator } from './entities/admin.entity';
import { AdministratorDTO } from './dto/administrator.dto';
import { GoogleSheetsService } from 'src/google-sheets.services';


@ApiTags('Administrator')
@Controller('Administrator')
export class AdministratorController {
  AdministratorService: any;

constructor(private readonly sheetsService: GoogleSheetsService){}

  // @Post()
  // createAdministrator(@Body() data: any): string {
  //   this.sheetsService.appendRow(Object.values(data));
  //   return 'Administrator Data Created';
  // }

  @Post('Login')
  async createAdministrator(@Body() administratorData: AdministratorDTO): Promise<Administrator> {
    const { username, password } = administratorData;
    return this.AdministratorService.createAdministrator(username, password);
  }
}
