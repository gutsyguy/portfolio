// api/email.js
import SparkPost from 'sparkpost';
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import cors from 'cors';

const corsMiddleware = cors();

export async function POST(req: any, res: any) {
  const SENDGRID_API_KEY = process.env.api
  const { email, message } = req.body;

  const data = {
    personalizations: [
      {
        to: [{ email: 'yalambersubba13@gmail.com' }],
        subject: `${email}`,
        message: `${message}`,
      },
    ],
    from: { email: 'yalambersubba13@gmail.com' },
    content: [{ type: 'text/plain', value: 'message body' }],
  };

  try {
    await corsMiddleware(req, res); // Apply CORS middleware

    const response = await axios.post(
      'https://api.sendgrid.com/v3/mail/send',
      data,
      {
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
        },
      }
    );

    res.status(200).json({ error: null });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'error sending email' });
  }
}


