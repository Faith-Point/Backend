import ICreateFaithPointImage from '@modules/faithPoint/image/domain/interfaces/ICreateFaithPointImage';
import IFindFaithPointImage from '@modules/faithPoint/image/domain/interfaces/IFindFaithPointImage';
import IUpdateFaithPointImage from '@modules/faithPoint/image/domain/interfaces/IUpdateFaithPointImage';

interface IFaithPointImageRepository {
    create(data: ICreateFaithPointImage): Promise<IFindFaithPointImage>;
    update(id: string, data: IUpdateFaithPointImage): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IFindFaithPointImage[]>;
    findById(id: string): Promise<IFindFaithPointImage>;
    findByFaithPointId(faith_point_id: string): Promise<IFindFaithPointImage[]>;    
}

export default IFaithPointImageRepository;
