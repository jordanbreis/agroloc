import { Test, TestingModule } from '@nestjs/testing';
import { RentResourceService } from './rent-resource.service';

describe('RentResourceService', () => {
  let service: RentResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentResourceService],
    }).compile();

    service = module.get<RentResourceService>(RentResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
