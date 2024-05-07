import { ICountry } from '@modules/shared/country/domain/interfaces/ICountry';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import { IState } from '@modules/shared/state/domain/interfaces/IState';
import shortState from '@shared/util/ShortState';

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

@Entity('state')
class State implements IState {
    @PrimaryGeneratedColumn('uuid')
	id: string;

    @Column({
		type: 'enum',
		enum: shortState,
	})
	short_name: shortState;

	@Column()
	long_name: string;	

	@Column()
	code: string;
	
	@ManyToOne(() => Country)
	@JoinColumn({ name: 'country_id' })
	country: ICountry;
    
    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}

export default State;
