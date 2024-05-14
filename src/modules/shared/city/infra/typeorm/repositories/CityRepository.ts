import ICityRepository from '@modules/shared/city/domain/repositories/ICityRepository';
import { getRepository, Repository } from 'typeorm';
import City from '@modules/shared/city/infra/typeorm/entities/City';
import ICreateCity from '@modules/shared/city/domain/interfaces/ICreateCity';
import IUpdateCity from '@modules/shared/city/domain/interfaces/IUpdateCity';
import IFindCity from '@modules/shared/city/domain/interfaces/IFindCity';
import State from '@modules/shared/state/infra/typeorm/entities/State';

class CityRepository implements ICityRepository {
  private ormRepository: Repository<City>;
  private ormRepositoryState: Repository<State>;

  constructor() {
    this.ormRepository = getRepository(City);
    this.ormRepositoryState = getRepository(State);
  }

  public async create(parameters: ICreateCity): Promise<IFindCity> {
    try {
      const city = this.ormRepository.create(parameters);
      await this.ormRepository.save(city);
      return this.mapToIFindCity(city);
    } catch (error) {
      console.error("Error creating city: ", error);
      throw error;
    }
  }
  public async update(id: string, city: IUpdateCity): Promise<boolean> {
    await this.ormRepository.update(id, city);
    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<IFindCity[]> {
    const cities = await this.ormRepository.find({ relations: ['state', 'state.country'] });
    return cities.map(city => this.mapToIFindCity(city));
  }

  public async findById(id: string): Promise<IFindCity | undefined> {
    const city = await this.ormRepository.findOne({
      where: { id },
      relations: ['state', 'state.country'],
    });
    return city ? this.mapToIFindCity(city) : undefined;
  }

  public async findByState(code: string): Promise<IFindCity[] | undefined> {
    const findState = await this.ormRepositoryState.findOne({
      where: { code },
      relations: ['country'],
    });
    if (!findState) {
      return undefined;
    }
    const cities = await this.ormRepository.find({
      where: { state: findState },
      relations: ['state', 'state.country'],
    });
    return cities.map(city => this.mapToIFindCity(city));
  }

  public async findByShortName(shortName: string): Promise<IFindCity | undefined> {
    const city = await this.ormRepository.findOne({
      where: { short_name: shortName },
      relations: ['state', 'state.country'],
    });
    return city ? this.mapToIFindCity(city) : undefined;
  }

  public async findByLongName(longName: string): Promise<IFindCity | undefined> {
    const city = await this.ormRepository.findOne({
      where: { long_name: longName },
      relations: ['state', 'state.country'],
    });
    return city ? this.mapToIFindCity(city) : undefined;
  }

  public async findByCode(code: string): Promise<IFindCity[] | undefined> {
    const cities = await this.ormRepository.find({
      where: { code },
      relations: ['state', 'state.country'],
    });
    return cities.map(city => this.mapToIFindCity(city));
  }

  private mapToIFindCity(city: City): IFindCity {
    return {
      id: city.id,
      short_name: city.short_name,
      long_name: city.long_name,
      code: city.code,
      state: city.state,
    };
  }
}

export default CityRepository;
