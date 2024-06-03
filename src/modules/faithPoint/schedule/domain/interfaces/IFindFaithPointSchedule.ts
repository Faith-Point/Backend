import { IFaithPoint } from '@modules/faithPoint/faith_point/domain/interfaces/IFaithPoint';

interface IFindFaithPointSchedule {
    id: string;
    faith_point: IFaithPoint;
    date?: Date;
    start_time?: Date;
    end_time?: Date;
}

export default IFindFaithPointSchedule;