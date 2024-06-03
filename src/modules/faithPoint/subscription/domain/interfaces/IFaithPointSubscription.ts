import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';
import { IUser } from '@modules/user/domain/interfaces/IUser';

export interface IFaithPointSubscription {
    id: string;
    faith_point: IFaithPoint;
    user: IUser;
    is_active: boolean;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date;
}