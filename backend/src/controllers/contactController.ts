import nodemailer from 'nodemailer';
import { Request, Response, NextFunction } from 'express';
import Mail from 'nodemailer/lib/mailer';

var smtpTransport = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  auth: {
    user: 'cmogush@zohomail.com',
    pass: process.env.EMAIL_PASS
  }
});

type Formdata = {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
};

function mailData(data: Formdata) {
  return {
    from: 'cmogush@zohomail.com', // sender address
    to: 'cmogush19@gmail.com@',
    subject: `Contact Request from ${data.name}`,
    text: `${data.message}`,
    html: `
      <p><b>Name: </b>${data.name}</p>
      <p><b>Phone: </b>${data.phone}</p>
      <p><b>E-mail: </b>${data.email}</p>
      <p><b>Company: </b>${data.company}</p>
      <p><b>Message: </b>${data.message}</p>`
  };
}

export const sendContact = async(req: Request, res: Response) => {
  // console.log("Request:\n" + req)
  console.log(req.body);
  await smtpTransport.sendMail(mailData(req.body as Formdata), function (err: any, info: any) {
    if (err) {
      console.log('ERROR details:');
      console.log(err);
      return res.json(err).send(401);
    } else {
      console.log('SUCCESS details:');
      console.log(info);
      return res.json(info).send(201);
    }
  });
};
