import { inject, injectable } from 'tsyringe';
import { v4 as uuidv4 } from 'uuid';
import { AppError } from '@shared/exceptions/AppError';
import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';
import ICreateState from '@modules/shared/state/domain/interfaces/ICreateState';
import IFindState from '@modules/shared/state/domain/interfaces/IFindState';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';
import { IFindCountry } from '@modules/shared/country/domain/interfaces/IFindCountry';

@injectable()
class CreateStateService {
    constructor(
        @inject('StateRepository')
        private stateRepository: IStateRepository,
        @inject('CountryRepository')
        private countryRepository: ICountryRepository,
    ) {}

    public async create(parameters: ICreateState): Promise<IFindState> {
        if (!parameters.short_name || !parameters.code) {
            throw new AppError('Missing required parameters: short_name or code');
        }

        const dateTimeNow = new Date();
    
        let countryDetails: IFindCountry | undefined = undefined;
        if (parameters.country) {
            countryDetails = await this.countryRepository.findById(parameters.country.id);
            if (!countryDetails) {
                throw new AppError('Country does not exist');
            }
        }

        const newState = await this.stateRepository.create({
            id: uuidv4(),
            short_name: parameters.short_name,
            long_name: parameters.long_name,
            code: parameters.code,
            country: countryDetails as IFindCountry,
            created_at: dateTimeNow,
        });

        return newState;
    }
}

export default CreateStateService;
