import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IReligionRepository from '@modules/faithPoint/religions/domain/repositories/IReligionRepository';
import IUpdateReligion from '@modules/faithPoint/religions/domain/interfaces/IUpdateReligion';

@injectable()
class UpdateReligionService {
  constructor(
    @inject('ReligionRepository')
    private religionRepository: IReligionRepository,
  ) {}

  public async update(id: string, religion: IUpdateReligion): Promise<boolean> {
    if(!id) {
      throw new AppError('An ID must be provided for update operations.');
    }

    const religionExists = await this.religionRepository.findById(id);
    if(!religionExists) {
      throw new AppError('Religion does not exist.');
    }

    try {
      const dateTimeNow = new Date();
      religion.updated_at = dateTimeNow;
      const updateResult = await this.religionRepository.update(id, religion);
      return updateResult;
    } catch(error) {
      throw new AppError(`Failed to update religion:` + error);
    }
  }
}

export default UpdateReligionService;