import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, turnstileToken } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email is required" });
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
    const { data, error } = await resend.contacts.create({
      email,
      firstName: name || undefined,
    });

    if (error) {
      const isDuplicate = error.message?.toLowerCase().includes("already exists");

      if (isDuplicate) {
        return res.status(200).json({ success: true, alreadyRegistered: true });
      }

      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    return res.status(500).json({ error: "Failed to process signup" });
  }
}