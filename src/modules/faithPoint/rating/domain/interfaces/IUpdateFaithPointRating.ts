import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';
import { IUser } from '@modules/user/domain/interfaces/IUser';

interface IUpdateFaithPointRating {
    id?: string;
    faithPoint?: IFaithPoint;
    user?: IUser;
    rating?: number;
    comment?: string;
    updated_at?: Date;
}

export default IUpdateFaithPointRating;