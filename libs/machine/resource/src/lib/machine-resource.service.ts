import { Injectable } from '@nestjs/common';
import { CreateMachineResourceDto } from './dto/create-machine-resource.dto';
import { UpdateMachineResourceDto } from './dto/update-machine-resource.dto';

@Injectable()
export class MachineResourceService {
  create(createMachineResourceDto: CreateMachineResourceDto) {
    return 'This action adds a new machineResource';
  }

  findAll() {
    return `This action returns all machineResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} machineResource`;
  }

  update(id: number, updateMachineResourceDto: UpdateMachineResourceDto) {
    return `This action updates a #${id} machineResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} machineResource`;
  }
}
