/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';
import IFindCity from '@modules/shared/city/domain/interfaces/IFindCity';
import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';
import { IState } from '@modules/shared/state/domain/interfaces/IState';

@injectable()
class FindCityService {

    constructor(
        @inject('CityRepository')
        private cityRepository: ICityRepository,

        @inject('StateRepository')
        private stateRepository: IStateRepository,
    ) {}

    private async appendStateDetails(city: IFindCity): Promise<IFindCity> {
        if (city.state && city.state.id) {
            const state = await this.stateRepository.findById(city.state.id) as IState; 
            return { ...city, state };
        }
        return city;
    }

    public async findAll(): Promise<IFindCity[]> {
        const cities = await this.cityRepository.findAll();
        return Promise.all(cities.map(city => this.appendStateDetails(city)));
    }

    public async findById(id: string): Promise<IFindCity | undefined> {
        const city = await this.cityRepository.findById(id);
        return city ? this.appendStateDetails(city) : undefined;
    }

    public async findByState(stateId: string): Promise<IFindCity[]> {
        const cities = await this.cityRepository.findByState(stateId);
        if (!cities) {
            return [];
        }
        return Promise.all(cities.map(city => this.appendStateDetails(city)));
        
    }

    public async findByCode(code: string): Promise<IFindCity[]> {
        const cities = await this.cityRepository.findByCode(code);
        if (!cities) {
            return [];
        }
        return Promise.all(cities.map(city => this.appendStateDetails(city)));
    }

    public async findByShortName(shortName: string): Promise<IFindCity | undefined> {
        const city = await this.cityRepository.findByShortName(shortName);
        return city ? this.appendStateDetails(city) : undefined;
    }

    public async findByLongName(longName: string): Promise<IFindCity | undefined> {
        const city = await this.cityRepository.findByLongName(longName);
        return city ? this.appendStateDetails(city) : undefined;
    }
}

export default FindCityService;
