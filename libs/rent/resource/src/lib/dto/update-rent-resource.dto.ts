import { PartialType } from '@nestjs/mapped-types';
import { CreateRentResourceDto } from './create-rent-resource.dto';

export class UpdateRentResourceDto extends PartialType(CreateRentResourceDto) {}
