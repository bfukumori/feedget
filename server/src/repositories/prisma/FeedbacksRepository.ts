import { prisma } from '../../prisma';
import { IFeedbackCreateDTO, IFeedbacksRepository } from '../IFeedbacksRepository';

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create({ type, comment, screenshot }: IFeedbackCreateDTO) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
