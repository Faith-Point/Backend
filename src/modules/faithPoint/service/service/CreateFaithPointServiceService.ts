import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointServiceRepository from '@modules/faithPoint/service/domain/repositories/IFaithPointServiceRepository';
import ICreateFaithPointService from '@modules/faithPoint/service/domain/interfaces/ICreateFaithPointService';
import IFindFaithPointService from '@modules/faithPoint/service/domain/interfaces/IFindFaithPointService';

@injectable()
class CreateFaithPointServiceService {
    constructor(
        @inject('FaithPointServiceRepository')
        private faithPointServiceRepository: IFaithPointServiceRepository,
    ){}

    public async create(parameters: ICreateFaithPointService): Promise<IFindFaithPointService> {
        if(!parameters.name || !parameters.faith_point) {
            throw new AppError('Missing required parameters: name or faith_point');
        }
        const dateTimeNow = new Date();
        const newFaithPointService = await this.faithPointServiceRepository.create({
            id: uuidv4(),
            name: parameters.name,
            faith_point: parameters.faith_point,
            description: parameters.description,
            created_at: dateTimeNow,
        });
        return newFaithPointService;
    }
}

export default CreateFaithPointServiceService;