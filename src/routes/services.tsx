import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import studio from "@/assets/studio-atmosphere.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Goblin Studios" },
      { name: "description", content: "Full Development, Co-Development and Outsourcing for Unreal Engine games. AAA fidelity, indie velocity." },
      { property: "og:title", content: "Services — Goblin Studios" },
      { property: "og:description", content: "Full Dev, Co-Dev and Outsourcing for ambitious games." },
    ],
  }),
  component: ServicesPage,
});

const PILLARS = [
  {
    id: "01",
    title: "FULL DEVELOPMENT",
    sub: "End-to-end. We own it.",
    body: "We assemble the team, run production, ship the game. From original IP to publisher-funded titles, you get a single accountable studio with senior leads at every discipline.",
    bullets: [
      "Vision lock & creative direction",
      "Vertical slice in 12–16 weeks",
      "Full production team (art, code, design, audio)",
      "Console & PC ship support",
    ],
  },
  {
    id: "02",
    title: "CO-DEVELOPMENT",
    sub: "Strike force. Embedded.",
    body: "Plug a senior crew directly into your studio. We respect your culture, ship inside your pipelines, and behave like full-time team members — because for the duration of the project, that's exactly what we are.",
    bullets: [
      "Embedded leads & specialists",
      "Pipeline integration (Perforce, Jira, etc.)",
      "Sprint-by-sprint accountability",
      "Scale up or down without friction",
    ],
  },
  {
    id: "03",
    title: "OUTSOURCE",
    sub: "Per-task. AAA fidelity.",
    body: "Discrete deliverables — concept art, characters, environments, animation, VFX, cinematics, gameplay systems. Senior reviews, clear milestones, no surprises.",
    bullets: [
      "Per-asset or per-vertical scoping",
      "Art tests on the house (within reason)",
      "Daily / weekly review cadence",
      "Source files always delivered",
    ],
  },
];

const DISCIPLINES = [
  ["CONCEPT ART", "Worlds, characters, props, key art."],
  ["CHARACTERS", "Hero, NPC, creature. Sculpt to rig."],
  ["ENVIRONMENTS", "Stylized, realistic, hybrid."],
  ["HARD SURFACE", "Vehicles, weapons, mechs, props."],
  ["ANIMATION", "Combat, locomotion, cinematic."],
  ["VFX", "Niagara, shaders, particles, sims."],
  ["GAMEPLAY PROGRAMMING", "Systems, AI, combat, multiplayer."],
  ["TECHNICAL ART", "Shaders, tools, optimization."],
  ["CINEMATICS", "Trailers, in-engine, reveal."],
  ["UNREAL ENGINE DEV", "Engine-level, plugins, custom tools."],
];

function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-24">
        <div className="absolute inset-0 -z-10 opacity-30">
          <img src={studio} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        </div>
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//SERVICES">CAPABILITIES MATRIX</SectionLabel>
          <h1 className="max-w-5xl font-display text-6xl leading-[0.9] tracking-wide md:text-[9rem]">
            WEAPONS <br />
            <span className="text-plasma glow-text">OF CHOICE.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Three engagement models. Ten disciplines. One standard: AAA fidelity delivered
            with the speed and care only an indie-scale crew can pull off.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative">
        {PILLARS.map((p, i) => (
          <div
            key={p.id}
            className={`relative border-t border-border/60 py-24 ${i % 2 ? "bg-surface/40" : ""}`}
          >
            <div className="mx-auto grid max-w-[1500px] gap-12 px-6 lg:grid-cols-[1fr_2fr] lg:px-10">
              <div>
                <span className="font-mono text-[11px] tracking-[0.3em] text-plasma">PILLAR //{p.id}</span>
                <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-wide md:text-7xl">
                  {p.title}
                </h2>
                <p className="mt-4 font-mono text-xs tracking-[0.18em] text-plasma">{p.sub}</p>
              </div>
              <div className="grid gap-8">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{p.body}</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3 border-l-2 border-plasma/60 pl-4 text-sm text-foreground">
                      <span className="font-mono text-[10px] text-plasma">▶</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Disciplines grid */}
      <section className="relative border-t border-border/60 py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//STACK">DISCIPLINES</SectionLabel>
          <h2 className="font-display text-5xl tracking-wide md:text-7xl">
            THE <span className="text-plasma">CREW</span>.
          </h2>
          <div className="mt-16 grid gap-px border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-5">
            {DISCIPLINES.map(([t, b], i) => (
              <div key={t} className="group bg-background p-6 hover:bg-surface">
                <div className="mb-4 font-mono text-[10px] tracking-[0.3em] text-plasma">
                  //{String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg tracking-wide">{t}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 py-24 text-center">
        <h3 className="font-display text-4xl tracking-wide md:text-6xl">
          PICK YOUR <span className="text-plasma glow-text">WEAPON.</span>
        </h3>
        <div className="mt-8">
          <Link to="/contact" className="btn-plasma">START A PROJECT →</Link>
        </div>
      </section>
    </PageLayout>
  );
}
