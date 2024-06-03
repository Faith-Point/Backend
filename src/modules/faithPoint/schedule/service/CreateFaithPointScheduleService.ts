import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointScheduleRepository from '@modules/faithPoint/schedule/domain/repositories/IFaithPointScheduleRepository';
import ICreateFaithPointSchedule from '@modules/faithPoint/schedule/domain/interfaces/ICreateFaithPointSchedule';
import IFindFaithPointSchedule from '@modules/faithPoint/schedule/domain/interfaces/IFindFaithPointSchedule';

@injectable()
class CreateFaithPointScheduleService {
    constructor(
        @inject('FaithPointScheduleRepository')
        private faithPointScheduleRepository: IFaithPointScheduleRepository,
    ){}

    public async create(parameters: ICreateFaithPointSchedule): Promise<IFindFaithPointSchedule> {
        if(!parameters.faith_point || !parameters.date) {
            throw new AppError('Missing required parameters: faith_point_id or date');
        }
        const dateTimeNow = new Date();
        const newFaithPointSchedule = await this.faithPointScheduleRepository.create({
            id: uuidv4(),
            faith_point: parameters.faith_point,
            date: parameters.date,
            start_time: parameters.start_time,
            end_time: parameters.end_time,
            created_at: dateTimeNow,
        });
        return newFaithPointSchedule;
    }
}

export default CreateFaithPointScheduleService;