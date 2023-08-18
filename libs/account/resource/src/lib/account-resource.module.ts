import { Module } from '@nestjs/common';
import { AccountResourceService } from './account-resource.service';
import { AccountResourceController } from './account-resource.controller';

@Module({
  controllers: [AccountResourceController],
  providers: [AccountResourceService],
})
export class AccountResourceModule {}
