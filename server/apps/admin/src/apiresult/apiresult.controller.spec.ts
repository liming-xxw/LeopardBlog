import { Test, TestingModule } from '@nestjs/testing';
import { ApiresultController } from './apiresult.controller';

describe('ApiresultController', () => {
  let controller: ApiresultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiresultController],
    }).compile();

    controller = module.get<ApiresultController>(ApiresultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
