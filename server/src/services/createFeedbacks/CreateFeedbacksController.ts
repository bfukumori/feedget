import { Request, Response } from "express";
import { NodemailerMailAdapter } from "../../adapters/nodemailer/MailAdapter";
import { PrismaFeedbacksRepository } from "../../repositories/prisma/FeedbacksRepository";
import { CreateFeedbacksService } from "./CreateFeedbacksService";

export class CreateFeedbacksController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {type, comment, screenshot} = req.body;
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    const createFeedbacksService = new CreateFeedbacksService(prismaFeedbacksRepository, nodemailerMailAdapter);

    await createFeedbacksService.execute({type, comment,screenshot});
    
    return res.status(201).send();
  }
}
