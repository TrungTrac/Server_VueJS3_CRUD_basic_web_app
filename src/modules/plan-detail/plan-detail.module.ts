import { Module } from '@nestjs/common';
import { PlanDetailService } from './plan-detail.service';
import { PlanDetailController } from './plan-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Target } from '../target/entities/target.entity';
import { Plan } from '../plan/entities/plan.entity';
import { PlanDetail } from './entities/plan-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Target, Plan, PlanDetail])],
  controllers: [PlanDetailController],
  providers: [PlanDetailService],
})
export class PlanDetailModule {}
