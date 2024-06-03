import { inject, injectable } from 'tsyringe';
import IFaithPointServiceRepository from '@modules/faithPoint/service/domain/repositories/IFaithPointServiceRepository';
import IFindFaithPointService from '@modules/faithPoint/service/domain/interfaces/IFindFaithPointService';

@injectable()
class FindFaithPointServiceService {
    constructor(
        @inject('FaithPointServiceRepository')
        private faithPointServiceRepository: IFaithPointServiceRepository,
    ){}

    public async findAll(): Promise<IFindFaithPointService[]> {
        return await this.faithPointServiceRepository.findAll();
    }

    public async findById(id: string): Promise<IFindFaithPointService | undefined> {
        return await this.faithPointServiceRepository.findById(id);
    }

    public async findByName(name: string): Promise<IFindFaithPointService | undefined> {
        return await this.faithPointServiceRepository.findByName(name);
    }

    public async findByFaithPoint(faith_point: string): Promise<IFindFaithPointService[] | undefined> {
        return await this.faithPointServiceRepository.findByFaithPoint(faith_point);
    }
}

export default FindFaithPointServiceService;