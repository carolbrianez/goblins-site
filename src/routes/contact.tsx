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
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateField(name: string, value: string): string | undefined {
    const trimmed = value.trim();

    switch (name) {
      case "name":
        if (!trimmed) return "Tell us your name.";
        if (trimmed.length < 2) return "That name looks too short.";
        return undefined;

      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!trimmed) return "Email is required.";
        if (!emailRegex.test(trimmed)) return "That email doesn't look valid.";
        return undefined;
      }

      case "type":
        if (!trimmed) return "Pick a project type.";
        return undefined;

      case "budget":
        if (!trimmed) return "Pick a budget range.";
        return undefined;

      case "message":
        if (!trimmed) return "Tell us a bit about the project.";
        if (trimmed.length < 10) return "A little more detail helps us respond well.";
        return undefined;

      default:
        return undefined;
    }
  }

  function validateAll(payload: Record<string, FormDataEntryValue | null>) {
    const newErrors: Record<string, string> = {};
    for (const key of ["name", "email", "type", "budget", "message"]) {
      const message = validateField(key, String(payload[key] ?? ""));
      if (message) newErrors[key] = message;
    }
    return newErrors;
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    const message = validateField(name, value);
    setErrors((prev) => {
      if (!message) {
        // valid now — drop any existing error for this field
        const { [name]: _dropped, ...rest } = prev;
        return rest;
      }
      return { ...prev, [name]: message };
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    if (!errors[name]) return;
    const message = validateField(name, value);
    if (!message) {
      setErrors((prev) => {
        const { [name]: _dropped, ...rest } = prev;
        return rest;
      });
    }
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      type: formData.get("type"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    const validationErrors = validateAll(payload);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const response = await fetch("https://goblins-site.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, turnstileToken }),
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

      <Field label="NAME" name="name" placeholder="Your name" error={errors.name} onBlur={handleBlur} onChange={handleChange} />
      <Field label="COMPANY" name="company" placeholder="Studio / company" />
      <Field label="EMAIL" name="email" placeholder="your@email.com" error={errors.email} onBlur={handleBlur} onChange={handleChange} />
      <Field
        label="PROJECT TYPE"
        name="type"
        as="select"
        options={["Full Development", "Co-Development", "Outsourcing", "Just exploring"]}
        error={errors.type}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <Field
        label="BUDGET RANGE"
        name="budget"
        as="select"
        options={["< $50K", "$50K – $250K", "$250K – $1M", "$1M+"]}
        error={errors.budget}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <Field label="MESSAGE" name="message" as="textarea" placeholder="What are you building?" error={errors.message} onBlur={handleBlur} onChange={handleChange} />

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
  label, name, placeholder, as = "input", options, error, onBlur, onChange,
}: {
  label: string;
  name: string;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
  error?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}) {
  const cls = `w-full border bg-background/60 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 ${
    error
      ? "border-red-400 focus:border-red-400 focus:ring-red-400/40"
      : "border-border/80 focus:border-plasma focus:ring-plasma/40"
  }`;
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] tracking-[0.3em] text-plasma">
        ◢ {label}
      </span>
      {as === "input" && (
        <input name={name} placeholder={placeholder} className={cls} onBlur={onBlur} onChange={onChange} />
      )}
      {as === "textarea" && (
        <textarea name={name} rows={4} placeholder={placeholder} className={cls} onBlur={onBlur} onChange={onChange} />
      )}
      {as === "select" && (
        <select name={name} className={cls} defaultValue="" onBlur={onBlur} onChange={onChange}>
          <option value="" disabled>— select —</option>
          {options?.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      )}
      {error && (
        <span className="mt-1.5 block font-mono text-[10px] tracking-wider text-red-400">
          ◢ {error}
        </span>
      )}
    </label>
  );
}