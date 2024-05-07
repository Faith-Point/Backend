import { ICountry } from '@modules/shared/country/domain/interfaces/ICountry';
import shortCountry from '@shared/util/ShortCountry';

import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('country')
class Country implements ICountry {
    @PrimaryGeneratedColumn('uuid')
	id: string;

    @Column({
		type: 'enum',
		enum: shortCountry,
	})
	short_name: shortCountry;

	@Column()
	long_name: string;	
	
	@Column()
	code: string;
    
    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}

export default Country;