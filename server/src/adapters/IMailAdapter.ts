export interface SendMailDTO {
  subject: string;
  body: string;
}

export interface IMailAdapter {
  sendMail: (data:SendMailDTO)=>Promise<void>;
}
