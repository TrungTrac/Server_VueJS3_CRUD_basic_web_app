import { Plan } from "src/modules/plan/entities/plan.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class PlanDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default:""})
    focusTarget: string;

    @Column({default:""})
    mustDo: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createAt: Date;

    @Column({default:""})
    deadline: string;

    @Column({ default: false })
    isComplete: boolean;

    @Column({ default: 0, nullable: true })
    planId: number;

    @ManyToOne(() => Plan, (plans) => plans.planDetail)
    @JoinColumn({ name: 'planId' })
    plans: Plan;
}

