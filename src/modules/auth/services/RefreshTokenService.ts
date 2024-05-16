import { v4 as uuidv4 } from 'uuid';
import { inject, injectable, container } from 'tsyringe';
import IUserRepository from '@modules/user/domain/repositories/IUserRepository';
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
		@inject('UserRepository')
		private userRepository: IUserRepository,
	) {
		this.saveLogAuth = container.resolve(SaveLogAuth);
	}

	public async execute(email: string): Promise<IResponseLogin> {
		const user = await this.userRepository.findByEmail(email);
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
		const dateTimeNow = new Date();
		await this.saveLogAuth.execute({ id:uuidv4() , user, typeAuth, created_at: dateTimeNow});

		return newAuth;
	}
}

export default RefreshTokenService;
