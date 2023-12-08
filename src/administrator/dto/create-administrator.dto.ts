/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class  AdministratorDto  {
  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;
}
