import { ICountry } from '@modules/shared/country/domain/interfaces/ICountry';
import shortState from '@shared/util/ShortState';

interface IFindState {
	id: string;
	short_name: shortState;
	long_name: string;
	code: string;
	country: ICountry;
}

export default IFindState;