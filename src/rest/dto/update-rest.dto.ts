import { PartialType } from '@nestjs/mapped-types';
import { CreateRestDto } from './create-rest.dto';

export class UpdateRestDto extends PartialType(CreateRestDto) {}
