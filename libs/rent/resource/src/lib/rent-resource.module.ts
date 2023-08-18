import { Module } from '@nestjs/common';
import { RentResourceService } from './rent-resource.service';
import { RentResourceController } from './rent-resource.controller';

@Module({
  controllers: [RentResourceController],
  providers: [RentResourceService],
})
export class RentResourceModule {}
