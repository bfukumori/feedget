import { IMailAdapter, SendMailDTO } from "../IMailAdapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
});

export class NodemailerMailAdapter implements IMailAdapter {
 async sendMail({subject, body}: SendMailDTO) {
  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Goku <goku@gmail.com>",
    subject,
    html: body
  })
  };
}
