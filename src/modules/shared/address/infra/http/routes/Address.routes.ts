// import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import AddressController from '@modules/shared/address/infra/http/controllers/AddressController';

const routes = Router();
const addressController = new AddressController();

routes.post('/', addressController.create);
routes.put('/:id', addressController.update);
routes.delete('/:id', addressController.delete);
routes.get('/', addressController.findAll);
routes.get('/:id', addressController.findById);
routes.get('/findByCity', addressController.findByCity);

export default routes;




