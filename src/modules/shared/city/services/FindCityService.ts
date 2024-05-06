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

    public async findAll(): Promise<IFindCity[] | undefined> {
        return this.cityRepository.findAll();
    }

    public async findById(id: string): Promise<IFindCity | undefined> {
        if(!id) {
            throw new Error('An ID must be provided to find a city.');
        }
        return this.cityRepository.findById(id);
    }

    public async findByState(code: string): Promise<IFindCity[] | undefined> {
        if(!code) {
            throw new Error('A code must be provided to find a city.');
        }
        return this.cityRepository.findByState(code);
    }

    public async findByCode(code: string): Promise<IFindCity[] | undefined> {
        if(!code) {
            throw new Error('A code must be provided to find a city.');
        }
        return this.cityRepository.findByCode(code);
    }

    public async findByShortName(shortName: string): Promise<IFindCity | undefined> {
        if(!shortName) {
            throw new Error('A short name must be provided to find a city.');
        }
        return this.cityRepository.findByShortName(shortName);
    }

    public async findByLongName(longName: string): Promise<IFindCity | undefined> {
        if(!longName) {
            throw new Error('A long name must be provided to find a city.');
        }
        return this.cityRepository.findByLongName(longName);
    }
}

export default FindCityService;