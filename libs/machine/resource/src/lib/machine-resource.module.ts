import { Module } from '@nestjs/common';
import { MachineResourceService } from './machine-resource.service';
import { MachineResourceController } from './machine-resource.controller';

@Module({
  controllers: [MachineResourceController],
  providers: [MachineResourceService],
})
export class MachineResourceModule {}
