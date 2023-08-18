import { Injectable } from '@nestjs/common';
import { CreateRentResourceDto } from './dto/create-rent-resource.dto';
import { UpdateRentResourceDto } from './dto/update-rent-resource.dto';

@Injectable()
export class RentResourceService {
  create(createRentResourceDto: CreateRentResourceDto) {
    return 'This action adds a new rentResource';
  }

  findAll() {
    return `This action returns all rentResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rentResource`;
  }

  update(id: number, updateRentResourceDto: UpdateRentResourceDto) {
    return `This action updates a #${id} rentResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} rentResource`;
  }
}
