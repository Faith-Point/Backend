import ICreateCountry from '../interfaces/ICreateCountry';
import IUpdateCountry from '../interfaces/IUpdateCountry';
import { IFindCountry } from '../interfaces/IFindCountry';
import shortCountry from '@shared/util/ShortCountry';

  
interface ICountryRepository {
    create(data: ICreateCountry): Promise<IFindCountry>;
    update(id: string, country: IUpdateCountry): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IFindCountry[]>;
    findById(id: string): Promise<IFindCountry | undefined>;
    findCode(code: string): Promise<IFindCountry | undefined>;
    findShortName(shortName: shortCountry): Promise<IFindCountry | undefined>;
    findLongName(longName: string): Promise<IFindCountry | undefined>;
  }
  
  export default ICountryRepository;
  