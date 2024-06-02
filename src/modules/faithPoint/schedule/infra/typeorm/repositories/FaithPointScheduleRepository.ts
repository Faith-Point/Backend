import { injectable } from 'tsyringe';
import AppDataSource from '@config/data-source';
import { Repository } from 'typeorm';
import IFaithPointScheduleRepository from '@modules/faithPoint/schedule/domain/repositories/IFaithPointScheduleRepository';
import FaithPointSchedule from '@modules/faithPoint/schedule/infra/typeorm/entities/FaithPointSchedule';
import ICreateFaithPointSchedule from '@modules/faithPoint/schedule/domain/interfaces/ICreateFaithPointSchedule';
import IFindFaithPointSchedule from '@modules/faithPoint/schedule/domain/interfaces/IFindFaithPointSchedule';
import IUpdateFaithPointSchedule from '@modules/faithPoint/schedule/domain/interfaces/IUpdateFaithPointSchedule';

@injectable()
class FaithPointScheduleRepository implements IFaithPointScheduleRepository {
  private ormRepository: Repository<FaithPointSchedule>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(FaithPointSchedule);
  }

  public async create(parameters: ICreateFaithPointSchedule): Promise<IFindFaithPointSchedule> {
    try {
      const faithPointSchedule = this.ormRepository.create(parameters);
      await this.ormRepository.save(faithPointSchedule);
      return this.mapToIFindFaithPointSchedule(faithPointSchedule);
    } catch (error) {
      console.error("Error creating faith point schedule: ", error);
      throw error;
    }
  }

  public async update(id: string, faithPointSchedule: IUpdateFaithPointSchedule): Promise<boolean> {
    await this.ormRepository.update(id, faithPointSchedule);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindFaithPointSchedule[]> {
    const faithPointSchedules = await this.ormRepository.find({
      relations: ['faith_point']
    });
    return faithPointSchedules.map(faithPointSchedule => this.mapToIFindFaithPointSchedule(faithPointSchedule));
  }

  public async findById(id: string): Promise<IFindFaithPointSchedule | undefined> {
    const faithPointSchedule = await this.ormRepository.findOne({
      where: { id },
      relations: ['faith_point']
    });
    return faithPointSchedule ? this.mapToIFindFaithPointSchedule(faithPointSchedule) : undefined;
  }

    public async findByDate(date: Date): Promise<IFindFaithPointSchedule[]> {
        const faithPointSchedules = await this.ormRepository.find({
        where: { date },
        relations: ['faith_point']
        });
        return faithPointSchedules.map(faithPointSchedule => this.mapToIFindFaithPointSchedule(faithPointSchedule));
    }

    public async findByFaithPointId(id: string): Promise<IFindFaithPointSchedule[]> {
        const faithPointSchedules = await this.ormRepository.find({
        where: { faith_point: {
            id: id
        }},
        relations: ['faith_point']
        });
        return faithPointSchedules.map(faithPointSchedule => this.mapToIFindFaithPointSchedule(faithPointSchedule));
    }

  private mapToIFindFaithPointSchedule(faithPointSchedule: FaithPointSchedule): IFindFaithPointSchedule {
    return {
      id: faithPointSchedule.id,
      faith_point: faithPointSchedule.faith_point,
      date: faithPointSchedule.date,
      start_time: faithPointSchedule.start_time,
      end_time: faithPointSchedule.end_time
    };
  }
}

export default FaithPointScheduleRepository;