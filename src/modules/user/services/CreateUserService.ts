import { v4 as uuidv4 } from 'uuid';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/exceptions/AppError';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';
import ICreateUser from '@modules/user/domain/interfaces/ICreateUser';
import IFindUser from '@modules/user/domain/interfaces/IFindUser';
import { hash } from 'bcryptjs';
import config from '@config/bcrypt';

@injectable()
class CreateUserService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ){}

    public async create(parameters: ICreateUser): Promise<IFindUser> {
        if(!parameters.name || !parameters.email || !parameters.role || !parameters.address) {
            throw new AppError('Missing required parameters: name, email, role or address');
        }
        const dateTimeNow = new Date();
        const hashedPassword = await hash(parameters.password, config.bcrypt.round);
        const newUser = await this.userRepository.create({
            id: uuidv4(),
            name: parameters.name,
            email: parameters.email,
            password: hashedPassword,
            role: parameters.role,
            address: parameters.address,
            created_at: dateTimeNow,
        });
        return newUser;
    }
}

export default CreateUserService;