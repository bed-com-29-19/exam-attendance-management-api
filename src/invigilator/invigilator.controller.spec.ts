import { Test, TestingModule } from '@nestjs/testing';
import { InvigilatorController } from './invigilator.controller';
import { InvigilatorService } from './invigilator.service';

describe('InvigilatorController', () => {
  let controller: InvigilatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvigilatorController],
      providers: [InvigilatorService],
    }).compile();

    controller = module.get<InvigilatorController>(InvigilatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
