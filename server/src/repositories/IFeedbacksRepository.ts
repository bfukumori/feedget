import { Feedback } from "@prisma/client";

export interface IFeedbackCreateDTO {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedbacksRepository {
  create: (data:IFeedbackCreateDTO) => Promise<void>;
  list: ()=> Promise<Feedback[]>
}
