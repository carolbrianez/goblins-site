import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactFormEmail from "../emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Permite chamadas do domínio do site (CORS)
  res.setHeader("Access-Control-Allow-Origin", "https://www.goblinstudios.com.br");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Navegadores mandam um "OPTIONS" antes do POST de verdade, pra checar CORS
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, company, email, type, budget, message } = req.body;

  // 2. Validação básica
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const html = await render(
      ContactFormEmail({ name, company, email, type, budget, message })
    );

    await resend.emails.send({
      from: "Goblin Studios <contact@goblinstudios.com.br>",
      to: "contact@goblinstudios.com.br",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}