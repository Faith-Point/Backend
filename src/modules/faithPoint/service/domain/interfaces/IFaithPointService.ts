import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';

export interface IFaithPointService {
    id: string;
    faith_point: IFaithPoint;
    name: string;
    description?: string;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date;
}