import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointServiceRepository from '@modules/faithPoint/service/domain/repositories/IFaithPointServiceRepository';
import IUpdateFaithPointService from '@modules/faithPoint/service/domain/interfaces/IUpdateFaithPointService';

@injectable()
class UpdateFaithPointServiceService {
    constructor(
        @inject('FaithPointServiceRepository')
        private faithPointServiceRepository: IFaithPointServiceRepository,
    ){}

    public async update(id: string, parameters: IUpdateFaithPointService): Promise<void> {
        if(!parameters.id) {
            throw new AppError('Missing required parameters: id');
        }
        
        const faithPointServiceExists = await this.faithPointServiceRepository.findById(id);
        if(!faithPointServiceExists) {
            throw new AppError('FaithPointService does not exist.');
        }

        try {
            await this.faithPointServiceRepository.update(id, parameters);
        } catch(error) {
            throw new AppError(`Failed to update faithPointService:` + error);
        }
    }
}

export default UpdateFaithPointServiceService;