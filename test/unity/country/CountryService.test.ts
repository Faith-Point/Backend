import 'reflect-metadata';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import { IFindCountry } from '@modules/shared/country/domain/interfaces/IFindCountry';
import FindCountryService from '@modules/shared/country/services/FindCountryService';
import shortCountry from '@shared/util/ShortCountry';

describe('CountryService', () => {
  let service: FindCountryService;
  let mockCountryRepository: jest.Mocked<ICountryRepository>;

  beforeEach(() => {
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
    service = new FindCountryService(mockCountryRepository);
  });

  describe('findAll', () => {
    it('should return an array of countries', async () => {
      const countries: IFindCountry[] = [
        { id: 'fake-uuid1', short_name: shortCountry.US, long_name: 'United States', code: '001' },
        { id: 'fake-uuid2', short_name: shortCountry.CA, long_name: 'Canada', code: '002' }
      ];
      mockCountryRepository.findAll.mockResolvedValue(countries);

      const result = await service.findAll();
      expect(result).toEqual(countries);
      expect(mockCountryRepository.findAll).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return undefined if no country is found', async () => {
      mockCountryRepository.findById.mockResolvedValue(undefined);

      const result = await service.findById('1');
      expect(result).toBeUndefined();
    });

    it('should return a country if it exists', async () => {
      const country: IFindCountry = { id: 'fake-uuid', short_name: shortCountry.US, long_name: 'United States', code: '001' };
      mockCountryRepository.findById.mockResolvedValue(country);

      const result = await service.findById('1');
      expect(result).toEqual(country);
      expect(mockCountryRepository.findById).toHaveBeenCalledWith('1');
    });
  });

  describe('findByCode', () => {
    it('should return a country if it exists', async () => {
      const country: IFindCountry = { id: 'fake-uuid', short_name: shortCountry.US, long_name: 'United States', code: '001' };
      mockCountryRepository.findCode.mockResolvedValue(country);

      const result = await service.findByCode('001');
      expect(result).toEqual(country);
      expect(mockCountryRepository.findCode).toHaveBeenCalledWith('001');
    });
  });

  describe('findByShortName', () => {
    it('should return a country if it exists', async () => {
      const country: IFindCountry = { id: 'fake-uuid', short_name: shortCountry.US, long_name: 'United States', code: '001' };
      mockCountryRepository.findShortName.mockResolvedValue(country);

      const result = await service.findByShortName(shortCountry.US);
      expect(result).toEqual(country);
      expect(mockCountryRepository.findShortName).toHaveBeenCalledWith(shortCountry.US);
    });
  });

  describe('findByLongName', () => {
    it('should return a country if it exists', async () => {
      const country: IFindCountry = { id: 'fake-uuid', short_name: shortCountry.US, long_name: 'United States', code: '001' };
      mockCountryRepository.findLongName.mockResolvedValue(country);

      const result = await service.findByLongName('United States');
      expect(result).toEqual(country);
      expect(mockCountryRepository.findLongName).toHaveBeenCalledWith('United States');
    });
  });
});
