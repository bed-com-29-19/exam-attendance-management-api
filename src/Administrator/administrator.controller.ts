import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';

@ApiTags('Invigilator')
@Controller('administrator')
export class InvigilatorController {}