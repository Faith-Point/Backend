import 'reflect-metadata';
import CreateCountryService from '@modules/shared/country/services/CreateCountryService';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import ICreateCountry from '@modules/shared/country/domain/interfaces/ICreateCountry';
import { IFindCountry } from '@modules/shared/country/domain/interfaces/IFindCountry';
import { AppError } from '@shared/exceptions/AppError';
import shortCountry from '@shared/util/ShortCountry'; 

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 'fake-uuid'),
  };
});

describe('CreateCountryService', () => {
  let service: CreateCountryService;
  let mockCountryRepository: jest.Mocked<ICountryRepository>;

  beforeEach(() => {
    mockCountryRepository = {
      create: jest.fn(),
      findByCode: jest.fn(),
      findByShortName: jest.fn(),
      findById: jest.fn(),
      delete: jest.fn(),
      update: jest.fn(),
      findAll: jest.fn(),
      findByLongName: jest.fn(),
    };
    service = new CreateCountryService(mockCountryRepository);
  });

  describe('create', () => {
    it('should create a new country using the shortCountry enum', async () => {
      const countryData: ICreateCountry = {
        id: 'fake-uuid',
        short_name: shortCountry.US,
        long_name: 'United States',
        code: '001',
        created_at: new Date(),
        updated_at: new Date(),
      };
      const expectedCountry: IFindCountry = {
        short_name: shortCountry.US,
        long_name: 'United States',
        code: '001'
      };

      mockCountryRepository.create.mockResolvedValue(expectedCountry);
      
      const result = await service.create(countryData);
      expect(result).toEqual(expectedCountry);
      expect(mockCountryRepository.create).toHaveBeenCalledWith(expect.objectContaining({
        id: 'fake-uuid',
        short_name: shortCountry.US
      }));
    });

    it('should throw an error if code already exists', async () => {
      const countryData: ICreateCountry = {
        id: 'fake-uuid',
        short_name: shortCountry.US,
        long_name: 'United States',
        code: '001',
        created_at: new Date(),
        updated_at: new Date(),
      };
      mockCountryRepository.findByCode.mockResolvedValue({
        short_name: shortCountry.US, long_name: 'United States', code: '001'
      });

      await expect(service.create(countryData)).rejects.toThrow(AppError);
      expect(mockCountryRepository.findByCode).toHaveBeenCalledWith('001');
    });
  });
});
