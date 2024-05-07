import { ICountry } from '@modules/shared/country/domain/interfaces/ICountry';
import shortState from '@shared/util/ShortState';

interface IUpdateState {
  	short_name?: shortState;
	long_name?: string;
	code?: string;
	country?: ICountry;
	updated_at: Date;
}

export default IUpdateState;
