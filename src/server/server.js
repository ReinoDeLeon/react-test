const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.post('/send', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'tu-email@gmail.com',
      pass: 'tu-password'
    }
  });

  const mailOptions = {
    from: req.body.email,
    to: 'destinatario@gmail.com',
    subject: 'Formulario de contacto',
    text: req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.send('éxito');
    }
  });
});

app.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3001');
});
