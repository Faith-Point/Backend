import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';
import { IUser } from '@modules/user/domain/interfaces/IUser';

interface IFindFaithPointSubscription {
    id: string;
    faith_point: IFaithPoint;
    user: IUser;
    is_active: boolean;
}

export default IFindFaithPointSubscription;