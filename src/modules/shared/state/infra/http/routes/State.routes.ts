// import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import StateController from '@modules/shared/state/infra/http/controllers/StateController';

const routes = Router();
const stateController = new StateController();

routes.post('/', stateController.create);
routes.put('/:id', stateController.update);
routes.delete('/:id', stateController.delete);
routes.get('/', stateController.findAll);
routes.get('/:id', stateController.findById);
routes.get('/findByCountry', stateController.findByCountry);
routes.get('/findByShortName', stateController.findByShortName);
routes.get('/findByLongName', stateController.findByLongName);
routes.get('/findByCode', stateController.findByCode);

export default routes;




