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
import { IFaithPointService } from '@modules/faithPoint/service/domain/interfaces/IFaithPointService';
import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';

@Entity('faith_point_service')
class FaithPointService implements IFaithPointService {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => FaithPoint, faithPoint => faithPoint.id, { eager: true })
    @JoinColumn({ name: 'faith_point_id' })
    faith_point: IFaithPoint;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}

export default FaithPointService;