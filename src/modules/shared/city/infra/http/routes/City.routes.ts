// import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import CityController from '@modules/shared/city/infra/http/controllers/CityController';

const routes = Router();
const cityController = new CityController();

routes.post('/', cityController.create);
routes.put('/:id', cityController.update);
routes.delete('/:id', cityController.delete);
routes.get('/', cityController.findAll);
routes.get('/:id', cityController.findById);
routes.get('/findByState', cityController.findByState);
routes.get('/findByShortName', cityController.findByShortName);
routes.get('/findByLongName', cityController.findByLongName);
routes.get('/findByCode', cityController.findByCode);

export default routes;




