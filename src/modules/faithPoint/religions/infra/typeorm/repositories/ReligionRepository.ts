import { injectable } from 'tsyringe';
import AppDataSource from '@config/data-source';
import { Repository } from 'typeorm';
import Religion from '@modules/faithPoint/religions/infra/typeorm/entities/Religion';
import IReligionRepository from '@modules/faithPoint/religions/domain/repositories/IReligionRepository';
import ICreateReligion from '@modules/faithPoint/religions/domain/interfaces/ICreateReligion';
import IUpdateReligion from '@modules/faithPoint/religions/domain/interfaces/IUpdateReligion';
import IFindReligion from '@modules/faithPoint/religions/domain/interfaces/IFindReligion';

@injectable()
class ReligionRepository implements IReligionRepository {
  private ormRepository: Repository<Religion>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Religion);
  }

  public async create(parameters: ICreateReligion): Promise<IFindReligion> {
    try {
      const religion = this.ormRepository.create(parameters);
      await this.ormRepository.save(religion);
      return this.mapToIFindReligion(religion);
    } catch (error) {
      console.error("Error creating religion: ", error);
      throw error;
    }
  }
  public async update(id: string, religion: IUpdateReligion): Promise<boolean> {
    await this.ormRepository.update(id, religion);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindReligion[]> {
    const religions = await this.ormRepository.find();
    return religions.map(religion => this.mapToIFindReligion(religion));
  }

  public async findById(id: string): Promise<IFindReligion | undefined> {
    const religion = await this.ormRepository.findOne({
      where: { id }
    });
    return religion ? this.mapToIFindReligion(religion) : undefined;
  }

  public async findByName(name: string): Promise<IFindReligion[] | undefined> {
    const religions = await this.ormRepository.findBy({ name });
    return religions.map(religion => this.mapToIFindReligion(religion));
  }

  private mapToIFindReligion(religion: Religion): IFindReligion {
    return {
      id: religion.id,
      name: religion.name,
      description: religion.description,
    };
  }
}

export default ReligionRepository;