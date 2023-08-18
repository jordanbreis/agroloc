import { Test, TestingModule } from '@nestjs/testing';
import { AccountResourceService } from './account-resource.service';

describe('AccountResourceService', () => {
  let service: AccountResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountResourceService],
    }).compile();

    service = module.get<AccountResourceService>(AccountResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
