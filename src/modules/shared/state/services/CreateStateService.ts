/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject, injectable } from 'tsyringe';
import { v4 as uuidv4 } from 'uuid';
import { AppError } from '@shared/exceptions/AppError';
import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';
import ICreateState from '@modules/shared/state/domain/interfaces/ICreateState';
import IFindState from '@modules/shared/state/domain/interfaces/IFindState';

@injectable()
class CreateStateService {
    constructor(
        @inject('StateRepository')
        private stateRepository: IStateRepository,
    ){}

    public async create(parameters: ICreateState): Promise<IFindState> {
        if(!parameters.short_name || !parameters.code) {
            throw new AppError('Missing required parameters: short_name or code');
        }

        const dateTimeNow = new Date();
        const codeExists = await this.stateRepository.findByCode(parameters.code);
        if(codeExists) {
            throw new AppError('Code already exists');
        }

        const shortNameExists = await this.stateRepository.findByShortName(parameters.short_name);
        if(shortNameExists) {
            throw new AppError('Short name already exists');
        }

        const newId = uuidv4();
        await this.stateRepository.create({
            id: newId,
            short_name: parameters.short_name,
            long_name: parameters.long_name,
            code: parameters.code,
            country: parameters.country,
            created_at: dateTimeNow,
            updated_at: dateTimeNow,
        });

        const freshState = await this.stateRepository.findById(newId);
        if(!freshState) {
            throw new AppError('Failed to retrieve the newly created state.');
        }

        return {
            id: freshState.id,
            short_name: freshState.short_name,
            long_name: freshState.long_name,
            code: freshState.code,
            country: freshState.country,
        };
    }
}

export default CreateStateService;