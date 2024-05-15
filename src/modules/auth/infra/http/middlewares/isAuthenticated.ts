import { NextFunction, Request, Response } from 'express';
import { TokenExpiredError, verify } from 'jsonwebtoken';

import auth, { IAuthConfig } from '@config/auth';
import http from '@config/http';
import CacheRedis from '@shared/cache/CacheRedis';
import authDictionary from '@shared/exceptions/dictionary/auth';
import Handler from '@shared/exceptions/Handler';

async function isAuthenticated(request: Request, _response: Response, next: NextFunction): Promise<void> {
	const getErrorAuthenticatedFailed = (): Handler => {
		return new Handler(
			authDictionary.AUTHENTICATED_FAILED_DEFAULT.MESSAGE,
			authDictionary.AUTHENTICATED_FAILED_DEFAULT.CODE,
			http.UNAUTHORIZED,
			'AuthException',
		);
	};

	const getErrorAuthenticatedFailedParameters = (): Handler => {
		return new Handler(
			authDictionary.PARAMETERS_AUTHENTICATED_NOT_FOUND.MESSAGE,
			authDictionary.PARAMETERS_AUTHENTICATED_NOT_FOUND.CODE,
			http.UNAUTHORIZED,
			'AuthException',
		);
	};

	const getErrorAuthenticationExpired = (): Handler => {
		return new Handler(
			authDictionary.AUTHENTICATION_EXPIRED.MESSAGE,
			authDictionary.AUTHENTICATION_EXPIRED.CODE,
			http.UNAUTHORIZED,
			'AuthException',
		);
	};

	const authHeader = request.headers.authorization;
	if (!authHeader) {
		return next(getErrorAuthenticatedFailedParameters());
	}

	const [, token] = authHeader.split(' ');

	try {
		verify(token, auth.jwt.expiresIn) as IAuthConfig;

		const dataCache = await new CacheRedis().recover(token);

		if (!dataCache) {
			return next(getErrorAuthenticatedFailed());
		}

		Object.assign(request).auth = dataCache;

		return next();
	} catch (error) {
		if (error instanceof TokenExpiredError) {
			return next(getErrorAuthenticationExpired());
		}

		return next(getErrorAuthenticatedFailed());
	}
}

export default isAuthenticated;
