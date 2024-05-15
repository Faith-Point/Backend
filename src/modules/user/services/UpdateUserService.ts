import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';
import IUpdateUser from '@modules/user/domain/interfaces/IUpdateUser';

@injectable()
class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async update(id: string, user: IUpdateUser): Promise<boolean> {
    if(!id) {
      throw new AppError('An ID must be provided for update operations.');
    }

    if(!user || (user.name === undefined && user.email === undefined && user.role === undefined && user.address === undefined)) {
      throw new AppError('No valid update data provided.');
    }

    const userExists = await this.userRepository.findById(id);
    if(!userExists) {
      throw new AppError('User does not exist.');
    }

    try {
      const dateTimeNow = new Date();
      user.updated_at = dateTimeNow;
      const updateResult = await this.userRepository.update(id, user);
      return updateResult;
    } catch(error) {
      throw new AppError(`Failed to update user:` + error);
    }
  }
}

export default UpdateUserService;