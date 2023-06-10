// api/email.js
import SparkPost from 'sparkpost';
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import cors from 'cors';

const corsMiddleware = cors();

export async function POST(req: any, res: any) {
  const SENDGRID_API_KEY = "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";
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


// export async function POST(req:any, res:any){
//   const client = new SparkPost('776ff931efa1a2122c15826435413cef1078890d');

//   try {
//     const { email, message } = req.body;

//     await client.transmissions.send({
//       content: {
//         from: 'yalambersubba13@gmail.com',
//         returnPath: 'yalambersubba13@gmail.com',
//         subject: 'email',
//         html: `<html><body><p>${message}</p><p> -- Yalamber</p></body></html>`,
//       },
//       recipients: [{ address: email }],
//     });

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ error: null }));

//   } catch (error) {
//     console.log(error);
//     res.statusCode = 500;
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ error: 'error sending email' }));

//   }

// }
