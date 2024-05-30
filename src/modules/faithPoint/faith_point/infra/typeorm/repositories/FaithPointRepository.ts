import { injectable } from 'tsyringe';
import AppDataSource from '@config/data-source';
import { Repository } from 'typeorm';
import IFaitPointRepository from '@modules/faithPoint/faith_point/domain/repositories/IFaithPointRepository';
import FaithPoint from '@modules/faithPoint/faith_point/infra/typeorm/entities/FaithPoint';
import ICreateFaithPoint from '@modules/faithPoint/faith_point/domain/interfaces/ICreateFaithPoint';
import IFindFaithPoint from '@modules/faithPoint/faith_point/domain/interfaces/IFindFaithPoint';
import IUpdateFaithPoint from '@modules/faithPoint/faith_point/domain/interfaces/IUpdateFaithPoint';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import Religion from '@modules/faithPoint/religions/infra/typeorm/entities/Religion';
import Contact from '@modules/shared/contact/infra/typeorm/entities/Contact';
import SocialMedia from '@modules/shared/socialMedia/infra/typeorm/entities/SocialMedia';

@injectable()
class FaithPointRepository implements IFaitPointRepository{
  private ormRepository: Repository<FaithPoint>;
  private ormRepositoryAddress: Repository<Address>;
  private ormRepositoryReligion: Repository<Religion>;
  private ormRepositoryContact: Repository<Contact>;
  private ormRepositorySocialMedia: Repository<SocialMedia>;  

  constructor() {
    this.ormRepository = AppDataSource.getRepository(FaithPoint);
    this.ormRepositoryAddress = AppDataSource.getRepository(Address);
    this.ormRepositoryReligion = AppDataSource.getRepository(Religion);
    this.ormRepositoryContact = AppDataSource.getRepository(Contact);
    this.ormRepositorySocialMedia = AppDataSource.getRepository(SocialMedia);
  }

  public async create(parameters: ICreateFaithPoint): Promise<IFindFaithPoint> {
    try {
      const address = await this.ormRepositoryAddress.findOne({
        where: {
          id: parameters.address.id
        }
      })
      if (!address) {
        throw new Error('Address not found');
      }

      const religion = await this.ormRepositoryReligion.findOne({
        where: {
          id: parameters.religion.id
        }
      })

      if (!religion) {
        throw new Error('Religion not found');
      }

      const contact = await this.ormRepositoryContact.findOne({
        where: {
          id: parameters.contact.id
        }
      })

      if (!contact) {
        throw new Error('Contact not found');
      }

      const socialMedia = await this.ormRepositorySocialMedia.findOne({
        where: {
          id: parameters.socialMedia.id
        }
      })

      if (!socialMedia) {
        throw new Error('Social Media not found');
      }

      const faithPoint = this.ormRepository.create({
        name: parameters.name,
        description: parameters.description,
        address,
        religion,
        contact,
        socialMedia
      });

      await this.ormRepository.save(faithPoint);
      return this.mapToIFindFaithPoint(faithPoint);
    } catch (error) {
      console.error("Error creating faith point: ", error);
      throw error;
    }
  }

  public async update(id: string, data: IUpdateFaithPoint): Promise<boolean> {{
      try {
        await this.ormRepository.update(id, data);
        return true;
      } catch (error) {
        console.error("Error updating faith point: ", error);
        throw error;
      }
    }
  }

  public async delete(id: string): Promise<void> {
    try {
      await this.ormRepository.delete(id);
    } catch (error) {
      console.error("Error deleting faith point: ", error);
      throw error;
    }
  }

  public async findById(id: string): Promise<IFindFaithPoint> {
    try {
      const faithPoint = await this.ormRepository.findOne({
        where: { id },
        relations: ['address', 'religion', 'contact', 'socialMedia']
      });
      if (!faithPoint) {
        throw new Error('Faith Point not found');
      }
      return this.mapToIFindFaithPoint(faithPoint);
    } catch (error) {
      console.error("Error finding faith point: ", error);
      throw error;
    }
  }

  public async findAll(): Promise<IFindFaithPoint[]> {
    try {
      const faithPoints = await this.ormRepository.find({
        relations: ['address', 'religion', 'contact', 'socialMedia']
      });
      return faithPoints.map(faithPoint => this.mapToIFindFaithPoint(faithPoint));
    } catch (error) {
      console.error("Error finding faith points: ", error);
      throw error;
    }
  }

  public async findByName(name: string): Promise<IFindFaithPoint | undefined> {
    try {
      const faithPoint = await this.ormRepository.findOne({
        where: { name },
        relations: ['address', 'religion', 'contact', 'socialMedia']
      });
      return faithPoint ? this.mapToIFindFaithPoint(faithPoint) : undefined;
    } catch (error) {
      console.error("Error finding faith point by name: ", error);
      throw error;
    }
  }

  public async findByReligion(religion: string): Promise<IFindFaithPoint[] | undefined> {
    try {
      const faithPoints = await this.ormRepository.find({
        where: {
          religion: {
            id: religion          
          }
        }
      })
      return faithPoints.map(faithPoint => this.mapToIFindFaithPoint(faithPoint));
    } catch (error) {
      console.error("Error finding faith points by religion: ", error);
      throw error;
    }
  }

  private mapToIFindFaithPoint(faithPoint: FaithPoint): IFindFaithPoint {
    return {
      id: faithPoint.id,
      name: faithPoint.name,
      description: faithPoint.description,
      address: faithPoint.address,
      religion: faithPoint.religion,
      contact: faithPoint.contact,
      socialMedia: faithPoint.socialMedia,
    };
  }
}

export default FaithPointRepository;