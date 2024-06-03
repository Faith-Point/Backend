import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointImageRepository from '@modules/faithPoint/image/domain/repositories/IFaithPointImageRepository';
import IUpdateFaithPointImage from '@modules/faithPoint/image/domain/interfaces/IUpdateFaithPointImage';

@injectable()
class UpdateFaithPointImageService {
    constructor(
        @inject('FaithPointImageRepository')
        private faithPointImageRepository: IFaithPointImageRepository,
    ){}

    public async update(id: string, parameters: IUpdateFaithPointImage): Promise<void> {
        if(!parameters.id) {
            throw new AppError('Missing required parameters: id');
        }
        const faithPointImageExists = await this.faithPointImageRepository.findById(parameters.id);
        if(!faithPointImageExists) {
            throw new AppError('FaithPointImage does not exist.');
        }
        try {
            const dateTimeNow = new Date();
            parameters.updated_at = dateTimeNow;
            await this.faithPointImageRepository.update(id, parameters);
        } catch(error) {
            throw new AppError(`Failed to update faithPointImage:` + error);
        }
    }
}

export default UpdateFaithPointImageService;