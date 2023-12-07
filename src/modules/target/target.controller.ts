import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TargetService } from './target.service';
import { CreateTargetDto } from './dto/create-target.dto';

@Controller('target')
export class TargetController {
  constructor(private readonly targetService: TargetService) {}

  @Post()
  create(@Body() createTargetDto: CreateTargetDto) {
    
    return this.targetService.create(createTargetDto);
  }

  @Get()
  findAll() {
    return this.targetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.targetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTargetDto: any) { 
    return this.targetService.update(id, updateTargetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
   
    return this.targetService.deleteTargetById(id);
  }
}
