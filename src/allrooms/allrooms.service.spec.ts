import { Test, TestingModule } from '@nestjs/testing';
import { AllroomsService } from './allrooms.service';

describe('AllroomsService', () => {
  let service: AllroomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllroomsService],
    }).compile();

    service = module.get<AllroomsService>(AllroomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
