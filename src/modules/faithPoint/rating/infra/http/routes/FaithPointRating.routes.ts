import isAuthenticated from '@shared/http/auth/middleware/isAuthenticated';
import { Router } from 'express';
import FaithPointRatingController from '@modules/faithPoint/rating/infra/http/controllers/FaithPointRatingController';

const routes = Router();
const faithPointRatingController = new FaithPointRatingController();

routes.post('/', isAuthenticated, faithPointRatingController.create);
routes.put('/:id', isAuthenticated, faithPointRatingController.update);
routes.delete('/:id', isAuthenticated, faithPointRatingController.delete);
routes.get('/', isAuthenticated, faithPointRatingController.findAll);
routes.get('/:id', isAuthenticated, faithPointRatingController.findById);
routes.get('/findByFaithPoint', isAuthenticated, faithPointRatingController.findByFaithPoint);
routes.get('/findByUser', isAuthenticated, faithPointRatingController.findByUser);
routes.get('/findByRating', isAuthenticated, faithPointRatingController.findByRating);

export default routes;
