/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';
import IFindState from '@modules/shared/state/domain/interfaces/IFindState';
import shortState from '@shared/util/ShortState';

@injectable()
class FindStateService {

    constructor(
        @inject('StateRepository')
        private stateRepository: IStateRepository,
    ) {}

    public async findAll(): Promise<IFindState[] | undefined> {
        const state = await this.stateRepository.findAll();
        return state;
    }

    public async findById(id: string): Promise<IFindState | undefined> {
        if (!id) {
            throw new Error('An ID must be provided to find a state.');
        }
        return this.stateRepository.findById(id);
    }

    public async findByCountry(country: string): Promise<IFindState[] | undefined> {
        if (!country) {
            throw new Error('A code must be provided to find a state.');
        }
        return this.stateRepository.findByCountry(country);
    }

    public async findByCode(code: string): Promise<IFindState[] | undefined> {
        if(!code) {
            throw new Error('A code must be provided to find a state.');
        }
        return this.stateRepository.findByCode(code);
    }

    public async findByShortName(shortName: shortState): Promise<IFindState | undefined> {
        if (!shortName) {
            throw new Error('A short name must be provided to find a state.');
        }
        return this.stateRepository.findByShortName(shortName);
    }

    public async findByLongName(longName: string): Promise<IFindState | undefined> {
        if(!longName) {
            throw new Error('A long name must be provided to find a state.');
        }
        return this.stateRepository.findByLongName(longName);
    }
}

export default FindStateService;