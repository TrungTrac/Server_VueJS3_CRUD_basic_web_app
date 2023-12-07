import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanDetailService } from './plan-detail.service';
import { CreatePlanDetailDto } from './dto/create-plan-detail.dto';
import { UpdatePlanDetailDto } from './dto/update-plan-detail.dto';

@Controller('plandetail')
export class PlanDetailController {
  constructor(private readonly planDetailService: PlanDetailService) {}

  @Post()
  create(@Body() createPlanDetailDto: CreatePlanDetailDto) {
    return this.planDetailService.create(createPlanDetailDto);
  }

  @Get()
  findAll() {
    return this.planDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanDetailDto: UpdatePlanDetailDto) {
    return this.planDetailService.update(+id, updatePlanDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planDetailService.remove(+id);
  }
}
