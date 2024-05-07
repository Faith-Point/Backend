import { ICity } from '@modules/shared/city/domain/interfaces/ICity';

interface IFindAddress {
	id: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood?: string;
	city: ICity;
}

export default IFindAddress;