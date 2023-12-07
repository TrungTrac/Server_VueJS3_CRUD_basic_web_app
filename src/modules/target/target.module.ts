import { Module } from '@nestjs/common';
import { TargetService } from './target.service';
import { TargetController } from './target.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Target } from './entities/target.entity';
import { Plan } from '../plan/entities/plan.entity';
import { PlanDetail } from '../plan-detail/entities/plan-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Target, Plan, PlanDetail])],
  controllers: [TargetController],
  providers: [TargetService],
})
export class TargetModule {}
