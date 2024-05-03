import shortCountry from '@shared/util/ShortCountry';

export interface IFindCountry {
	id: string;
	short_name: shortCountry;
	long_name: string;
	code: string;
}