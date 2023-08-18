import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RentResourceService } from './rent-resource.service';
import { CreateRentResourceDto } from './dto/create-rent-resource.dto';
import { UpdateRentResourceDto } from './dto/update-rent-resource.dto';

@Controller('rent-resource')
export class RentResourceController {
  constructor(private readonly rentResourceService: RentResourceService) {}

  @Post()
  create(@Body() createRentResourceDto: CreateRentResourceDto) {
    return this.rentResourceService.create(createRentResourceDto);
  }

  @Get()
  findAll() {
    return this.rentResourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentResourceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRentResourceDto: UpdateRentResourceDto
  ) {
    return this.rentResourceService.update(+id, updateRentResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentResourceService.remove(+id);
  }
}
