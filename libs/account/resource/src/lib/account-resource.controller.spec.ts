import { Test, TestingModule } from '@nestjs/testing';
import { AccountResourceController } from './account-resource.controller';
import { AccountResourceService } from './account-resource.service';

describe('AccountResourceController', () => {
  let controller: AccountResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountResourceController],
      providers: [AccountResourceService],
    }).compile();

    controller = module.get<AccountResourceController>(
      AccountResourceController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
