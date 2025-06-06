import nodemailer from "nodemailer";

export const nodemailerTransporter = nodemailer.createTransport({
  service: "gmail", // this handles host and port automatically
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});
