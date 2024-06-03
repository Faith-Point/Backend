import ICreateFaithPoint from '@modules/faithPoint/faith_point/domain/interfaces/ICreateFaithPoint';
import IFindFaithPoint from '@modules/faithPoint/faith_point/domain/interfaces/IFindFaithPoint';
import IUpdateFaithPoint from '@modules/faithPoint/faith_point/domain/interfaces/IUpdateFaithPoint';

interface IFaithPointRepository {
  create(data: ICreateFaithPoint): Promise<IFindFaithPoint>;
  update(id: string, data: IUpdateFaithPoint): Promise<boolean>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<IFindFaithPoint>;
  findAll(): Promise<IFindFaithPoint[]>;  
  findByName(name: string): Promise<IFindFaithPoint | undefined>;
  findByReligion(religion: string): Promise<IFindFaithPoint[] | undefined>;  
}

export default IFaithPointRepository;