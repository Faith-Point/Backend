import 'reflect-metadata';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import IFindAddress from '@modules/shared/address/domain/interfaces/IFindAddress';
import FindAddressService from '@modules/shared/address/services/FindAddressService';
import shortState from '@shared/util/ShortState';
import shortCountry from '@shared/util/ShortCountry';

describe('AddressService', () => {
  let service: FindAddressService;
  let mockAddressRepository: jest.Mocked<IAddressRepository>;

  beforeEach(() => {
    mockAddressRepository = {
      create: jest.fn(),
      delete: jest.fn(),
      update: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      findByCity: jest.fn(),
    };
    service = new FindAddressService(mockAddressRepository);
  });

  describe('findAll', () => {
    it('should return an array of addresses', async () => {
      const addresses: IFindAddress[] = [{
        id: 'fake-uuid',
        street: 'Main St',
        number: '1000',
        complement: 'Apt 101',
        neighborhood: 'Downtown',
        city: {
          id: 'city-uuid',
          short_name: 'SP',
          long_name: 'São Paulo',
          code: '001',
          state: {
            id: 'state-uuid',
            short_name: shortState.SP,
            long_name: 'São Paulo',
            code: '55',
            created_at: new Date(),
            country: {
              id: 'country-uuid',
              short_name: shortCountry.BR,
              long_name: 'Brazil',
              code: '55',
              created_at: new Date(),
              updated_at: new Date(),
            }
          }
        }
      }];
      mockAddressRepository.findAll.mockResolvedValue(addresses);

      const result = await service.findAll();
      expect(result).toEqual(addresses);
      expect(mockAddressRepository.findAll).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return undefined if no address is found', async () => {
      mockAddressRepository.findById.mockResolvedValue(undefined);

      const result = await service.findById('1');
      expect(result).toBeUndefined();
    });

    it('should return an address if it exists', async () => {
      const address: IFindAddress = {
        id: 'fake-uuid',
        street: 'Main St',
        number: '1000',
        complement: 'Apt 101',
        neighborhood: 'Downtown',
        city: {
          id: 'city-uuid',
          short_name: 'SP',
          long_name: 'São Paulo',
          code: '001',
          state: {
            id: 'state-uuid',
            short_name: shortState.SP,
            long_name: 'São Paulo',
            code: '55',
            created_at: new Date(),
            country: {
              id: 'country-uuid',
              short_name: shortCountry.BR,
              long_name: 'Brazil',
              code: '55',
              created_at: new Date(),
              updated_at: new Date(),
            }
          }
        }
      };
      mockAddressRepository.findById.mockResolvedValue(address);

      const result = await service.findById('1');
      expect(result).toEqual(address);
      expect(mockAddressRepository.findById).toHaveBeenCalledWith('1');
    });
  });

  describe('findByCity', () => {
    it('should return an array of addresses if they exist', async () => {
      const addresses: IFindAddress[] = [{
        id: 'fake-uuid',
        street: 'Main St',
        number: '1000',
        complement: 'Apt 101',
        neighborhood: 'Downtown',
        city: {
          id: 'city-uuid',
          short_name: 'SP',
          long_name: 'São Paulo',
          code: '001',
          state: {
            id: 'state-uuid',
            short_name: shortState.SP,
            long_name: 'São Paulo',
            code: '55',
            created_at: new Date(),
            country: {
              id: 'country-uuid',
              short_name: shortCountry.BR,
              long_name: 'Brazil',
              code: '55',
              created_at: new Date(),
              updated_at: new Date(),
            }
          }
        }
      }];
      mockAddressRepository.findByCity.mockResolvedValue(addresses);

      const result = await service.findByCity('001');
      expect(result).toEqual(addresses);
      expect(mockAddressRepository.findByCity).toHaveBeenCalledWith('001');
    });
  });
});
