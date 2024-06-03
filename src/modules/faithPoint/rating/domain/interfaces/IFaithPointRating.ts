import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';
import { IUser } from '@modules/user/domain/interfaces/IUser';

export interface IFaithPointRating {
    id: string;
    faithPoint: IFaithPoint;
    user: IUser;
    rating: number;
    comment: string;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date;
}