import { Test, TestingModule } from '@nestjs/testing';
import { AdminusersService } from './adminusers.service';

describe('AdminusersService', () => {
  let service: AdminusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminusersService],
    }).compile();

    service = module.get<AdminusersService>(AdminusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
