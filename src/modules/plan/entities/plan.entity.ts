import { PlanDetail } from "src/modules/plan-detail/entities/plan-detail.entity";
import { Target } from "src/modules/target/entities/target.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Plan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default:""})
    planName: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createAt: Date;

    @Column({default:""})
    planDeadline: string;

    @Column({ default: false })
    isPin: boolean;

    @Column({ default: false })
    isComplete: boolean;

    @Column({ default: 0, nullable: true })
    targetId: number;

    @ManyToOne(() => Target, (target) => target.plans)
    @JoinColumn({ name: 'targetId' })
    target: Target;

    @OneToMany(() => PlanDetail, (planDetail) => planDetail.plans, { cascade: true })
    planDetail: PlanDetail[];
}