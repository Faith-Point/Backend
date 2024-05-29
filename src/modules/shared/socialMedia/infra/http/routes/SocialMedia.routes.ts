import isAuthenticated from '@shared/http/auth/middleware/isAuthenticated';
import { Router } from 'express';
import SocialMediaController from '@modules/shared/socialMedia/infra/http/controllers/SocialMediaController';

const routes = Router();
const socialMediaController = new SocialMediaController();

routes.post('/', isAuthenticated, socialMediaController.create);
routes.put('/:id', isAuthenticated, socialMediaController.update);
routes.delete('/:id', isAuthenticated, socialMediaController.delete);
routes.get('/', isAuthenticated, socialMediaController.findAll);
routes.get('/:id', isAuthenticated, socialMediaController.findById);
routes.get('/findByName', isAuthenticated, socialMediaController.findByName);

export default routes;