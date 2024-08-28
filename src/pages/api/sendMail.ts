import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import "dotenv/config";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // You can use other services like SendGrid, Mailgun, etc.
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Define the email options
  try {
    const mailOptions = {
      from: "mmorganti86sender@gmail.com",
      to: process.env.GMAIL_TO,
      subject: `New message from the portfolio - ${email}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ status: "success" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ status: "error", error }), {
      status: 500,
    });
  }
};
