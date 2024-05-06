import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';
import ICreateCity from '@modules/shared/city/domain/interfaces/ICreateCity';
import IFindCity from '@modules/shared/city/domain/interfaces/IFindCity';

@injectable()
class CreateCityService {
    constructor(
        @inject('CityRepository')
        private cityRepository: ICityRepository,
    ){}

    public async create(parameters: ICreateCity): Promise<IFindCity> {
        if(!parameters.short_name || !parameters.code) {
            throw new AppError('Missing required parameters: short_name or code');
        }

        const dateTimeNow = new Date();
        const codeExists = await this.cityRepository.findByCode(parameters.code);
        if(codeExists) {
            throw new AppError('Code already exists');
        }

        const shortNameExists = await this.cityRepository.findByShortName(parameters.short_name);
        if(shortNameExists) {
            throw new AppError('Short name already exists');
        }

        const newId = uuidv4();
        await this.cityRepository.create({
            id: newId,
            short_name: parameters.short_name,
            long_name: parameters.long_name,
            code: parameters.code,
            state: parameters.state,
            created_at: dateTimeNow,
            updated_at: dateTimeNow,
        });

        const freshCity = await this.cityRepository.findById(newId);
        if(!freshCity) {
            throw new AppError('Failed to retrieve the newly created city.');
        }

        return {
            id: freshCity.id,
            short_name: freshCity.short_name,
            long_name: freshCity.long_name,
            code: freshCity.code,
            state: freshCity.state,
        };
    }
}

export default CreateCityService;