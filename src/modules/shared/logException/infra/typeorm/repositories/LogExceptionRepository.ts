import { Repository, getConnection, getRepository } from 'typeorm';
import Handler from '@shared/exceptions/Handler';
import ILogExceptionRepository from '@modules/shared/logException/domain/repositories/ILogExceptionRepository';
import LogException from '@modules/shared/logException/infra/typeorm/entities/LogException';

class LogExceptionRepository implements ILogExceptionRepository {
	private ormRepository: Repository<LogException>;

	constructor() {
		getConnection();
		this.ormRepository = getRepository(LogException);
	}

	public async findById(id: string): Promise<LogException | undefined> {
		const exception = await this.ormRepository.findOne({
			where: {
				id,
			},
		});

		return exception;
	}

	public async save(handler: Handler): Promise<LogException> {
		const logException = new LogException();
		logException.message = handler.message;
		logException.code = handler.code;
		logException.type = handler.type || 'Exception';
		logException.agent = handler.agent;
		logException.ip = handler.ip;
		logException.url = handler.url;
		logException.method = handler.method;
		logException.data = handler.data;
		logException.created_at = handler.created_at;
		logException.updated_at = handler.updated_at;
		logException.deleted_at = handler.deleted_at;

		const output = await this.ormRepository.save(logException);

		return output;
	}
}

export default LogExceptionRepository;