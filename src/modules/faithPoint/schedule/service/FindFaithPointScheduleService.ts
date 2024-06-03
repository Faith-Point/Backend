import { inject, injectable } from 'tsyringe';
import IFaithPointScheduleRepository from '@modules/faithPoint/schedule/domain/repositories/IFaithPointScheduleRepository';
import IFindFaithPointSchedule from '@modules/faithPoint/schedule/domain/interfaces/IFindFaithPointSchedule';

@injectable()
class FindFaithPointScheduleService {
    constructor(
        @inject('FaithPointScheduleRepository')
        private faithPointScheduleRepository: IFaithPointScheduleRepository,
    ){}

    public async findAll(): Promise<IFindFaithPointSchedule[]> {
        return this.faithPointScheduleRepository.findAll();
    }

    public async findById(id: string): Promise<IFindFaithPointSchedule | undefined> {
        if (!id) {
            throw new Error('An ID must be provided to find a faith point schedule.');
        }
        return this.faithPointScheduleRepository.findById(id);
    }

    public async findByDate(date: Date): Promise<IFindFaithPointSchedule[] | undefined> {
        return this.faithPointScheduleRepository.findByDate(date);
    }

    public async findByFaithPointId(id: string): Promise<IFindFaithPointSchedule[] | undefined> {
        return this.faithPointScheduleRepository.findByFaithPointId(id);
    }
}

export default FindFaithPointScheduleService;