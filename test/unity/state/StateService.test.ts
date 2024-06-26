import 'reflect-metadata';
import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import IFindState from '@modules/shared/state/domain/interfaces/IFindState';
import FindStateService from '@modules/shared/state/services/FindStateService';
import shortState from '@shared/util/ShortState';
import shortCountry from '@shared/util/ShortCountry';

describe('StateService', () => {
  let service: FindStateService;
  let mockStateRepository: jest.Mocked<IStateRepository>;
  let mockCountryRepository: jest.Mocked<ICountryRepository>;

  beforeEach(() => {
    mockStateRepository = {
      create: jest.fn(),
      delete: jest.fn(),
      update: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      findByCode: jest.fn(),
      findByCountry: jest.fn(),
      findByLongName: jest.fn(),
      findByShortName: jest.fn(),
    };
    mockCountryRepository = {
      create: jest.fn(),
      delete: jest.fn(),
      update: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      findCode: jest.fn(),
      findShortName: jest.fn(),
      findLongName: jest.fn(),
    };
    service = new FindStateService(mockStateRepository, mockCountryRepository);
  });

  describe('findAll', () => {
    it('should return an array of states', async () => {
      const states: IFindState[] = [{
        id: 'fake-uuid',
        short_name: shortState.MG,
        long_name: 'Minas Gerais',
        code: '001',
        country: {
          id: 'country-uuid',
          short_name: shortCountry.BR,
          long_name: 'Brazil',
          code: '55',
          created_at: new Date(),
          updated_at: new Date(),
        }
      }];
      mockStateRepository.findAll.mockResolvedValue(states);

      const result = await service.findAll();
      expect(result).toEqual(states);
      expect(mockStateRepository.findAll).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return undefined if no state is found', async () => {
      mockStateRepository.findById.mockResolvedValue(undefined);

      const result = await service.findById('1');
      expect(result).toBeUndefined();
    });

    it('should return a state if it exists', async () => {
      const state: IFindState = {
        id: 'fake-uuid',
        short_name: shortState.MG,
        long_name: 'Minas Gerais',
        code: '001',
        country: {
          id: 'country-uuid',
          short_name: shortCountry.BR,
          long_name: 'Brazil',
          code: '55',
          created_at: new Date(),
          updated_at: new Date(),
        }
      };
      mockStateRepository.findById.mockResolvedValue(state);

      const result = await service.findById('1');
      expect(result).toEqual(state);
      expect(mockStateRepository.findById).toHaveBeenCalledWith('1');
    });
  });

  describe('findByShortName', () => {
    it('should return a state if it exists', async () => {
      const state: IFindState = {
        id: 'fake-uuid',
        short_name: shortState.MG,
        long_name: 'Minas Gerais',
        code: '001',
        country: {
          id: 'country-uuid',
          short_name: shortCountry.BR,
          long_name: 'Brazil',
          code: '55',
          created_at: new Date(),
          updated_at: new Date(),
        }
      };
      mockStateRepository.findByShortName.mockResolvedValue(state);

      const result = await service.findByShortName(shortState.MG);
      expect(result).toEqual(state);
      expect(mockStateRepository.findByShortName).toHaveBeenCalledWith(shortState.MG);
    });
  });

  describe('findByLongName', () => {
    it('should return a state if it exists', async () => {
      const state: IFindState = {
        id: 'fake-uuid',
        short_name: shortState.MG,
        long_name: 'Minas Gerais',
        code: '001',
        country: {
          id: 'country-uuid',
          short_name: shortCountry.BR,
          long_name: 'Brazil',
          code: '55',
          created_at: new Date(),
          updated_at: new Date(),
        }
      };
      mockStateRepository.findByLongName.mockResolvedValue(state);

      const result = await service.findByLongName('Minas Gerais');
      expect(result).toEqual(state);
      expect(mockStateRepository.findByLongName).toHaveBeenCalledWith('Minas Gerais');
    });
  });
});
