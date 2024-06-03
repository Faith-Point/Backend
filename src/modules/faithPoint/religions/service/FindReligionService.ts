import { inject, injectable } from 'tsyringe';
import IReligionRepository from '@modules/faithPoint/religions/domain/repositories/IReligionRepository';
import IFindReligion from '@modules/faithPoint/religions/domain/interfaces/IFindReligion';

@injectable()
class FindReligionService {
  constructor(
    @inject('ReligionRepository')
    private religionRepository: IReligionRepository,
  ) {}

  public async findAll(): Promise<IFindReligion[]> {
    return await this.religionRepository.findAll();
  }

  public async findById(id: string): Promise<IFindReligion | undefined> {
    if (!id) {
      throw new Error('An ID must be provided to find a religion.');
    }
    return await this.religionRepository.findById(id);
  }

  public async findByName(name: string): Promise<IFindReligion[] | undefined> {
    return await this.religionRepository.findByName(name);
  }
}

export default FindReligionService;