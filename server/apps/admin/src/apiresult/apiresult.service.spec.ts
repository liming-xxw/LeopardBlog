import { Test, TestingModule } from '@nestjs/testing';
import { ApiresultService } from './apiresult.service';

describe('ApiresultService', () => {
  let service: ApiresultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiresultService],
    }).compile();

    service = module.get<ApiresultService>(ApiresultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
