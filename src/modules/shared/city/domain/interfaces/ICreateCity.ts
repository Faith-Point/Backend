import { IState } from '@modules/shared/state/domain/interfaces/IState';

interface ICreateCity {
	id: string;
	short_name?: string;
	long_name?: string;
	code?: string;
	state: IState;
	created_at: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export default ICreateCity;