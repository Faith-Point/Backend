import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IFaithPointRepository from '@modules/faithPoint/faith_point/domain/repositories/IFaithPointRepository';

@injectable()
class DeleteFaithPointService {
  constructor(
    @inject('FaithPointRepository')
    private faithPointRepository: IFaithPointRepository,
  ) {}

  public async delete(id: string): Promise<void> {
    if(!id) {
      throw new AppError('An ID must be provided for delete operations.');
    }

    const faithPointExists = await this.faithPointRepository.findById(id);
    if(!faithPointExists) {
      throw new AppError('Faith point does not exist.');
    }

    try {
      await this.faithPointRepository.delete(id);
    } catch(error) {
      throw new AppError(`Failed to delete faith point:` + error);
    }
  }
}

export default DeleteFaithPointService;