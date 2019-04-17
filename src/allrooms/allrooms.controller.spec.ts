import { Test, TestingModule } from '@nestjs/testing';
import { AllroomsController } from './allrooms.controller';

describe('Allrooms Controller', () => {
  let controller: AllroomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllroomsController],
    }).compile();

    controller = module.get<AllroomsController>(AllroomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
