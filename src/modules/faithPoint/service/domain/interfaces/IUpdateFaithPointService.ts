import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';

interface IUpdateFaithPointService {
    id?: string;
    faith_point?: IFaithPoint;
    name?: string;
    description?: string;
    updated_at?: Date;
}

export default IUpdateFaithPointService;