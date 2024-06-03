import { Router } from 'express';
import isAuthenticated from '@shared/http/auth/middleware/isAuthenticated';
import ContactController from '@modules/shared/contact/infra/http/controllers/ContactController';

const routes = Router();
const contactController = new ContactController();

routes.post('/', isAuthenticated, contactController.create);
routes.put('/:id', isAuthenticated, contactController.update);
routes.delete('/:id', isAuthenticated, contactController.delete);
routes.get('/', isAuthenticated, contactController.findAll);
routes.get('/:id', isAuthenticated, contactController.findById);
routes.get('/findByName', isAuthenticated, contactController.findByName);
routes.get('/findByPhone', isAuthenticated, contactController.findByPhone);
routes.get('/findByEmail', isAuthenticated, contactController.findByEmail);

export default routes;