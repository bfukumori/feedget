import { IMailAdapter } from "../adapters/IMailAdapter";
import { IFeedbacksRepository } from "../repositories/IFeedbacksRepository";

interface ICreateFeedbacksServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class CreateFeedbacksService {
  constructor(
     private feedbacksRepository: IFeedbacksRepository,
     private mailAdapter: IMailAdapter
  ) {}
  async execute({type, comment, screenshot}:ICreateFeedbacksServiceRequest) {

    if (!type) {
      throw new Error("Type is required.");
    }

    if (!comment) {
      throw new Error("Comment is required.");
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error("Invalid screenshot format.");
      
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })
    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" />` : '',
        `</div>`,
      ].join('\n')
    })
  }
}