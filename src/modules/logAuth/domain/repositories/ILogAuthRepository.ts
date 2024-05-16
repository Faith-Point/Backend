import ISaveLogAuth from '@modules/logAuth/domain/interfaces/ISaveLogAuth';

interface ILogAuthRepository {
  register(logAuth: ISaveLogAuth): Promise<void>;
}

export default ILogAuthRepository;
