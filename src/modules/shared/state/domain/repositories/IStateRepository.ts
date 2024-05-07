import shortState from '@shared/util/ShortState';
import ICreateState from '@modules/shared/state/domain/interfaces/ICreateState';
import IFindState from '@modules/shared/state/domain/interfaces/IFindState';
import IUpdateState from '@modules/shared/state/domain/interfaces/IUpdateState';
  
interface IStateRepository {
    create(data: ICreateState): Promise<IFindState>;
    update(id: string, state: IUpdateState): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IFindState[]>;
    findById(id: string): Promise<IFindState | undefined>;
    findByCountry(country: string): Promise<IFindState[] | undefined>;
    findByShortName(shortName: shortState): Promise<IFindState | undefined>;
    findByLongName(longName: string): Promise<IFindState | undefined>;
    findByCode(code: string): Promise<IFindState[] | undefined>;
  }
  
  export default IStateRepository;
  