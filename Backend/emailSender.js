const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/teste", (req, res) => {
  const { name, email, whatsapp, company } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "reciclaue@gmail.com",
      pass: "dpmr zgzb ougr rtud",
    },
  });
  
  

  const mailOptions = {
    from: "noreply@reciclaue.com",
    to: "reciclaue@gmail.com",
    subject: "Novo contato recebido",
    text: `
      Nome: ${name}
      Email: ${email}
      WhatsApp: ${whatsapp}
      Tipo de Empresa: ${company}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: error.toString() });
    }
    res.status(200).send({ success: true, message: "Email enviado com sucesso!" });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
