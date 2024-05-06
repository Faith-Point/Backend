import IStateRepository from '@modules/shared/state/domain/repositories/IStateRepository';
import shortState from '@shared/util/ShortState';
import { getRepository, Repository } from 'typeorm';
import State from '@modules/shared/state/infra/typeorm/entities/State';
import ICreateState from '@modules/shared/state/domain/interfaces/ICreateState';
import IUpdateState from '@modules/shared/state/domain/interfaces/IUpdateState';
import Country from '@modules/shared/country/infra/typeorm/entities/Country';
import IFindState from '@modules/shared/state/domain/interfaces/IFindState';

class StateRepository implements IStateRepository {
  private ormRepository: Repository<State>;
  private ormRepositoryCountry: Repository<Country>;

  constructor() {
    this.ormRepository = getRepository(State);
    this.ormRepositoryCountry = getRepository(Country);
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
    const state = this.ormRepository.find();
    return state;
  }

  public async findById(id: string): Promise<IFindState | undefined> {
    const state = this.ormRepository.findOne(id);
    return state;
  }

  public async findByCountry(code: string): Promise<IFindState[] | undefined> {

    const findCountry = await this.ormRepositoryCountry.findOne({
      where: {
        id: code
      }
    });
    const state = this.ormRepository.find(
      {
        where: {
          country: findCountry
        }
      }
    );

    return state;
  }

  public async findByShortName(
    shortname: shortState
  ): Promise<IFindState | undefined> {
    const state = this.ormRepository.findOne({
      where: {
        short_Name: shortname,
      },
    });

    return state;
  }
  public async findByLongName(longName: string): Promise<IFindState | undefined> {
    const state = this.ormRepository.findOne({
      where: {
        long_Name: longName,
      },
    });

    return state;
  }

  public async findByCode(code: string): Promise<IFindState[] | undefined> {
    const state = this.ormRepository.find({
      where: {
        code: code,
      },
    });

    return state;
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
