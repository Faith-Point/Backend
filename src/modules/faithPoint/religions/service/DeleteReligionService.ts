import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IReligionRepository from '@modules/faithPoint/religions/domain/repositories/IReligionRepository';

@injectable()
class DeleteReligionService {
  constructor(
    @inject('ReligionRepository')
    private religionRepository: IReligionRepository,
  ) {}

  public async delete(id: string): Promise<void> {
    if(!id) {
      throw new AppError('An ID must be provided for delete operations.');
    }

    const religionExists = await this.religionRepository.findById(id);
    if(!religionExists) {
      throw new AppError('Religion does not exist.');
    }

    try {
      await this.religionRepository.delete(id);
    } catch(error) {
      throw new AppError(`Failed to delete religion:` + error);
    }
  }
}

export default DeleteReligionService;