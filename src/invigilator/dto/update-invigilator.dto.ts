import { PartialType } from '@nestjs/swagger';
import { CreateInvigilatorDto } from './create-invigilator.dto';

export class UpdateInvigilatorDto extends PartialType(CreateInvigilatorDto) {}
