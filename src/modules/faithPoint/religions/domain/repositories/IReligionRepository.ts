import ICreateReligion from '@modules/faithPoint/religions/domain/interfaces/ICreateReligion';
import IUpdateReligion from '@modules/faithPoint/religions/domain/interfaces/IUpdateReligion';
import IFindReligion from '@modules/faithPoint/religions/domain/interfaces/IFindReligion';

interface IReligionRepository {
  create(data: ICreateReligion): Promise<IFindReligion>;
  update(id: string, religion: IUpdateReligion): Promise<boolean>;
  delete(id: string): Promise<void>;
  findAll(): Promise<IFindReligion[]>;
  findById(id: string): Promise<IFindReligion | undefined>;
  findByName(name: string): Promise<IFindReligion[] | undefined>;
}

export default IReligionRepository;