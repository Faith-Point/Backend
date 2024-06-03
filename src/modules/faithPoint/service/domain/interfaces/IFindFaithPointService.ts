import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';

interface IFindFaithPointService {
    id: string;
    faith_point: IFaithPoint;
    name: string;
    description?: string;
}

export default IFindFaithPointService;