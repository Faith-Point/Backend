import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';
import shortState from '@shared/util/ShortState';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import ICreateState from '@modules/shared/state/domain/interfaces/ICreateState';
import IUpdateState from '@modules/shared/state/domain/interfaces/IUpdateState';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import IFindState from '@modules/shared/state/domain/interfaces/IFindState';
import { injectable } from 'tsyringe';
import AppDataSource from '@config/data-source';
import { Repository } from 'typeorm';

@injectable()
class StateRepository implements IStateRepository {
  private ormRepository: Repository<State>;
  private ormRepositoryCountry: Repository<Country>;
  
  constructor() {
    this.ormRepository = AppDataSource.getRepository(State);
    this.ormRepositoryCountry = AppDataSource.getRepository(Country);
  }

  public async create(parameters: ICreateState): Promise<IFindState> {
    try {
      const state = this.ormRepository.create(parameters);
      await this.ormRepository.save(state);
      return this.mapToIFindState(state);
    }
    catch (error) {
      console.error("Error creating state: ", error);
      throw error;
    }
  }

  public async update(id: string, state: IUpdateState): Promise<boolean> {
    await this.ormRepository.update(id, state);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindState[]> {
    const states = await this.ormRepository.find({
      relations: ['country'],
    });
    return states.map(state => this.mapToIFindState(state));
  }

  public async findById(id: string): Promise<IFindState | undefined> {
    const state = await this.ormRepository.findOne({
      where: {
        id: id
      },
      relations: ['country'],
    });
    return state ? this.mapToIFindState(state) : undefined;
  }

  public async findByCountry(code: string): Promise<IFindState[] | undefined> {
    const findCountry = await this.ormRepositoryCountry.findOne({
      where: {
        id: code
      }
    });
    if (!findCountry) {
      return undefined;
    }
    const states = await this.ormRepository.find({
      where: {
        country: findCountry
      },
      relations: ['country'],
    });
    return states.map(state => this.mapToIFindState(state));
  }

  public async findByShortName(shortname: shortState): Promise<IFindState | undefined> {
    const state = await this.ormRepository.findOne({
      where: {
        short_name: shortname,
      },
      relations: ['country'],
    });
    return state ? this.mapToIFindState(state) : undefined;
  }

  public async findByLongName(longName: string): Promise<IFindState | undefined> {
    const state = await this.ormRepository.findOne({
      where: {
        long_name: longName,
      },
      relations: ['country'],
    });
    return state ? this.mapToIFindState(state) : undefined;
  }

  public async findByCode(code: string): Promise<IFindState[] | undefined> {
    const states = await this.ormRepository.find({
      where: {
        code: code,
      },
      relations: ['country'],
    });
    return states.map(state => this.mapToIFindState(state));
  }

  private mapToIFindState(state: State): IFindState {
    return {
      id: state.id,
      short_name: state.short_name,
      long_name: state.long_name,
      code: state.code,
      country: state.country,
    };
  }
}

export default StateRepository;
