import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTargetDto } from './dto/create-target.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Target } from './entities/target.entity';
import { Plan } from '../plan/entities/plan.entity';
import { PlanDetail } from '../plan-detail/entities/plan-detail.entity';

@Injectable()
export class TargetService {
  constructor(
    @InjectRepository(Target) private targetRepository: Repository<Target> , 
    @InjectRepository(Plan) private readonly  planRepository:Repository<Plan>,
    @InjectRepository(PlanDetail) private readonly  planingRepository:Repository<PlanDetail>
  ){}
  async create(createTargetDto:CreateTargetDto ) {
    const newTarget =await this.targetRepository.save(createTargetDto)
    return {
   
        newTarget,
     
    };
  }

  findAll() {
    const res = this.targetRepository.find({
      relations: ['plans', 'plans.planDetail'], 
    })
    return res;
  }

  findOne(id: number) {
    const res = this.targetRepository.findOne({
      where:{id},
      relations: ['plans', 'plans.planDetail'],
    })
    return res;
  }

  async update(id: number, updateTargetDto: any) {
    const res = await this.targetRepository.findOne({
      where:{id},
      relations: ['plans', 'plans.planDetail'],
    })
    if (!res) {
      throw new NotFoundException(`Target with ID ${id} not found`);
    }
    const newRes=  this.targetRepository.merge( res ,updateTargetDto.data )
    const newTarget= await this.targetRepository.save(newRes)
    return newTarget;
  }

  async deleteTargetById(id: number): Promise<Target[]> {
    
    const target = await this.targetRepository.findOne({where:{id},
      relations: ['plans', 'plans.planDetail']});


    if (target) {
      
      for(let i in target.plans ){
        for(let j in target.plans[i].planDetail){
          const plandetails = await this.planingRepository.findOne({where:{id:target.plans[i].planDetail[j].id}})
          await this.planingRepository.remove(plandetails);
        }
      }
      for(let i in target.plans){
        const plan = await this.planRepository.findOne({where:{id:target.plans[i].id}})
        await this.planRepository.remove(plan);
      }
     
      await this.targetRepository.remove(target);
    
    } else {
      console.error(`Target with ID ${id} not found.`);
    }
    const res = await this.targetRepository.find()
    return res
  }
}
