import { ICity } from '@modules/shared/city/domain/interfaces/ICity';

export interface IAddress {
	id: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood?: string;
	city: ICity;
	created_at: Date;
	updated_at?: Date;
	deleted_at?: Date;
}