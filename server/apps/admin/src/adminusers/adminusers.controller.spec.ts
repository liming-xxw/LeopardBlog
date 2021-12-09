import { Test, TestingModule } from '@nestjs/testing';
import { AdminusersController } from './adminusers.controller';

describe('AdminusersController', () => {
  let controller: AdminusersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminusersController],
    }).compile();

    controller = module.get<AdminusersController>(AdminusersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
