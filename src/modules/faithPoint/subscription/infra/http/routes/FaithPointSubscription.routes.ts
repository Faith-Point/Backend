import isAuthenticated from '@shared/http/auth/middleware/isAuthenticated';
import { Router } from 'express';
import FaithPointSubscriptionController from '@modules/faithPoint/subscription/infra/http/controllers/FaithPointSubscriptionController';

const routes = Router();
const faithPointSubscriptionController = new FaithPointSubscriptionController();

routes.post('/', isAuthenticated, faithPointSubscriptionController.create);
routes.put('/:id', isAuthenticated, faithPointSubscriptionController.update);
routes.delete('/:id', isAuthenticated, faithPointSubscriptionController.delete);
routes.get('/', isAuthenticated, faithPointSubscriptionController.findAll);
routes.get('/:id', isAuthenticated, faithPointSubscriptionController.findById);
routes.get('/findByFaithPointId', isAuthenticated, faithPointSubscriptionController.findByFaithPointId);

export default routes;

