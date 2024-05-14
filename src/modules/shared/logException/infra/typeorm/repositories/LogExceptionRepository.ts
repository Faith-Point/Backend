import { Repository } from 'typeorm';
import Handler from '@shared/exceptions/Handler';
import ILogExceptionRepository from '@modules/shared/logException/domain/repositories/ILogExceptionRepository';
import LogException from '@modules/shared/logException/infra/typeorm/entities/LogException';

class LogExceptionRepository implements ILogExceptionRepository {
  private ormRepository: Repository<LogException>;

  public async findById(id: string): Promise<LogException | undefined> {
    const exception = await this.ormRepository.findOne({
      where: { id },
    });

    return exception ?? undefined;
  }

  public async save(handler: Handler): Promise<LogException> {
    const logException = this.ormRepository.create({
      message: handler.message,
      code: handler.code,
      type: handler.type || 'Exception',
      agent: handler.agent,
      ip: handler.ip,
      url: handler.url,
      method: handler.method,
      data: handler.data,
      created_at: handler.created_at,
      updated_at: handler.updated_at,
      deleted_at: handler.deleted_at,
    });

    const output = await this.ormRepository.save(logException);

    return output;
  }
}

export default LogExceptionRepository;