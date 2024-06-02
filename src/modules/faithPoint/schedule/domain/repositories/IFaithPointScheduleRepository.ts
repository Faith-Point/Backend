import ICreateFaithPointSchedule from '@modules/faithPoint/schedule/domain/interfaces/ICreateFaithPointSchedule';
import IFindFaithPointSchedule from '@modules/faithPoint/schedule/domain/interfaces/IFindFaithPointSchedule';
import IUpdateFaithPointSchedule from '@modules/faithPoint/schedule/domain/interfaces/IUpdateFaithPointSchedule';

interface IFaithPointScheduleRepository {
    create(data: ICreateFaithPointSchedule): Promise<IFindFaithPointSchedule>;
    update(id: string, data: IUpdateFaithPointSchedule): Promise<boolean>;
    delete(id: string): Promise<void>;    
    findAll(): Promise<IFindFaithPointSchedule[]>;
    findById(id: string): Promise<IFindFaithPointSchedule | undefined>;
    findByDate(date: Date): Promise<IFindFaithPointSchedule[]> | undefined;
    findByFaithPointId(id: string): Promise<IFindFaithPointSchedule[]> | undefined;
}

export default IFaithPointScheduleRepository;