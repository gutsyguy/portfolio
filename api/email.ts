// api/email.js

import SparkPost from 'sparkpost';

const emailHandler = async (req, res) => {
  const client = new SparkPost('776ff931efa1a2122c15826435413cef1078890d');
  const data = JSON.parse(req.body);
  const { email, message } = data;

  client.transmissions
    .send({
      content: {
        from: 'yalambersubba13@gmail.com',
        subject: 'email',
        html: `<html><body><p>${message}</p><p> -- Yalamber</p></body></html>`,
      },
      recipients: [{ address: email }],
    })
    .then(() => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: null }));
    })
    .catch(() => {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'error sending email' }));
    });
};

export default emailHandler;
