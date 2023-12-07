import { Test, TestingModule } from '@nestjs/testing';
import { PlanDetailController } from './plan-detail.controller';
import { PlanDetailService } from './plan-detail.service';

describe('PlanDetailController', () => {
  let controller: PlanDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanDetailController],
      providers: [PlanDetailService],
    }).compile();

    controller = module.get<PlanDetailController>(PlanDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
