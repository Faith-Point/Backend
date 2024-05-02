import { Router } from 'express';
import CountryController from '@modules/shared/country/infra/http/controllers/CountryController';

const routes = Router();
const countryController = new CountryController();

routes.post('/', countryController.create);
routes.put('/:id', countryController.update);
routes.delete('/:id', countryController.delete);
routes.get('/', countryController.findAll);
routes.get('/:id', countryController.findById);
routes.get('/findByCode', countryController.findByShortName);
routes.get('/findByShortName', countryController.findByShortName);
routes.get('/findByLongName', countryController.findByLongName);

export default routes;