import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountResourceDto } from './create-account-resource.dto';

export class UpdateAccountResourceDto extends PartialType(
  CreateAccountResourceDto
) {}
