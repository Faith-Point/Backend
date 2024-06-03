import { Router } from 'express';
import isAuthenticated from '@shared/http/auth/middleware/isAuthenticated';
import FaithPointController from '@modules/faithPoint/faith_point/infra/http/controllers/FaithPointController';

const routes = Router();
const faithPointController = new FaithPointController();

routes.post('/', isAuthenticated, faithPointController.create);
routes.put('/:id', isAuthenticated, faithPointController.update);
routes.delete('/:id', isAuthenticated, faithPointController.delete);
routes.get('/', isAuthenticated, faithPointController.findAll);
routes.get('/:id', isAuthenticated, faithPointController.findById);
routes.get('/findByName', isAuthenticated, faithPointController.findByName);
routes.get('/findByReligion', isAuthenticated, faithPointController.findByReligion);

export default routes;