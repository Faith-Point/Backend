import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';
import { IUser } from '@modules/user/domain/interfaces/IUser';

interface IFindFaithPointRating {
    id: string;
    faithPoint: IFaithPoint;
    user: IUser;
    rating: number;
    comment?: string;
}

export default IFindFaithPointRating;