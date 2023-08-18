import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MachineResourceService } from './machine-resource.service';
import { CreateMachineResourceDto } from './dto/create-machine-resource.dto';
import { UpdateMachineResourceDto } from './dto/update-machine-resource.dto';

@Controller('machine-resource')
export class MachineResourceController {
  constructor(
    private readonly machineResourceService: MachineResourceService
  ) {}

  @Post()
  create(@Body() createMachineResourceDto: CreateMachineResourceDto) {
    return this.machineResourceService.create(createMachineResourceDto);
  }

  @Get()
  findAll() {
    return this.machineResourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineResourceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMachineResourceDto: UpdateMachineResourceDto
  ) {
    return this.machineResourceService.update(+id, updateMachineResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machineResourceService.remove(+id);
  }
}
