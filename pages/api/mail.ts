import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';
import validator from 'validator';

import MailData from '@/interfaces/mail-data';

const MAIL_FROM = process.env.MAIL_FROM as string;
const MAIL_TO = process.env.MAIL_TO as string;
const PASS = process.env.PASS as string;

const transporter = createTransport({
  service: 'outlook',
  port: 465,
  auth: {
    user: MAIL_FROM,
    pass: PASS,
  },
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Not allowed' });
  }

  const mailData = req.body as MailData;

  const emailIsValid = validator.isEmail(mailData.email);
  const titleIsValid = !validator.isEmpty(mailData.title);
  const messageIsValid = !validator.isEmpty(mailData.message);

  if (!emailIsValid || !titleIsValid || !messageIsValid) {
    return res.status(422).json({ message: 'Incorrect data' });
  }

  const mailOptions = {
    from: MAIL_FROM,
    to: MAIL_TO,
    subject: mailData.title,
    text: `From: ${mailData.email},
        ${mailData.message}
        `,
  };

  new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, response) {
      if (error) {
        res.status(500).json({ message: 'Sending mail failed!' });
        reject(error);
      } else {
        res.status(200).json({ mailData });
        resolve('email sent');
      }
    });
  });
}
