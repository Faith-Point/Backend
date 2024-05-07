import shortCountry from '@shared/util/ShortCountry';

export interface ICountry {
	id: string;
	short_name?: shortCountry;
	long_name?: string;
	code?: string;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}