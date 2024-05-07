/* eslint-disable camelcase */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import ILogException from '@modules/shared/logException/domain/interfaces/ILogException';

@Entity('log_exception')
class LogException implements ILogException {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	message: string;

	@Column()
	code: string;

	@Column()
	type: string;

	@Column()
	stack: string;

	@Column()
	agent: string;

	@Column()
	ip: string;

	@Column()
	url: string;

	@Column()
	method: string;

	@Column()
	data: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}

export default LogException;