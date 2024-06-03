import { inject, injectable } from 'tsyringe';
import IFaithPointRepository from '@modules/faithPoint/faith_point/domain/repositories/IFaithPointRepository';
import IFindFaithPoint from '@modules/faithPoint/faith_point/domain/interfaces/IFindFaithPoint';

@injectable()
class FindFaithPointService {
    constructor(
        @inject('FaithPointRepository')
        private faithPointRepository: IFaithPointRepository,
    ){}

    public async findByName(name: string): Promise<IFindFaithPoint | undefined> {
      if(!name) {
        throw new Error('A name must be provided to find a faith point.');
      }
        const faithPoint = await this.faithPointRepository.findByName(name);
        return faithPoint;
    }

    public async findByReligion(religion: string): Promise<IFindFaithPoint[] | undefined> {
      if(!religion) {
        throw new Error('A religion must be provided to find faith points.');
      }
        const faithPoints = await this.faithPointRepository.findByReligion(religion);
        return faithPoints;
    }

    public async findById(id: string): Promise<IFindFaithPoint> {
        if(!id) {
            throw new Error('An ID must be provided to find a faith point.');
        }
        const faithPoint = await this.faithPointRepository.findById(id);
        return faithPoint;
    }

    public async findAll(): Promise<IFindFaithPoint[]> {
        const faithPoints = await this.faithPointRepository.findAll();
        return faithPoints;
    }
}

export default FindFaithPointService;