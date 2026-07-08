import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import studio from "@/assets/studio-atmosphere.jpg";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact • Goblin Studios" },
      { name: "description", content: "Tell us what you're building. Goblin Studios responds personally within 48 hours." },
      { property: "og:title", content: "Contact • Goblin Studios" },
      { property: "og:description", content: "Tell us what you're building." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 -z-10 opacity-25">
          <img src={studio} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>

        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//TRANSMIT">SIGNAL OPEN · 24/7</SectionLabel>
          <h1 className="max-w-5xl font-display text-5xl leading-[0.9] tracking-wide md:text-[8rem]">
            TELL US WHAT <br /><span className="text-plasma glow-text">YOU'RE BUILDING.</span>
          </h1>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto grid max-w-[1500px] gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-10">
          <div className="space-y-10">
            <div>
              <h3 className="mb-3 font-mono text-[11px] tracking-[0.3em] text-plasma">◢ DIRECT CHANNELS</h3>
              <ul className="space-y-2 font-display text-2xl tracking-wide">
                <li>contact@goblinstudios.com.br</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-mono text-[11px] tracking-[0.3em] text-plasma">◢ ETA</h3>
              <p className="text-muted-foreground">
                Personal response within <span className="text-foreground">48 hours</span>.
                Founder reviews every inbound.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-mono text-[11px] tracking-[0.3em] text-plasma">◢ STATUS</h3>
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-plasma opacity-70" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-plasma" />
                </span>
                <span className="font-mono text-sm tracking-wider text-foreground">
                  ACCEPTING NEW PROJECTS · Q1 2026
                </span>
              </div>
            </div>

            <div className="hud-frame p-6">
              <p className="font-display text-2xl leading-tight tracking-wide">
                "We don't pitch. <br /><span className="text-plasma">We listen, then we build.</span>"
              </p>
              <p className="mt-3 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                — RAFA ONGARO, OPERATIONS DIRECTOR
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageLayout>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      type: formData.get("type"),
      budget: formData.get("budget"),
      message: formData.get("message"),
      turnstileToken,
    };

    try {
      const response = await fetch("https://goblins-site.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Failed to send contact form:", error);
      setStatus("error");
    }
  }

  return (
    <form className="hud-frame relative space-y-5 p-8 clip-cut" onSubmit={handleSubmit}>
      <div className="absolute -top-3 left-6 bg-background px-2 font-mono text-[10px] tracking-[0.3em] text-plasma">
        TRANSMISSION.FORM
      </div>

      <Field label="NAME" name="name" placeholder="Your name" />
      <Field label="COMPANY" name="company" placeholder="Studio / company" />
      <Field label="EMAIL" name="email" placeholder="your@email.com" />
      <Field
        label="PROJECT TYPE"
        name="type"
        as="select"
        options={["Full Development", "Co-Development", "Outsourcing", "Just exploring"]}
      />
      <Field
        label="BUDGET RANGE"
        name="budget"
        as="select"
        options={["< $50K", "$50K – $250K", "$250K – $1M", "$1M+"]}
      />
      <Field label="MESSAGE" name="message" as="textarea" placeholder="What are you building?" />

      <Turnstile
        siteKey="0x4AAAAAADyGxsChS1fPW0dk"
        onSuccess={(token) => setTurnstileToken(token)}
        onExpire={() => setTurnstileToken(null)}
      />

      <button type="submit" disabled={status === "loading" || !turnstileToken} className="btn-plasma w-full justify-center disabled:opacity-50">
        {status === "loading" ? "TRANSMITTING…" : "TRANSMIT SIGNAL"} <span>↗</span>
      </button>

      {status === "success" && (
        <p className="text-center font-mono text-xs tracking-widest text-plasma">
          ◢ SIGNAL RECEIVED. WE'LL BE IN TOUCH.
        </p>
      )}
      {status === "error" && (
        <p className="text-center font-mono text-xs tracking-widest text-red-400">
          ◢ TRANSMISSION FAILED. TRY AGAIN OR EMAIL US DIRECTLY.
        </p>
      )}
    </form>
  );
}

function Field({
  label, name, placeholder, as = "input", options,
}: {
  label: string;
  name: string;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
}) {
  const cls =
    "w-full border border-border/80 bg-background/60 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-plasma focus:outline-none focus:ring-1 focus:ring-plasma/40";
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] tracking-[0.3em] text-plasma">
        ◢ {label}
      </span>
      {as === "input" && <input name={name} placeholder={placeholder} className={cls} />}
      {as === "textarea" && <textarea name={name} rows={4} placeholder={placeholder} className={cls} />}
      {as === "select" && (
        <select name={name} className={cls} defaultValue="">
          <option value="" disabled>— select —</option>
          {options?.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      )}
    </label>
  );
}