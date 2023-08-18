import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountResourceService } from './account-resource.service';
import { CreateAccountResourceDto } from './dto/create-account-resource.dto';
import { UpdateAccountResourceDto } from './dto/update-account-resource.dto';

@Controller('account-resource')
export class AccountResourceController {
  constructor(
    private readonly accountResourceService: AccountResourceService
  ) {}

  @Post()
  create(@Body() createAccountResourceDto: CreateAccountResourceDto) {
    return this.accountResourceService.create(createAccountResourceDto);
  }

  @Get()
  findAll() {
    return this.accountResourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountResourceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountResourceDto: UpdateAccountResourceDto
  ) {
    return this.accountResourceService.update(+id, updateAccountResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountResourceService.remove(+id);
  }
}
