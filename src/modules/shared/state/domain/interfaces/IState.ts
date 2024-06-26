import { ICountry } from '@modules/shared/country/domain/interfaces/ICountry';
import shortState from '@shared/util/ShortState';

export interface IState {
	id: string;
	short_name?: shortState;
	long_name?: string;
	code?: string;
	country: ICountry;
	created_at: Date;
	updated_at?: Date;
	deleted_at?: Date;
}