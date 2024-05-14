import { inject, injectable } from 'tsyringe';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';
import IFindUser from '@modules/user/domain/interfaces/IFindUser';

@injectable()
class FindUserService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ){}

    public async findAll(): Promise<IFindUser[]> {
        const users = await this.userRepository.findAll();
        return users;
    }

    public async findById(id: string): Promise<IFindUser | undefined> {
        const user = await this.userRepository.findById(id);
        return user;
    }

    public async findByName(name: string): Promise<IFindUser[] | undefined> {
        const users = await this.userRepository.findByName(name);
        return users;
    }

    public async findByEmail(email: string): Promise<IFindUser | undefined> {
        const user = await this.userRepository.findByEmail(email);
        return user;
    }

    public async findByRole(role: string): Promise<IFindUser[] | undefined> {
        const users = await this.userRepository.findByRole(role);
        return users;
    }
}

export default FindUserService;