import { Router } from 'express';
import { CreateFeedbacksController } from './services/CreateFeedbacksController';

export const routes = Router();

const createFeedbacksController = new CreateFeedbacksController();

routes.post('/feedbacks', createFeedbacksController.handle);
