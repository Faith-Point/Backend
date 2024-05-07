import { IAddress } from '@modules/shared/address/domain/interfaces/IAddress';
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
import City from '@modules/shared/city/infra/typeorm/entities/City';
import { ICity } from '@modules/shared/city/domain/interfaces/ICity';

@Entity('address')
class Address implements IAddress {
    @PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	street: string;

	@Column()
	number: string;

	@Column()
	complement: string;

	@Column()
	neighborhood: string;
	
	@ManyToOne(() => City)
	@JoinColumn({ name: 'city_id' })
	city: ICity;
    
    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}

export default Address;
