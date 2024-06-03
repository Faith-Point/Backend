import isAuthenticated from "@shared/http/auth/middleware/isAuthenticated";
import FaithPointScheduleController from "@modules/faithPoint/schedule/infra/http/controllers/FaithPointScheduleController";
import { Router } from "express";

const routes = Router();
const faithPointScheduleController = new FaithPointScheduleController();

routes.post('/', isAuthenticated, faithPointScheduleController.create);
routes.put('/:id', isAuthenticated, faithPointScheduleController.update);
routes.delete('/:id', isAuthenticated, faithPointScheduleController.delete);
routes.get('/', isAuthenticated, faithPointScheduleController.findAll);
routes.get('/:id', isAuthenticated, faithPointScheduleController.findById);
routes.get('/findByDate', isAuthenticated, faithPointScheduleController.findByDate);
routes.get('/findByFaithPointId', isAuthenticated, faithPointScheduleController.findByFaithPointId);

export default routes;