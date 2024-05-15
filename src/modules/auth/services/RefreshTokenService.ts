import { inject, injectable, container } from 'tsyringe';
import IUsersRepository from '@modules/user/domain/repositories/IUserRepository';
import authDictionary from '@shared/exceptions/dictionary/auth';
import IResponseLogin from '@shared/http/auth/response/IResponseLogin';
import Handler from '@shared/exceptions/Handler';
import http from '@config/http';
import SaveLogAuth from '@modules/logAuth/services/SaveLogAuthService';
import typeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
import AuthJwt from './AuthJwtService';
import UserCache from './UserCacheService';

@injectable()
class RefreshTokenService {
	saveLogAuth: SaveLogAuth;

	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository,
	) {
		this.saveLogAuth = container.resolve(SaveLogAuth);
	}

	public async execute(email: string): Promise<IResponseLogin> {
		const user = await this.usersRepository.findByEmail(email);
		if (!user) {
			throw new Handler(
				authDictionary.AUTHENTICATED_FAILED_REFRESH_TOKEN.MESSAGE,
				authDictionary.AUTHENTICATED_FAILED_REFRESH_TOKEN.CODE,
				http.BAD_REQUEST,
			);
		}

		const newAuth = await new AuthJwt().sign(user);

		await UserCache.execute(newAuth.token, user);

		const typeAuth = 'refresh' as unknown as typeAuth;
		await this.saveLogAuth.execute({ user, typeAuth });

		return newAuth;
	}
}

export default RefreshTokenService;
