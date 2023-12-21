import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Administrator } from './entities/admin.entity';
import { AdministratorDTO } from './dto/administrator.dto';
<<<<<<< HEAD
import { administratorService } from './administrator.service';
import { GoogleSheetsService } from 'src/google-sheets.services';

=======
import { AdministratorService } from './administrator.service';
import { GoogleSheetsService } from 'src/google-sheets.services';
>>>>>>> d50ad89780cdff29617dbc4b0ddc3ac1ba1d99bc

@ApiTags('Administrator')
@Controller('Administrator')
export class AdministratorController {
<<<<<<< HEAD
  AdministratorService: any;

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

  //@Post('create-administrator')
  //createAdministrator(@Body() data: any): string {
     // const { username, password } = data;
     // return this.AdministratorService.createAdministrator(username, password);
  //}
}
=======
  constructor(
    private readonly administratorService: AdministratorService,
    private readonly sheetsService: GoogleSheetsService,
  ) {}

  @Get()
  async getAdministratorData(): Promise<any[]> {
    const data = await this.sheetsService.getSheetData();
    return data;
  }

  // @Post()
  // createAdministrator(@Body() data: any): string {
  //   this.sheetsService.appendRow(Object.values(data));
  //   return 'Administrator Data Created';
  // }

  @Post('Login')
  async createAdministrator(@Body() administratorData: AdministratorDTO): Promise<Administrator> {
    const { username, password } = administratorData;
    return this.administratorService.createAdministrator(username, password);
  }
}
>>>>>>> d50ad89780cdff29617dbc4b0ddc3ac1ba1d99bc
