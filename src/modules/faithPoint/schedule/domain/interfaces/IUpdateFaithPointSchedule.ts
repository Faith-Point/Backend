import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';

interface IUpdateFaithPointSchedule {
    id?: string;
    faith_point: IFaithPoint;
    date: Date;
    start_time?: Date;
    end_time?: Date;
    updated_at?: Date;
}

export default IUpdateFaithPointSchedule;