import { injectable } from 'tsyringe';
import AppDataSource from '@config/data-source';
import { Repository } from 'typeorm';
import IFaithPointImageRepository from '@modules/faithPoint/image/domain/repositories/IFaithPointImageRepository';
import FaithPointImage from '@modules/faithPoint/image/infra/typeorm/entities/FaithPointImage';
import ICreateFaithPointImage from '@modules/faithPoint/image/domain/interfaces/ICreateFaithPointImage';
import IFindFaithPointImage from '@modules/faithPoint/image/domain/interfaces/IFindFaithPointImage';
import IUpdateFaithPointImage from '@modules/faithPoint/image/domain/interfaces/IUpdateFaithPointImage';

@injectable()
class FaithPointImageRepository implements IFaithPointImageRepository {
  private ormRepository: Repository<FaithPointImage>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(FaithPointImage);
  }

  public async create(data: ICreateFaithPointImage): Promise<IFindFaithPointImage> {
    if(!data.faith_point.id) {
        throw new Error("Faith Point ID is required");
    }
    try {
      const faithPointImage = this.ormRepository.create(data);
      await this.ormRepository.save(faithPointImage);
      return this.mapToIFindFaithPointImage(faithPointImage);
    } catch (error) {
      console.error("Error creating faith point image: ", error);
      throw error;
    }
  }

  public async update(id: string, data: IUpdateFaithPointImage): Promise<boolean> {
    await this.ormRepository.update(id, data);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindFaithPointImage[]> {
    const faithPointImages = await this.ormRepository.find({
      relations: ['faith_point']
    });
    return faithPointImages.map(faithPointImage => this.mapToIFindFaithPointImage(faithPointImage));
  }

  public async findById(id: string): Promise<IFindFaithPointImage> {
    const faithPointImage = await this.ormRepository.findOne({
        where: { id },
        relations: ['faith_point']
        });
    if (!faithPointImage) {
        throw new Error("Faith Point Image not found");
    }
    return this.mapToIFindFaithPointImage(faithPointImage);
  }

  public async findByFaithPointId(data: string): Promise<IFindFaithPointImage[]> {
    const faithPointImages = await this.ormRepository.find({
        where: {
            faith_point: {
                id: data
            }
        },
        relations: ['faith_point']        
    });
    if (!faithPointImages) {
        throw new Error("Faith Point Image not found");
    }
    return faithPointImages.map(faithPointImage => this.mapToIFindFaithPointImage(faithPointImage));
  }

  private mapToIFindFaithPointImage(faithPointImage: FaithPointImage): IFindFaithPointImage {
    return {
      id: faithPointImage.id,
      faith_point: faithPointImage.faith_point,
      url: faithPointImage.url,
    };
  }
}

export default FaithPointImageRepository;
