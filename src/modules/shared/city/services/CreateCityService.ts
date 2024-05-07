import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';
import ICreateCity from '@modules/shared/city/domain/interfaces/ICreateCity';
import IFindCity from '@modules/shared/city/domain/interfaces/IFindCity';
import IFindState from '@modules/shared/state/domain/interfaces/IFindState';
import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';
import { IState } from '@modules/shared/state/domain/interfaces/IState';

@injectable()
class CreateCityService {
    constructor(
        @inject('CityRepository')
        private cityRepository: ICityRepository,

        @inject('StateRepository')
        private stateRepository: IStateRepository,
    ){}

    public async create(parameters: ICreateCity): Promise<IFindCity> {
        if(!parameters.short_name || !parameters.code) {
            throw new AppError('Missing required parameters: short_name or code');
        }

        const dateTimeNow = new Date();
        
        let stateDetails: IFindState | undefined = undefined;
        if(parameters.state) {
            stateDetails = await this.stateRepository.findById(parameters.state.id);
            if(!stateDetails) {
                throw new AppError('Country does not exist');
            }
        }

        const newCity = await this.cityRepository.create({
            id: uuidv4(),
            short_name: parameters.short_name,
            long_name: parameters.long_name,
            code: parameters.code,
            state: stateDetails as IState,
            created_at: dateTimeNow,
        });

        return newCity;
    }
}

export default CreateCityService;