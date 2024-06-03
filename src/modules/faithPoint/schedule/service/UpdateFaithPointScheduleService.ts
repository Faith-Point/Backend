import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointScheduleRepository from '@modules/faithPoint/schedule/domain/repositories/IFaithPointScheduleRepository';
import IUpdateFaithPointSchedule from '@modules/faithPoint/schedule/domain/interfaces/IUpdateFaithPointSchedule';

@injectable()
class UpdateFaithPointScheduleService {
    constructor(
        @inject('FaithPointScheduleRepository')
        private faithPointScheduleRepository: IFaithPointScheduleRepository,
    ){}

    public async update(id: string, parameters: IUpdateFaithPointSchedule): Promise<void> {
        if(!id) {
            throw new AppError('An ID must be provided for update operations.');
        }

        const faithPointScheduleExists = await this.faithPointScheduleRepository.findById(id);
        if(!faithPointScheduleExists) {
            throw new AppError('Faith Point Schedule does not exist.');
        }

        try {
            const dateTimeNow = new Date();
            parameters.updated_at = dateTimeNow;
            await this.faithPointScheduleRepository.update(id, parameters);            
        } catch(error) {
            throw new AppError(`Failed to update faith point schedule:` + error);
        }
    }
}

export default UpdateFaithPointScheduleService;