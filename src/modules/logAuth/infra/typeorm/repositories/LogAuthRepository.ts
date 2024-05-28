import { Repository } from 'typeorm';
import { injectable } from 'tsyringe';
import ILogAuthRepository from '@modules/logAuth/domain/repositories/ILogAuthRepository';
import LogAuth from '@modules/logAuth/infra/typeorm/entities/LogAuth';
import ISaveLogAuth from '@modules/logAuth/domain/interfaces/ISaveLogAuth';
import AppDataSource from '@config/data-source';

@injectable()
class LogAuthRepository implements ILogAuthRepository {
  private ormRepository: Repository<LogAuth>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(LogAuth);
  }

  public async register({ id, user, typeAuth, created_at }: ISaveLogAuth): Promise<void> {
    const logAuth = this.ormRepository.create({
      id,
      user,
      log: typeAuth,
      created_at,
    });

    await this.ormRepository.save(logAuth);
  }
}

export default LogAuthRepository;
