/* eslint-disable prettier/prettier */
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('api/docs')
export class SwaggerController {
  @Get()
  getSwagger(@Res() res: Response): void {
    res.sendFile(join(__dirname, 'swagger-ui.html'));
  }
}
