import { Plan } from "src/modules/plan/entities/plan.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Target {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default:""})
    targetName: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createAt: Date;

    @Column({ default: false })
    isPin: boolean;

    @Column({ default: false })
    isComplete: boolean;

    @Column({default:""})
    targetDeadline: string;

    @OneToMany(() => Plan, (plan) => plan.target, { cascade: true })
    plans: Plan[];
}
