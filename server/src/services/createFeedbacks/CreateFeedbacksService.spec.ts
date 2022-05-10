import { CreateFeedbacksService } from "./CreateFeedbacksService"

let createFeedbacksService: CreateFeedbacksService;

const createFeedbacksSpy = jest.fn();
const sendMailSpy = jest.fn();

describe('Create feedback', ()=>{
  beforeAll(()=> {
    createFeedbacksService = new CreateFeedbacksService(
      { create: createFeedbacksSpy },
      { sendMail: sendMailSpy }
    );
  })
  
  it('should be able to create a feedback', async ()=> {
    await expect(createFeedbacksService.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64, teste'
    })).resolves.not.toThrowError();
    expect(createFeedbacksSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to create a feedback without type', async ()=> {
    await expect(createFeedbacksService.execute({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64, teste'
    })).rejects.toThrowError();
  });

  it('should not be able to create a feedback without comment', async ()=> {
    await expect(createFeedbacksService.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64, teste'
    })).rejects.toThrowError();
  });

  it('should not be able to create a feedback with an invalid screenshot', async ()=> {
    await expect(createFeedbacksService.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'teste.jpg'
    })).rejects.toThrowError();
  });
});