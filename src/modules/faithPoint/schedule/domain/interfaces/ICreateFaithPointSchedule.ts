import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';

interface ICreateFaithPointSchedule {
    id: string;
    faith_point: IFaithPoint;
    date: Date;
    start_time?: Date;
    end_time?: Date;
    created_at: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export default ICreateFaithPointSchedule;