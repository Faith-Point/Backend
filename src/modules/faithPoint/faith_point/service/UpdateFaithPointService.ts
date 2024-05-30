import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointRepository from '@modules/faithPoint/faith_point/domain/repositories/IFaithPointRepository';
import IUpdateFaithPoint from '@modules/faithPoint/faith_point/domain/interfaces/IUpdateFaithPoint';

@injectable()
class UpdateFaithPointService {
    constructor(
        @inject('FaithPointRepository')
        private faithPointRepository: IFaithPointRepository,
    ){}

    public async update(id: string, parameters: IUpdateFaithPoint): Promise<boolean> {
        if(!id) {
            throw new AppError('An ID must be provided to update a faith point.');
        }
        const faithPoint = await this.faithPointRepository.findById(id);
        if(!faithPoint) {
            throw new AppError('Faith point not found.');
        }
        const updatedFaithPoint = await this.faithPointRepository.update(id, parameters);
        return updatedFaithPoint;
    }
}

export default UpdateFaithPointService;