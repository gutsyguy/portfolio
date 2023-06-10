import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
import cors from 'cors';

const corsHandler = cors();

export default async function ContactApi(req: NextApiRequest, res: NextApiResponse) {
  await corsHandler(req, res); // Apply CORS middleware

  const { name, email, message } = req.body;

  const user = process.env.user;
  const data = {
    name,
    email,
    message
  };

  console.log(name)

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.pass
    }
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: 'yalambersubba13@gmail.com',
      replyTo: email,
      subject: `Form submission from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `
    });
    console.log('Message was sent:', mail.messageId);

    return res.status(200).json({ message: 'success' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Could not send email. Your message was not sent." });
  }
}
