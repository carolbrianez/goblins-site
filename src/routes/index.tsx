import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import teamTony from "@/assets/team-tony.png";
import teamChris from "@/assets/team-chris.png";
import teamSakaguti from "@/assets/team-sakaguti.png";
import teamTanaka from "@/assets/team-tanaka.png";
import teamRafa from "@/assets/team-rafa.png";
import heroImg from "@/assets/hero-cinematic.jpg";
import everlenImg from "@/assets/everlen-key-art.jpg";
import chamadoImg from "@/assets/chamado-key-art.jpg";
import studioImg from "@/assets/studio-atmosphere.jpg";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goblin Studios - AAA Power. Indie Soul." },
      { name: "description", content: "Premium game development studio. Full dev, co-dev and outsourcing for ambitious indie and AA games. Unreal Engine specialists." },
      { property: "og:title", content: "Goblin Studios - AAA Power. Indie Soul." },
      { property: "og:description", content: "Full development, co-development and outsourcing for ambitious indie and AA games." },
      { property: "og:image", content: "/assets/hero-cinematic.jpg" },
    ],
  }),
  component: Home,
});

const AAA_LOGOS = ["EA", "UBISOFT", "WARNER", "2K", "ACTIVISION", "BANDAI"];

function Home() {
  return (
    <PageLayout>
      <Hero />
      <AAAExperience />
      <FeaturedWork />
      <FeaturedServices />
      <Services />
      <OriginalIPs />
      <WhyGoblin />
      <Pipeline />
      <FinalCTA />
    </PageLayout>
  );
}

/* ============== HERO ============== */
function Hero() {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setFrame((f) => (f + 1) % 9999), 80);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[760px] w-full overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full scale-110 object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" />
        <div className="absolute inset-0 vignette opacity-5" />
        <div className="absolute inset-0 grid-bg opacity-5" />
      </div>

      {/* HUD top bar */}
      <div className="absolute inset-x-0 top-24 z-20 mx-auto flex max-w-[1500px] items-center justify-between px-6 lg:px-10">
        <div className="font-mono text-[10px] tracking-[0.32em] text-plasma/80">
          ◢ REEL.LOOP.{String(frame).padStart(4, "0")}
        </div>
        <div className="hidden gap-6 font-mono text-[10px] tracking-[0.32em] text-muted-foreground sm:flex">
          <span>FPS: 60</span>
          <span>BUILD: 4.20.1</span>
          <span className="text-plasma">REC ●</span>
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-6 pb-32 lg:px-10 lg:pb-40">
        <div className="max-w-5xl reveal">
          <SectionLabel index="//01">EST. SÃO PAULO · GLOBAL OPS</SectionLabel>

          <h1 className="font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.85] tracking-[0.01em] text-foreground">
            <span className="block glow-text">AAA Power.</span>
            <span className="glitch block text-stroke" data-text="INDIE SOUL.">
              Indie Soul.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Full development, co-development, and outsource for ambitious indie and AA games. We are a multidisciplinary studio of industry veterans, blending artistic excellence and cutting-edge technical engineering to accelerate and bring your project to life.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-plasma">
              WORK WITH US <span aria-hidden>→</span>
            </Link>
            <Link to="/everlen" className="btn-ghost">
              EXPLORE OUR WORLDS
            </Link>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.4em] text-plasma/80">
        <span>SCROLL</span>
        <span className="h-10 w-px animate-pulse bg-plasma" />
      </div>
    </section>
  );
}

/* ============== AAA EXPERIENCE ============== */
function AAAExperience() {
  return (
    <section className="relative border-y border-border/60 bg-surface/40 py-24">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-end">
          <div>
            <SectionLabel index="//02">PEDIGREE</SectionLabel>
            <h2 className="font-display text-5xl leading-[0.95] tracking-wide text-foreground md:text-6xl">
              EXPERIENCE FORGED <br />
              IN <span className="text-plasma glow-text">AAA</span> PRODUCTION.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Our team members contributed to projects connected to the world's most recognized publishers. We absorbed the discipline of those massive pipelines and refined it, shaping our own methodology for studios that actually want to ship something <em>worth playing</em>.
          </p>
        </div>

        <div className="relative mt-16 overflow-hidden">
          {/* Linha 1 — esquerda */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
            style={{ maxHeight: "90px", objectFit: "cover" }}
          >
            <source
              src="/videos/logos-left.mp4"
              type="video/mp4"
            />
          </video>

          {/* Linha 2 — direita (reverso) */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="mt-4 w-full"
            style={{ maxHeight: "90px", objectFit: "cover" }}
          >
            <source
              src="/videos/logos-right.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <p className="mt-6 max-w-2xl font-mono text-[11px] leading-relaxed tracking-wider text-muted-foreground/70">
          * Team members' prior contributions on third-party projects. All trademarks property of their respective owners. We don't fake credits, we earn them.
        </p>
      </div>
    </section>
  );
}

/* ============== SERVICES ============== */
const SERVICE_DETAILS = [
  "Concept Art", "Characters", "Environments", "Hard Surface",
  "Animation", "VFX", "Gameplay Programming", "Technical Art",
  "Cinematics", "Unreal Engine Dev",
];

const SERVICES = [
  {
    id: "01",
    title: "FULL DEVELOPMENT",
    tagline: "We build games from the ground up.",
    body: "From a single line of pitch to a shipped title. We assemble the team, own the pipeline, and execute end to end.",
  },
  {
    id: "02",
    title: "CO-DEVELOPMENT",
    tagline: "Your team. Reinforced.",
    body: "We plug into your studio like a technical and strategic strike force. We have the synergy, communication, and technical expertise required to run in perfect alignment with your internal team toward the same goal, the game.",
  },
  {
    id: "03",
    title: "OUTSOURCE",
    tagline: "AAA execution. Indie-aware production.",
    body: "On-demand by specific tasks or major milestones. 3D modeling, concept art, animation, VFX, gameplay, and tech art delivered at pinnacle fidelity without the corporate bureaucracy.",
  },
] as const;

function Services() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="flex flex-col gap-4">
          <SectionLabel index="//05">WHAT WE DO</SectionLabel>
          <h2 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-wide md:text-7xl">
            THREE WEAPONS. <br />
            <span className="text-plasma glow-text">ONE OBSESSION.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="group relative overflow-hidden border border-border/60 bg-surface/40 p-8 transition-all duration-500 hover:border-plasma hover:bg-surface clip-cut hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-plasma to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                //{s.id}
              </div>

              <h3 className="font-display text-3xl leading-tight tracking-wide text-foreground md:text-4xl">
                {s.title}
              </h3>
              <p className="mt-3 font-mono text-xs tracking-[0.18em] text-plasma">
                {s.tagline}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>

              <div className="mt-8 border-t border-border/40 pt-6">
                <div className="mb-3 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                  CAPABILITIES
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {SERVICE_DETAILS.map((d) => (
                    <li
                      key={d}
                      className="border border-border/60 px-2 py-1 font-mono text-[10px] tracking-wider text-muted-foreground transition-colors group-hover:border-plasma/40 group-hover:text-foreground"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-ghost">DEEP DIVE INTO SERVICES →</Link>
        </div>
      </div>
    </section>
  );
}

/* ============== ORIGINAL IPs ============== */
function OriginalIPs() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="flex flex-col gap-4">
          <SectionLabel index="//06">ORIGINAL IPs</SectionLabel>
          <h2 className="max-w-5xl font-display text-5xl leading-[0.95] tracking-wide md:text-7xl">
            WE DON'T JUST SUPPORT GAMES. <br />
            <span className="text-plasma glow-text">WE CREATE THEM.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <IPCard
            tag="DARK FANTASY · AAA-LIKE"
            title="EVERLEN"
            body="A blood-soaked dark fantasy world where forgotten gods bleed into the cracks of the empire. Built in Unreal Engine 5."
            img={everlenImg}
            href="/everlen"
            accent="text-plasma"
          />
          <IPCard
            tag="VR · HUMANITARIAN"
            title="BOOKATOON"
            body="An emotionally crafted VR experience for children undergoing pediatric oncology treatment - in partnership with Hospital do Amor."
            img={chamadoImg}
            href="/chamado"
            accent="text-holo"
          />
        </div>
      </div>
    </section>
  );
}

function IPCard({
  tag, title, body, img, href, accent,
}: { tag: string; title: string; body: string; img: string; href: string; accent: string }) {
  return (
    <Link to={href} className="group relative block overflow-hidden border border-border/60 clip-cut">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt={title}
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay scan-sweep" />

        <div className="absolute left-4 top-4 hud-corners p-2 font-mono text-[10px] tracking-[0.3em] text-plasma">
          REC ● {tag}
        </div>
      </div>

      <div className="relative bg-surface/60 p-8">
        <h3 className={`font-display text-5xl tracking-wide md:text-6xl ${accent} transition-all duration-500 group-hover:tracking-[0.05em]`}>
          {title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] text-foreground transition-all group-hover:text-plasma group-hover:gap-4">
          ENTER WORLD <span>→</span>
        </div>
      </div>
    </Link>
  );
}

/* ============== WHY GOBLIN ============== */
const WHY = [
  ["AAA EXPERIENCE", "Veteran professionals with a track record of delivering on the industry's biggest projects, operating with agility and zero bureaucratic drag."],
  ["INDIE-AWARE PRODUCTION", "We utilize agile production frameworks to guarantee steady delivery, optimizing development time so every single cent of your budget converts into real progress."],
  ["UNREAL ENGINE EXPERTISE", "Specialists from gameplay to cinematics, tech art to render pipelines."],
  ["ARTISTIC OBSESSION", "Frame-by-frame quality control. Concept art and assets that maintain maximum visual fidelity from start to finish."],
  ["FOUNDER-LED PRODUCTION", "You talk to the people doing the work. No account-manager telephone games."],
  ["FLEXIBLE PIPELINES", "Hybrid, embedded, or full delivery. We mold the team around your project."],
  ["GLOBAL AMBITION", "Time zones don't scare us. The game is the only deadline that matters."],
  ["TRANSPARENCY & ALIGNED SCOPE", "We work with clear and precise processes. Honest scopes, realistic art tests, and transparent budgets, because we’d rather lose a deal than promise something that isn't viable."],
];

function WhyGoblin() {
  return (
    <section className="relative border-y border-border/60 bg-surface/30 py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-4">
          <SectionLabel index="//07">OUR SERVICES DETAILED</SectionLabel>
          <h2 className="font-display text-6xl leading-[0.9] tracking-wide md:text-8xl">
            BUILT <span className="text-plasma glow-text">DIFFERENT.</span>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-4">
          {WHY.map(([title, body], i) => (
            <div key={title} className="group relative bg-background p-8 transition-colors hover:bg-surface">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.3em] text-plasma">
                  //{String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-plasma transition-all group-hover:w-16" />
              </div>
              <h3 className="font-display text-xl leading-tight tracking-wide text-foreground">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FOUNDERS = [
  { name: "Tony Cruz", role: "10 years of professional experience developing and directing game projects using Unreal Engine", img: teamTony },
  { name: "Chris Silva", role: "10 years of experience as an artist and 4 years in art direction", img: teamChris },
  { name: "Matheus Sakaguti", role: "Marketing director, concept artist and graphic designer with 8 years of experience", img: teamSakaguti },
  { name: "Vitor Tanaka", role: "8 years of experience in audiovisual and film production", img: teamTanaka },
  { name: "Rafael Ongaro", role: "Responsible for Goblin's financial and legal operations for the last 4 years", img: teamRafa },
];

function Pipeline() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="mb-16 grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-end">
          <div>
            <SectionLabel index="//08">WE ARE</SectionLabel>
            <h2 className="font-display text-5xl leading-[0.95] tracking-wide md:text-7xl">
              THE <span className="text-plasma">FOUNDERS.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            The crew behind the craft. Senior leads across every discipline —
            forged in AAA pipelines, built for indie velocity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {FOUNDERS.map((f, i) => (
            <div key={f.name} className="group relative">
              <div className="hud-frame relative overflow-hidden clip-cut transition-all hover:-translate-y-1 hover:border-plasma">
                <div className="absolute -top-3 left-4 z-10 bg-background px-2 font-mono text-[10px] tracking-[0.3em] text-plasma">
                  //{String(i + 1).padStart(2, "0")}
                </div>
                <img
                  src={f.img}
                  alt={f.name}
                  className="h-64 w-full object-cover object-top grayscale transition-all group-hover:grayscale-0"
                />
                <div className="p-4">
                  <h3 className="font-display text-base tracking-wider text-foreground">
                    {f.name}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-plasma">
                    {f.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== FEATURED WORK ============== */
function FeaturedWork() {
  const tiles = [
    { img: everlenImg, label: "EVERLEN / KEY ART", tag: "ORIGINAL IP", h: "row-span-2" },
    { img: studioImg, label: "STUDIO / BTS", tag: "INTERNAL" },
    { img: chamadoImg, label: "BOOKATOON / VR", tag: "ORIGINAL IP" },
    { img: heroImg, label: "TRIALFORGE / COMBAT", tag: "CO-DEV", h: "row-span-2" },
    { img: everlenImg, label: "VOID GAMES / FX", tag: "OUTSOURCE" },
    { img: chamadoImg, label: "RED GAMES / CINEMATIC", tag: "OUTSOURCE" },
  ];

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-4">
          <SectionLabel index="//03">SHOWREEL</SectionLabel>
          <h2 className="font-display text-5xl leading-[0.95] tracking-wide md:text-7xl">
            FEATURED <span className="text-plasma glow-text">WORK.</span>
          </h2>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">
          {tiles.map((t, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden border border-border/60 clip-cut ${t.h ?? ""}`}
            >
              <img
                src={t.img}
                alt={t.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <div className="font-mono text-[10px] tracking-[0.3em] text-plasma">{t.tag}</div>
                <div className="font-display text-lg tracking-wide text-foreground">{t.label}</div>
              </figcaption>
              <div className="absolute right-3 top-3 h-2 w-2 bg-plasma animate-pulse" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== FEATURED SERVICES ============== */
function FeaturedServices() {
  const tiles = [
    { img: everlenImg, label: "3D ART & CHARACTERS", tag: "CONCEPT ART" },
    { img: studioImg, label: "UNREAL DEVELOPMENT", tag: "GAMEPLAY PROGRAMMING" },
    { img: chamadoImg, label: "ANIMATION & VFX", tag: "TECHNICAL ART" },
    { img: heroImg, label: "CINEMATICS & TRAILERS", tag: "IN-ENGINE" },
    { img: everlenImg, label: "ENVIRONMENTS", tag: "HARD SURFACE" },
    { img: chamadoImg, label: "MARKETING ART", tag: "KEY VISUALS" },
    { img: studioImg, label: "CHARACTER DESIGN", tag: "DIGITAL HUMANS" },
    { img: heroImg, label: "VFX & SHADERS", tag: "NIAGARA" },
  ];

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-4">
          <SectionLabel index="//05">CAPABILITIES</SectionLabel>
          <h2 className="font-display text-5xl leading-[0.95] tracking-wide md:text-7xl">
            FEATURED <span className="text-plasma glow-text">SERVICES.</span>
          </h2>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">
          {tiles.map((t, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden border border-border/60 clip-cut ${t.h ?? ""}`}
            >
              <img
                src={t.img}
                alt={t.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <div className="font-mono text-[10px] tracking-[0.3em] text-plasma">{t.tag}</div>
                <div className="font-display text-lg tracking-wide text-foreground">{t.label}</div>
              </figcaption>
              <div className="absolute right-3 top-3 h-2 w-2 bg-plasma animate-pulse" />
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-ghost">SEE ALL SERVICES →</Link>
        </div>
      </div>
    </section>
  );
}

/* ============== FINAL CTA ============== */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="h-full w-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background" />
        <div className="absolute inset-0 grid-bg opacity-50" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10 text-center">
        <SectionLabel index="//09">SIGNAL OPEN</SectionLabel>
        <h2 className="font-display text-5xl leading-[0.9] tracking-wide md:text-8xl">
          LET'S BUILD <br />
          SOMETHING <br />
          <span className="text-plasma glow-text">UNFORGETTABLE.</span>
        </h2>
        <p className="mt-8 mx-auto max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          Talk directly to the people who solve problems. We analyze your project and get back to you within 48 hours, focusing immediately on your scope with no unnecessary meetings.
        </p>
        <div className="mt-10">
          <Link to="/contact" className="btn-plasma">
            START A PROJECT <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}