import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';

export interface IFaithPointImage {
    id: string;
    faith_point: IFaithPoint;
    url: string;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date;
}