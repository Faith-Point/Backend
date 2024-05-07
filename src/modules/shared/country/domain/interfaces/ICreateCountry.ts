import shortContry from '@shared/util/ShortCountry';

interface ICreateCountry {
  	id: string;
	short_name?: shortContry;
	long_name?: string;
	code?: string;
	created_at: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export default ICreateCountry;