import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TargetModule } from './modules/target/target.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanDetailModule } from './modules/plan-detail/plan-detail.module';
import { PlanModule } from './modules/plan/plan.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'goal',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),    
    TargetModule,PlanDetailModule,PlanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
