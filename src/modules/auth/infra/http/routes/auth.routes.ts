import { Router } from 'express';
import { celebrate } from 'celebrate';
import loginValidate from '@modules/auth/infra/http/validators/LoginValidate';
import RefreshToken from '@modules/auth/infra/http/validators/RefreshToken';
import AuthController from '@modules/auth/infra/http/controllers/AuthController';
import validateRefreshToken from '@modules/auth/infra/http/middlewares/validateRefreshToken';
import isAuthenticated from '@modules/auth/infra/http/middlewares/isAuthenticated';

const routes = Router();
const controller = new AuthController();

routes.post('/login', celebrate(loginValidate), controller.login);
routes.post('/logout', isAuthenticated, controller.logout);
routes.post('/refresh/token', celebrate(RefreshToken), validateRefreshToken, controller.refreshToken);

export default routes;
