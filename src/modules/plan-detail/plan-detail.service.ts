import { Injectable } from '@nestjs/common';
import { CreatePlanDetailDto } from './dto/create-plan-detail.dto';
import { UpdatePlanDetailDto } from './dto/update-plan-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanDetail } from './entities/plan-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlanDetailService {
  constructor(
    
    @InjectRepository(PlanDetail) private readonly  planingRepository:Repository<PlanDetail>
  ){}
  async create(createPlandetailDto: CreatePlanDetailDto) {
    const newPlanDetail = await this.planingRepository.save(createPlandetailDto)
    return {newPlanDetail} ;
  }

  findAll() {
    return `This action returns all planDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planDetail`;
  }

  update(id: number, updatePlanDetailDto: UpdatePlanDetailDto) {
    return `This action updates a #${id} planDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} planDetail`;
  }
}
