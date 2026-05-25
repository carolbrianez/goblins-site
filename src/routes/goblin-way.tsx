import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import studio from "@/assets/studio-atmosphere.jpg";

export const Route = createFileRoute("/goblin-way")({
  head: () => ({
    meta: [
      { title: "The Goblin Way — Goblin Studios Manifesto" },
      { name: "description", content: "The manifesto, founders and culture behind Goblin Studios. We are all artists." },
      { property: "og:title", content: "The Goblin Way — Goblin Studios" },
      { property: "og:description", content: "Our manifesto, founders and culture. We are all artists." },
    ],
  }),
  component: GoblinWayPage,
});

const FOUNDERS = [
  { name: "CHRIS SILVA", role: "CREATIVE DIRECTOR", bio: "Twenty years chasing the same obsession: a frame that makes you stop breathing. AAA art veteran turned founder." },
  { name: "TONY CRUZ", role: "TECHNICAL DIRECTOR", bio: "Engine whisperer. Has shipped Unreal pipelines from indie experiments to AAA console releases. Reads source code for fun." },
  { name: "RAFA ONGARO", role: "OPERATIONS DIRECTOR", bio: "Keeps the war machine running. Producer's instincts, founder's accountability. The reason deadlines exist as suggestions, not enemies." },
];

const MANIFESTO = [
  "We refuse the gap between AAA quality and indie soul.",
  "We treat every brief like an original IP.",
  "Pipelines exist to serve the game. Not the other way around.",
  "Senior reviews everything. Always.",
  "We'd rather lose a deal than ship something we can't be proud of.",
  "Concept art is not decoration. It's the contract.",
  "A bug is a feature failure. A boring level is a moral failure.",
  "We are all artists.",
];

function GoblinWayPage() {
  return (
    <PageLayout>
      <section className="relative pt-40 pb-24">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={studio} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        </div>
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//MANIFESTO">CULTURE · PHILOSOPHY · VISION</SectionLabel>
          <h1 className="max-w-5xl font-display text-6xl leading-[0.88] tracking-wide md:text-[10rem]">
            THE <br />
            <span className="text-plasma glow-text">GOBLIN WAY.</span>
          </h1>
        </div>
      </section>

      {/* Big quote */}
      <section className="border-t border-border/60 py-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <p className="font-display text-4xl leading-[1.05] tracking-wide md:text-7xl">
            WE ARE A <span className="text-plasma">DANGEROUS GROUP</span> OF INSANELY <br />
            TALENTED ARTISTS AND DEVELOPERS BUILDING <br />
            <span className="text-plasma glow-text">UNFORGETTABLE WORLDS.</span>
          </p>
        </div>
      </section>

      {/* Manifesto list */}
      <section className="border-t border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//CODEX">MANIFESTO</SectionLabel>
          <ol className="mt-12 divide-y divide-border/60 border border-border/60">
            {MANIFESTO.map((line, i) => (
              <li key={i} className="group flex items-start gap-6 p-6 transition-colors hover:bg-surface md:p-8">
                <span className="font-mono text-xs tracking-[0.3em] text-plasma">
                  //{String(i + 1).padStart(2, "0")}
                </span>
                <span className={`font-display tracking-wide ${i === MANIFESTO.length - 1 ? "text-3xl text-plasma glow-text md:text-5xl" : "text-xl md:text-3xl"}`}>
                  {line}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Founders */}
      <section className="border-t border-border/60 py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//CREW">FOUNDERS</SectionLabel>
          <h2 className="mb-12 font-display text-4xl tracking-wide md:text-6xl">
            THE <span className="text-plasma">THREE.</span>
          </h2>

          <div className="grid gap-px border border-border/60 bg-border/60 md:grid-cols-3">
            {FOUNDERS.map((f, i) => (
              <article key={f.name} className="group relative overflow-hidden bg-background p-8">
                <div className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                  //{String(i + 1).padStart(2, "0")}
                </div>
                <div className="mb-6 h-40 w-40 border border-plasma/40 bg-gradient-to-br from-plasma/20 to-holo/10 clip-cut flex items-center justify-center font-display text-6xl text-plasma">
                  {f.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-display text-2xl tracking-wide">{f.name}</h3>
                <p className="mt-1 font-mono text-[11px] tracking-[0.25em] text-plasma">{f.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 text-center">
        <h3 className="font-display text-4xl tracking-wide md:text-6xl">
          WANT IN? <Link to="/contact" className="text-plasma glow-text underline-offset-4 hover:underline">FIND THE TRIBE.</Link>
        </h3>
      </section>
    </PageLayout>
  );
}
