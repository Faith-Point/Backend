import isAuthenticated from '@shared/http/auth/middleware/isAuthenticated';
import { Router } from 'express';
import FaithPointImageController from '@modules/faithPoint/image/infra/http/controllers/FaithPointImageController';

const routes = Router();
const faithPointImageController = new FaithPointImageController();

routes.post('/', isAuthenticated, faithPointImageController.create);
routes.put('/:id', isAuthenticated, faithPointImageController.update);
routes.delete('/:id', isAuthenticated, faithPointImageController.delete);
routes.get('/', isAuthenticated, faithPointImageController.findAll);
routes.get('/:id', isAuthenticated, faithPointImageController.findById);
routes.get('/findByFaithPointId', isAuthenticated, faithPointImageController.findByFaithPointId);

export default routes;