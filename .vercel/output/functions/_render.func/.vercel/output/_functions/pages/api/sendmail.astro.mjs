import nodemailer from 'nodemailer';
import 'dotenv/config';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    // You can use other services like SendGrid, Mailgun, etc.
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
  try {
    const mailOptions = {
      from: "mmorganti86sender@gmail.com",
      to: process.env.GMAIL_TO,
      subject: `New message from the portfolio - ${email}`,
      text: `Nombre: ${name}
Email: ${email}
Mensaje:
${message}`
    };
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ status: "success" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ status: "error", error }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
