import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

type MailType = {
  to: string;
  text: string;
};

export const nodeMailer = async ({ to, text }: MailType) => {
  await transporter.sendMail({
    from: "<etuul186@gmail.com>",
    to: to,
    subject: "Хөдөө гарья вэб сайт",
    text: text,
    html: "<b>Hello world?</b>",
  });
};
