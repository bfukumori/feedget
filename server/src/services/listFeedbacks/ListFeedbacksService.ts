import { IFeedbacksRepository } from "../../repositories/IFeedbacksRepository";

export class ListFeedbacksService {
  constructor(
    private feedbacksRepository: IFeedbacksRepository
  ) {}
  async execute() {
    try {
      await this.feedbacksRepository.list();
    } catch (error) {
      console.log(error)
    }
  }
}