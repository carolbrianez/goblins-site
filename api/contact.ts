import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { createElement } from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);

const styles = {
  main: {
    backgroundColor: "#0a0a0a",
    fontFamily: "'Segoe UI', Arial, sans-serif",
  },
  container: {
    margin: "0 auto",
    padding: "40px 32px",
    maxWidth: "560px",
  },
  logo: {
    marginBottom: "24px",
    borderRadius: "999px",
  },
  eyebrow: {
    color: "#3DF62D",
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: "11px",
    letterSpacing: "3px",
    fontWeight: "700" as const,
    margin: "0 0 12px",
  },
  heading: {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "800" as const,
    letterSpacing: "0.5px",
    margin: "0 0 8px",
  },
  subtext: {
    color: "#9a9a9a",
    fontSize: "14px",
    lineHeight: "22px",
    margin: "0",
  },
  hr: {
    borderColor: "#262626",
    margin: "28px 0",
  },
  label: {
    color: "#3DF62D",
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: "10px",
    letterSpacing: "2px",
    fontWeight: "700" as const,
    margin: "0 0 4px",
  },
  value: {
    color: "#ffffff",
    fontSize: "15px",
    lineHeight: "22px",
    margin: "0",
  },
  footer: {
    color: "#5a5a5a",
    fontFamily: "'Segoe UI', Arial, sans-serif",
    fontSize: "10px",
    letterSpacing: "2px",
    textAlign: "center" as const,
  },
};

interface ContactFormEmailProps {
  name: string;
  company: string;
  email: string;
  type: string;
  budget: string;
  message: string;
}

function row(label: string, value: string) {
  return createElement(
    Section,
    { style: { marginBottom: "18px" } },
    createElement(Text, { style: styles.label }, `◢ ${label}`),
    createElement(Text, { style: styles.value }, value)
  );
}

function ContactFormEmail({ name, company, email, type, budget, message }: ContactFormEmailProps) {
  return createElement(
    Html,
    null,
    createElement(Head, null),
    createElement(Preview, null, `New signal from ${name}`),
    createElement(
      Body,
      { style: styles.main },
      createElement(
        Container,
        { style: styles.container },
        createElement(Img, {
          src: "https://www.goblinstudios.com.br/goblin-logo.png",
          width: "56",
          height: "56",
          alt: "Goblin Studios",
          style: styles.logo,
        }),
        createElement(Text, { style: styles.eyebrow }, "◢ TRANSMISSION.RECEIVED"),
        createElement(Text, { style: styles.heading }, "New Project Inquiry"),
        createElement(
          Text,
          { style: styles.subtext },
          "A new signal came through the Goblin Studios contact form."
        ),
        createElement(Hr, { style: styles.hr }),
        row("NAME", name),
        row("COMPANY", company || "—"),
        row("EMAIL", email),
        row("PROJECT TYPE", type),
        row("BUDGET RANGE", budget),
        row("MESSAGE", message),
        createElement(Hr, { style: styles.hr }),
        createElement(Text, { style: styles.footer }, "GOBLIN STUDIOS · SÃO PAULO, BR")
      )
    )
  );
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const allowedOrigins = [
    "https://www.goblinstudios.com.br",
    "http://localhost:8080",
  ];
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, company, email, type, budget, message, turnstileToken } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!turnstileToken) {
    return res.status(400).json({ error: "Missing captcha token" });
  }

  const turnstileVerify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
    }),
  });

  const turnstileResult = await turnstileVerify.json();

  if (!turnstileResult.success) {
    console.error("Turnstile verification failed:", turnstileResult);
    return res.status(403).json({ error: "Captcha verification failed" });
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