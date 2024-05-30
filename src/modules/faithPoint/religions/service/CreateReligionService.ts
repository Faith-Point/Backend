import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IReligionRepository from '@modules/faithPoint/religions/domain/repositories/IReligionRepository';
import ICreateReligion from '@modules/faithPoint/religions/domain/interfaces/ICreateReligion';
import IFindReligion from '@modules/faithPoint/religions/domain/interfaces/IFindReligion';

@injectable()
class CreateReligionService {
    constructor(
        @inject('ReligionRepository')
        private religionRepository: IReligionRepository,
    ){}

    public async create(parameters: ICreateReligion): Promise<IFindReligion> {
        if(!parameters.name) {
            throw new AppError('Missing required parameters: name');
        }
        const dateTimeNow = new Date();
        const newReligion = await this.religionRepository.create({
            id: uuidv4(),
            name: parameters.name,
            description: parameters.description,
            created_at: dateTimeNow,
        });
        return newReligion;
    }
}

export default CreateReligionService;