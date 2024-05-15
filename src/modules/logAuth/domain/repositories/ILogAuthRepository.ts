import ISaveLogAuth from '@modules/logAuth/domain/interfaces/ISaveLogAuth';

interface ILogAuthRepository {
  register({ user, typeAuth }: ISaveLogAuth): Promise<void>;
}

export default ILogAuthRepository;
