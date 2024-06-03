import ICreateFaithPointService from '@modules/faithPoint/service/domain/interfaces/ICreateFaithPointService';
import IFindFaithPointService from '@modules/faithPoint/service/domain/interfaces/IFindFaithPointService';
import IUpdateFaithPointService from '@modules/faithPoint/service/domain/interfaces/IUpdateFaithPointService';

interface IFaithPointServiceRepository {
    create(data: ICreateFaithPointService): Promise<IFindFaithPointService>;
    update(id: string, faithPointService: IUpdateFaithPointService): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IFindFaithPointService[]>;
    findById(id: string): Promise<IFindFaithPointService | undefined>;
    findByName(name: string): Promise<IFindFaithPointService | undefined>;
    findByFaithPoint(faith_point: string): Promise<IFindFaithPointService[] | undefined>;
}

export default IFaithPointServiceRepository;