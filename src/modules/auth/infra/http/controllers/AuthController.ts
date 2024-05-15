// @ts-nocheck
import { Request, Response } from 'express';
import ApiResponse from '@shared/http/response/ApiResponse';
import AuthLoginService from '@modules/auth/service/AuthLoginService';
import RefreshTokenService from '@modules/auth/service/RefreshTokenService';
import LogoutService from '@modules/auth/service/LogoutService';
import { container } from 'tsyringe';
import FindUserService from '@modules/users/services/FindUserService';

class AuthController {
	public async login(request: Request, response: Response): Promise<Response> {
	  const service = container.resolve(AuthLoginService);
  
	  const { email, password } = request.body;
  
	  const auth = await service.execute({ email, password });
  
	  const output = await ApiResponse.execute('Login Realizado com sucesso!', auth);
  
	  return response.json(output);
	}
  
	public async refreshToken(request: Request, response: Response): Promise<Response> {
	  const service = container.resolve(RefreshTokenService);
  
	  const { id } = request.body;
  
	  const dataAuth = await service.execute(id);
  
	  const output = await ApiResponse.execute('Token atualizado com sucesso!', dataAuth);
  
	  return response.json(output);
	}
  
	public async logout(request: Request, response: Response): Promise<Response> {
	  const service = container.resolve(LogoutService);
  
	  const authorization = request.headers.authorization !== undefined ? request.headers.authorization : '';
	  const [, token] = authorization.split(' ');
  
	  const { auth } = request;
  
	  await service.execute(auth?.user_id, token);
  
	  const output = await ApiResponse.execute('Logout realizado com sucesso!');
  
	  return response.json(output);
	}
  }
  
  export default AuthController;