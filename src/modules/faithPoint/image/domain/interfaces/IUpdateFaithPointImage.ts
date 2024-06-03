import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';

interface IUpdateFaithPointImage {
    id?: string;
    faith_point?: IFaithPoint;
    url?: string;
    updated_at?: Date;
}

export default IUpdateFaithPointImage;