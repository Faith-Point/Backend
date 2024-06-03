import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';

interface IFindFaithPointImage {
    id: string;
    faith_point: IFaithPoint;
    url: string;
}

export default IFindFaithPointImage;