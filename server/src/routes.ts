import { Router } from 'express';
import { CreateFeedbacksController } from './services/createFeedbacks/CreateFeedbacksController';
import { ListFeedbacksController } from './services/listFeedbacks/ListFeedbacksController';

export const routes = Router();

const createFeedbacksController = new CreateFeedbacksController();
const listFeedbacksController = new ListFeedbacksController();

routes.post('/feedbacks', createFeedbacksController.handle);
routes.get('/feedbacks', listFeedbacksController.handle);
