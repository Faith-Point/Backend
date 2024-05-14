/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';
import IFindState from '@modules/shared/state/domain/interfaces/IFindState';
import shortState from '@shared/util/ShortState';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';

@injectable()
class FindStateService {

    constructor(
        @inject('StateRepository')
        private stateRepository: IStateRepository,

        @inject('CountryRepository')
        private countryRepository: ICountryRepository,
    ) {}

    private async appendCountryDetails(state: IFindState): Promise<IFindState> {
        if (state.country && state.country.id) {
            const country = await this.countryRepository.findById(state.country.id);
            return { ...state, country: country || state.country };
        }
        return state;
    }

    public async findAll(): Promise<IFindState[]> {
        const states = await this.stateRepository.findAll();
        if (!states) {
            return []; 
        }
        const statesWithCountries = await Promise.all(states.map(state => this.appendCountryDetails(state)));
        return statesWithCountries;
    }

    public async findById(id: string): Promise<IFindState | undefined> {
        const state = await this.stateRepository.findById(id);
        if (!state) {
            return undefined;
        }
        return this.appendCountryDetails(state);
    }

    public async findByCountry(countryId: string): Promise<IFindState[]> {
        const states = await this.stateRepository.findByCountry(countryId);
        if (!states) {
            return []; 
        }
        const statesWithCountries = await Promise.all(states.map(state => this.appendCountryDetails(state)));
        return statesWithCountries;
    }

    public async findByCode(code: string): Promise<IFindState[]> {
        const states = await this.stateRepository.findByCode(code);
        if (!states) {
            return []; 
        }
        const statesWithCountries = await Promise.all(states.map(state => this.appendCountryDetails(state)));
        return statesWithCountries;
    }

    public async findByShortName(shortName: shortState): Promise<IFindState | undefined> {
        const state = await this.stateRepository.findByShortName(shortName);
        if (!state) {
            return undefined;
        }
        return this.appendCountryDetails(state);
    }

    public async findByLongName(longName: string): Promise<IFindState | undefined> {
        const state = await this.stateRepository.findByLongName(longName);
        if (!state) {
            return undefined;
        }
        return this.appendCountryDetails(state);
    }
}

export default FindStateService;
