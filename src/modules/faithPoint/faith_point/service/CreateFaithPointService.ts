import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointRepository from '@modules/faithPoint/faith_point/domain/repositories/IFaithPointRepository';
import ICreateFaithPoint from '@modules/faithPoint/faith_point/domain/interfaces/ICreateFaithPoint';
import IFindFaithPoint from '@modules/faithPoint/faith_point/domain/interfaces/IFindFaithPoint';

@injectable()
class CreateFaithPointService {
    constructor(
        @inject('FaithPointRepository')
        private faithPointRepository: IFaithPointRepository,
    ){}

    public async create(parameters: ICreateFaithPoint): Promise<IFindFaithPoint> {
        if(!parameters.name || !parameters.address || !parameters.religion || !parameters.contact || !parameters.socialMedia) {
            throw new AppError('Missing required parameters: name, address, religion, contact or socialMedia');
        }
        const dateTimeNow = new Date();
        const newFaithPoint = await this.faithPointRepository.create({
            id: uuidv4(),
            name: parameters.name,
            description: parameters.description,
            address: parameters.address,
            religion: parameters.religion,
            contact: parameters.contact,
            socialMedia: parameters.socialMedia,
            created_at: dateTimeNow,
        });
        return newFaithPoint;
    }
}

export default CreateFaithPointService;