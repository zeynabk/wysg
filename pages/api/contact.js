require('dotenv').config()
const PASSWORD = process.env.password

export default function handler(req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'akhad5100@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: 'akhad5100@gmail.com',
    to: 'akhad0015@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  }
  transporter.sendMail(mailData, function (err, info) {
    // if (err) console.log(err)
    // else console.log(info)
  })
  res.status(200).send('Message Sent')
}
