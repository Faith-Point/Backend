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
import { IFaithPointSubscription } from '@modules/faithPoint/subscription/domain/interfaces/IFaithPointSubscription';
import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';
import { IUser } from '@modules/user/domain/interfaces/IUser';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';
import User from '@modules/user/infra/typeorm/entities/User';

@Entity('faith_point_subscription')
class FaithPointSubscription implements IFaithPointSubscription {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => FaithPoint, faithPoint => faithPoint.id, { eager: true })
    @JoinColumn({ name: 'faith_point_id' })
    faith_point: IFaithPoint;

    @ManyToOne(() => User, user => user.id, { eager: true })
    @JoinColumn({ name: 'user_id' })
    user: IUser;

    @Column()
    is_active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}

export default FaithPointSubscription;