import { Router } from 'express';
import RoleController from '@modules/role/infra/http/controllers/RoleController';

const routes = Router();
const roleController = new RoleController();

routes.post('/', roleController.create);
routes.put('/:id', roleController.update);
routes.delete('/:id', roleController.delete);
routes.get('/', roleController.findAll);
routes.get('/:id', roleController.findById);
routes.get('/findByRole', roleController.findByRole);

export default routes;