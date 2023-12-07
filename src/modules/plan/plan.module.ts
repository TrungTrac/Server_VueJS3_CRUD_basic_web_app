import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Target } from '../target/entities/target.entity';
import { Plan } from './entities/plan.entity';
import { PlanDetail } from '../plan-detail/entities/plan-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Target, Plan, PlanDetail])],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}
