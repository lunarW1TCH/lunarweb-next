import { type NextRequest, NextResponse } from 'next/server';
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

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const mailData = body as MailData;

  const emailIsValid = validator.isEmail(mailData.email);
  const titleIsValid = !validator.isEmpty(mailData.title);
  const messageIsValid = !validator.isEmpty(mailData.message);

  if (!emailIsValid || !titleIsValid || !messageIsValid) {
    return NextResponse.json({ message: 'Incorrect data' });
  }

  const mailOptions = {
    from: MAIL_FROM,
    to: MAIL_TO,
    subject: mailData.title,
    text: `From: ${mailData.email},
        ${mailData.message}
        `,
  };

  const result = await transporter.sendMail(mailOptions);

  if (result.rejected) {
    return NextResponse.json({ message: 'Sending mail failed!' });
  } else {
    return NextResponse.json({ mailData });
  }
};
