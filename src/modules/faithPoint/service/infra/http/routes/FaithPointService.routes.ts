import isAuthenticated from '@shared/http/auth/middleware/isAuthenticated';
import FaithPointServiceController from '@modules/faithPoint/service/infra/http/controllers/FaithPointServiceController';
import { Router } from 'express';

const routes = Router();
const faithPointServiceController = new FaithPointServiceController();

routes.post('/', isAuthenticated, faithPointServiceController.create);
routes.put('/:id', isAuthenticated, faithPointServiceController.update);
routes.delete('/:id', isAuthenticated, faithPointServiceController.delete);
routes.get('/', isAuthenticated, faithPointServiceController.findAll);
routes.get('/:id', isAuthenticated, faithPointServiceController.findById);
routes.get('/findByFaithPoint', isAuthenticated, faithPointServiceController.findByFaithPoint);
routes.get('/findByName', isAuthenticated, faithPointServiceController.findByName);

export default routes;