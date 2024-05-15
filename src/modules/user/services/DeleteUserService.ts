import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';

@injectable()
class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async delete(id: string): Promise<void> {
    if(!id) {
      throw new AppError('An ID must be provided for delete operations.');
    }

    const userExists = await this.userRepository.findById(id);
    if(!userExists) {
      throw new AppError('User does not exist.');
    }

    try {
      await this.userRepository.delete(id);
    } catch(error) {
      throw new AppError(`Failed to delete user:` + error);
    }
  }
}

export default DeleteUserService;