import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { IFaithPointSchedule } from '@modules/faithPoint/schedule/domain/interfaces/IFaithPointSchedule';
import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';

@Entity('faith_point_schedule')
class FaithPointSchedule implements IFaithPointSchedule {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => FaithPoint, faithPoint => faithPoint.id, { eager: true })
    @JoinColumn({ name: 'faith_point_id' })
    faith_point: IFaithPoint;

    @Column()
    date: Date;

    @Column()
    start_time: Date;

    @Column()
    end_time: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}

export default FaithPointSchedule;