import { injectable } from 'tsyringe';
import AppDataSource from '@config/data-source';
import { Repository } from 'typeorm';
import IFaithPointServiceRepository from '@modules/faithPoint/service/domain/repositories/IFaithPointServiceRepository';
import ICreateFaithPointService from '@modules/faithPoint/service/domain/interfaces/ICreateFaithPointService';
import IFindFaithPointService from '@modules/faithPoint/service/domain/interfaces/IFindFaithPointService';
import IUpdateFaithPointService from '@modules/faithPoint/service/domain/interfaces/IUpdateFaithPointService';

@injectable()
class FaithPointServiceRepository implements IFaithPointServiceRepository {
  private ormRepository: Repository<IFindFaithPointService>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository('FaithPointService');
  }

  public async create(data: ICreateFaithPointService): Promise<IFindFaithPointService> {
    try {
      const faithPointService = this.ormRepository.create(data);
      await this.ormRepository.save(faithPointService);
      return this.mapToIFindFaithPointService(faithPointService);
    } catch (error) {
      console.error("Error creating faith point service: ", error);
      throw error;
    }
  }

  public async update(id: string, faithPointService: IUpdateFaithPointService): Promise<boolean> {
    await this.ormRepository.update(id, faithPointService);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindFaithPointService[]> {
    const faithPointServices = await this.ormRepository.find();
    return faithPointServices;
  }

  public async findById(id: string): Promise<IFindFaithPointService | undefined> {
    const faithPointService = await this.ormRepository.findOne({
        where: {
            id: id
        },
        relations: ['faith_point']
    });
    return faithPointService ? this.mapToIFindFaithPointService(faithPointService) : undefined;
  }

  public async findByName(name: string): Promise<IFindFaithPointService | undefined> {
    const faithPointService = await this.ormRepository.findOne({
        where: {
            name: name
        },
        relations: ['faith_point']
     });
    return faithPointService ? this.mapToIFindFaithPointService(faithPointService) : undefined;
  }

  public async findByFaithPoint(faith_point: string): Promise<IFindFaithPointService[] | undefined> {
    const findFaithPoint = await this.ormRepository.findOne({
        where: {
            faith_point: {
                id: faith_point            
            }
        },
        relations: ['faith_point']
    })
    if(!findFaithPoint) {
        return [];
    }
    const faithPointServices = await this.ormRepository.find({
        where: {
            faith_point: findFaithPoint.faith_point
        },
        relations: ['faith_point']
    });
    return faithPointServices.map(faithPointService => this.mapToIFindFaithPointService(faithPointService));
  }

  private mapToIFindFaithPointService(faithPointService: IFindFaithPointService): IFindFaithPointService {
    return {
        id: faithPointService.id,
        faith_point: faithPointService.faith_point,
        name: faithPointService.name,
        description: faithPointService.description
    }
  }
}

export default FaithPointServiceRepository;