import { Test, TestingModule } from '@nestjs/testing';
import { MachineResourceController } from './machine-resource.controller';
import { MachineResourceService } from './machine-resource.service';

describe('MachineResourceController', () => {
  let controller: MachineResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MachineResourceController],
      providers: [MachineResourceService],
    }).compile();

    controller = module.get<MachineResourceController>(
      MachineResourceController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
