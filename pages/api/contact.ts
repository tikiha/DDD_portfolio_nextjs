import nodemailer from "nodemailer";

export default async function ConatactAPI(req, res) {
  const { name, email, message } = req.body;

  const data = {
    name,
    email,
    message,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  console.log(process.env.GMAILUSER);

  const toHostMailData = {
    // from: "tiki1212hj@gmail.com",
    to: "yskhj0316@gmail.com",
    subject: `[お問い合わせ] ${name}`,
    text: `${message} Send From ${email}`,
    html: `
      <p>[名前]</p>
      <p>${name}</p>
      <p>[メッセージ内容]</p>
      <p>${message}</p>
      <p>[メールアドレス]</p>
      <p>${email}</p>
    `,
  };

  await transporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  return res.send("成功しました");
}