import { Request, Response } from "express";
import { PrismaFeedbacksRepository } from "../../repositories/prisma/FeedbacksRepository";

export class ListFeedbacksController {
  async handle(req: Request, res: Response):Promise<Response> {
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const feedbacks = await prismaFeedbacksRepository.list();
    return res.json(feedbacks);
  }
}