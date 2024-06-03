import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointScheduleRepository from '@modules/faithPoint/schedule/domain/repositories/IFaithPointScheduleRepository';

@injectable()
class DeleteFaithPointScheduleService {
    constructor(
        @inject('FaithPointScheduleRepository')
        private faithPointScheduleRepository: IFaithPointScheduleRepository,
    ) {}

    public async delete(id: string): Promise<void> {
        if(!id) {
            throw new AppError('An ID must be provided for delete operations.');
        }

        const faithPointScheduleExists = await this.faithPointScheduleRepository.findById(id);
        if(!faithPointScheduleExists) {
            throw new AppError('Faith Point Schedule does not exist.');
        }

        try {
            await this.faithPointScheduleRepository.delete(id);
        } catch(error) {
            throw new AppError(`Failed to delete faith point schedule:` + error);
        }
    }
}

export default DeleteFaithPointScheduleService;