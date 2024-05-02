import shortCountry from '@shared/util/ShortCountry';

export interface IFindCountry {
	short_name: shortCountry;
	long_name: string;
	code: string;
}