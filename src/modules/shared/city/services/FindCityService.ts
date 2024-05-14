/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';
import IFindCity from '@modules/shared/city/domain/interfaces/IFindCity';

@injectable()
class FindCityService {

    constructor(
        @inject('CityRepository')
        private cityRepository: ICityRepository,
    ) {}

    public async findAll(): Promise<IFindCity[]> {
        const cities = await this.cityRepository.findAll();
        return cities; 
    }

    public async findById(id: string): Promise<IFindCity | undefined> {
        const city = await this.cityRepository.findById(id);
        return city; 
    }

    public async findByState(stateId: string): Promise<IFindCity[]> {
        const cities = await this.cityRepository.findByState(stateId);
        return cities || [];
    }

    public async findByCode(code: string): Promise<IFindCity[]> {
        const cities = await this.cityRepository.findByCode(code);
        return cities || [];
    }

    public async findByShortName(shortName: string): Promise<IFindCity | undefined> {
        const city = await this.cityRepository.findByShortName(shortName);
        return city;
    }

    public async findByLongName(longName: string): Promise<IFindCity | undefined> {
        const city = await this.cityRepository.findByLongName(longName);
        return city;
    }
}

export default FindCityService;
