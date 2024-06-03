import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';

interface ICreateFaithPointImage {
    id: string;
    faith_point: IFaithPoint;
    url: string;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export default ICreateFaithPointImage;