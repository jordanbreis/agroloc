import { Test, TestingModule } from '@nestjs/testing';
import { MachineResourceService } from './machine-resource.service';

describe('MachineResourceService', () => {
  let service: MachineResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachineResourceService],
    }).compile();

    service = module.get<MachineResourceService>(MachineResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
