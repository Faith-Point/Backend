import LogException from '@modules/shared/logException/domain/interfaces/ILogException';
import Handler from '@shared/exceptions/Handler';

interface ILogExceptionRepository {
	findById(id: string): Promise<LogException | undefined>;
	save(handler: Handler): Promise<LogException>;
}

export default ILogExceptionRepository;