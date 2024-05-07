import ICreateAddress from '@modules/shared/address/domain/interfaces/ICreateAddress';
import IUpdateAddress from '@modules/shared/address/domain/interfaces/IUpdateAddress';
import IFindAddress from '@modules/shared/address/domain/interfaces/IFindAddress';

  
interface IAddressRepository {
    create(data: ICreateAddress): Promise<IFindAddress>;
    update(id: string, address: IUpdateAddress): Promise<boolean>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IFindAddress[]>;
    findById(id: string): Promise<IFindAddress | undefined>;
    findByCity(city: string): Promise<IFindAddress[] | undefined>;    
  }
  
  export default IAddressRepository;
  