import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointImageRepository from '@modules/faithPoint/image/domain/repositories/IFaithPointImageRepository';
import ICreateFaithPointImage from '@modules/faithPoint/image/domain/interfaces/ICreateFaithPointImage';
import IFindFaithPointImage from '@modules/faithPoint/image/domain/interfaces/IFindFaithPointImage';

@injectable()
class CreateFaithPointImageService {
    constructor(
        @inject('FaithPointImageRepository')
        private faithPointImageRepository: IFaithPointImageRepository,
    ){}

    public async create(parameters: ICreateFaithPointImage): Promise<IFindFaithPointImage> {
        if(!parameters.faith_point || !parameters.url) {
            throw new AppError('Missing required parameters: faith_point or url');
        }
        const dateTimeNow = new Date();
        const newFaithPointImage = await this.faithPointImageRepository.create({
            id: uuidv4(),
            faith_point: parameters.faith_point,
            url: parameters.url,
            created_at: dateTimeNow,
        });
        return newFaithPointImage;
    }
}

export default CreateFaithPointImageService;