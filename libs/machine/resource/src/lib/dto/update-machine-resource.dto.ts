import { PartialType } from '@nestjs/mapped-types';
import { CreateMachineResourceDto } from './create-machine-resource.dto';

export class UpdateMachineResourceDto extends PartialType(
  CreateMachineResourceDto
) {}
