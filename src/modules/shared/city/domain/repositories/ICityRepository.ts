import ICreateCity from '@modules/shared/city/domain/interfaces/ICreateCity';
import IUpdateCIty from '@modules/shared/city/domain/interfaces/IUpdateCity';
import IFindCity from '@modules/shared/city/domain/interfaces/IFindCity';

  
interface ICityRepository {
    create(data: ICreateCity): Promise<IFindCity>;
    update(id: string, city: IUpdateCIty): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IFindCity[]>;
    findById(id: string): Promise<IFindCity | undefined>;
    findByState(state: string): Promise<IFindCity[] | undefined>;
    findByShortName(shortName: string): Promise<IFindCity | undefined>;
    findByLongName(longName: string): Promise<IFindCity | undefined>;
    findByCode(code: string): Promise<IFindCity[] | undefined>;
  }
  
  export default ICityRepository;
  