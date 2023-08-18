import { Injectable } from '@nestjs/common';
import { CreateAccountResourceDto } from './dto/create-account-resource.dto';
import { UpdateAccountResourceDto } from './dto/update-account-resource.dto';

@Injectable()
export class AccountResourceService {
  create(createAccountResourceDto: CreateAccountResourceDto) {
    return 'This action adds a new accountResource';
  }

  findAll() {
    return `This action returns all accountResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountResource`;
  }

  update(id: number, updateAccountResourceDto: UpdateAccountResourceDto) {
    return `This action updates a #${id} accountResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountResource`;
  }
}
