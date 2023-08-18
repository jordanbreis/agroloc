import { Test, TestingModule } from '@nestjs/testing';
import { RentResourceController } from './rent-resource.controller';
import { RentResourceService } from './rent-resource.service';

describe('RentResourceController', () => {
  let controller: RentResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentResourceController],
      providers: [RentResourceService],
    }).compile();

    controller = module.get<RentResourceController>(RentResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
