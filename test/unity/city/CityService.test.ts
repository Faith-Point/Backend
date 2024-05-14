import 'reflect-metadata';
import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';
import IFindCity from '@modules/shared/city/domain/interfaces/IFindCity';
import FindCityService from '@modules/shared/city/services/FindCityService';
import shortState from '@shared/util/ShortState';
import shortCountry from '@shared/util/ShortCountry';

describe('CityService', () => {
  let service: FindCityService;
  let mockCityRepository: jest.Mocked<ICityRepository>;

  beforeEach(() => {
    mockCityRepository = {
      create: jest.fn(),
      delete: jest.fn(),
      update: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      findByState: jest.fn(),
      findByCode: jest.fn(),
      findByShortName: jest.fn() as jest.Mock<Promise<IFindCity | undefined>>,
      findByLongName: jest.fn() as jest.Mock<Promise<IFindCity | undefined>>,
    };
    service = new FindCityService(mockCityRepository);
  });

  describe('findAll', () => {
    it('should return an array of cities', async () => {
      const cities: IFindCity[] = [{
        id: 'fake-uuid',
        short_name: 'SP',
        long_name: 'São Paulo',
        code: '001',
        state: {
          id: 'state-uuid',
          short_name: shortState.SP,
          long_name: 'São Paulo',
          code: '55',
          created_at: new Date(),
          updated_at: new Date(),
          country: {
            id: 'country-uuid',
            short_name: shortCountry.BR,
            long_name: 'Brazil',
            code: '55',
            created_at: new Date(),
            updated_at: new Date(),
          }
        }
      }];
      mockCityRepository.findAll.mockResolvedValue(cities);

      const result = await service.findAll();
      expect(result).toEqual(cities);
      expect(mockCityRepository.findAll).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return undefined if no city is found', async () => {
      mockCityRepository.findById.mockResolvedValue(undefined);

      const result = await service.findById('1');
      expect(result).toBeUndefined();
    });

    it('should return a city if it exists', async () => {
      const city: IFindCity = {
        id: 'fake-uuid',
        short_name: 'SP',
        long_name: 'São Paulo',
        code: '001',
        state: {
          id: 'state-uuid',
          short_name: shortState.SP,
          long_name: 'São Paulo',
          code: '55',
          created_at: new Date(),
          updated_at: new Date(),
          country: {
            id: 'country-uuid',
            short_name: shortCountry.BR,
            long_name: 'Brazil',
            code: '55',
            created_at: new Date(),
            updated_at: new Date(),
          }
        }
      };
      mockCityRepository.findById.mockResolvedValue(city);

      const result = await service.findById('1');
      expect(result).toEqual(city);
      expect(mockCityRepository.findById).toHaveBeenCalledWith('1');
    });
  });

  describe('findByShortName', () => {
    it('should return a city if it exists', async () => {
      const city: IFindCity = {
        id: 'fake-uuid',
        short_name: 'SP',
        long_name: 'São Paulo',
        code: '001',
        state: {
          id: 'state-uuid',
          short_name: shortState.SP,
          long_name: 'São Paulo',
          code: '55',
          created_at: new Date(),
          updated_at: new Date(),
          country: {
            id: 'country-uuid',
            short_name: shortCountry.BR,
            long_name: 'Brazil',
            code: '55',
            created_at: new Date(),
            updated_at: new Date(),
          }
        }
      };
      mockCityRepository.findByShortName.mockResolvedValue(city);

      const result = await service.findByShortName('SP');
      expect(result).toEqual(city);
      expect(mockCityRepository.findByShortName).toHaveBeenCalledWith('SP');
    });
  });

  describe('findByLongName', () => {
    it('should return a city if it exists', async () => {
      const city: IFindCity = {
        id: 'fake-uuid',
        short_name: 'SP',
        long_name: 'São Paulo',
        code: '001',
        state: {
          id: 'state-uuid',
          short_name: shortState.SP,
          long_name: 'São Paulo',
          code: '55',
          created_at: new Date(),
          updated_at: new Date(),
          country: {
            id: 'country-uuid',
            short_name: shortCountry.BR,
            long_name: 'Brazil',
            code: '55',
            created_at: new Date(),
            updated_at: new Date(),
          }
        }
      };
      mockCityRepository.findByLongName.mockResolvedValue(city);

      const result = await service.findByLongName('São Paulo');
      expect(result).toEqual(city);
      expect(mockCityRepository.findByLongName).toHaveBeenCalledWith('São Paulo');
    });
  });
});
