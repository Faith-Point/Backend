import isAuthenticated from '@shared/http/auth/middleware/isAuthenticated';
import { Router } from 'express';
import ReligionController from '../controllers/ReligionController';

const routes = Router();
const religionController = new ReligionController();

routes.post('/', isAuthenticated, religionController.create);
routes.put('/:id', isAuthenticated, religionController.update);
routes.delete('/:id', isAuthenticated, religionController.delete);
routes.get('/', isAuthenticated, religionController.findAll);
routes.get('/:id', isAuthenticated, religionController.findById);
routes.get('/findByName', isAuthenticated, religionController.findByName);

export default routes;