import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/goblin-way")({
  head: () => ({
    meta: [
      { title: "The Goblin Way — Goblin Studios" },
      { name: "description", content: "How we think, how we work, and why we exist." },
      { property: "og:title", content: "The Goblin Way — Goblin Studios" },
      { property: "og:description", content: "How we think, how we work, and why we exist." },
    ],
  }),
  component: GoblinWayPage,
});

const TENETS = [
  {
    id: "01",
    title: "CRAFT OVER COMFORT",
    body: "We don't take the easy road. We take the right one — even when it means redoing something three times, sleeping less, or telling a client their idea needs to change.",
  },
  {
    id: "02",
    title: "SMALL TEAM. FULL OWNERSHIP.",
    body: "Every person at Goblin can point at something shipped and say 'I built that.' We don't dilute responsibility across layers of management.",
  },
  {
    id: "03",
    title: "INDIE SOUL",
    body: "We came from the indie scene. We know what it costs to build something with no safety net. That empathy lives in every project we touch.",
  },
  {
    id: "04",
    title: "NO FAKE CREDITS",
    body: "We earn everything we put in a portfolio. No borrowed glory, no inflated scope, no 'we contributed to' language that doesn't mean anything.",
  },
  {
    id: "05",
    title: "THE GAME IS THE DEADLINE",
    body: "Not the invoice. Not the meeting. The game. We align our entire operation around shipping something worth playing.",
  },
  {
    id: "06",
    title: "PERMANENT STUDENTS",
    body: "Unreal updates. Pipelines evolve. The best studios never stop learning. We dedicate time every week to skills that don't exist yet.",
  },
];

function GoblinWayPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//MANIFESTO">HOW WE THINK · HOW WE WORK</SectionLabel>
          <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.85] tracking-wide md:text-[8rem]">
            THE <span className="text-plasma glow-text">GOBLIN</span> WAY.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We're not a agency. We're not a vendor. We're a crew — with a code.
          </p>
        </div>
      </section>

      {/* Tenets */}
      <section className="border-t border-border/60 py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//CODE">THE TENETS</SectionLabel>
          <div className="mt-12 space-y-0">
            {TENETS.map((t, i) => (
              <div
                key={t.id}
                className="group flex items-start gap-6 border-t border-border/60 p-6 transition-colors hover:bg-surface md:p-8"
              >
                <span className="shrink-0 font-mono text-[11px] tracking-[0.3em] text-plasma">
                  //{t.id}
                </span>
                <div>
                  <h3 className="font-display text-2xl tracking-wide text-foreground md:text-3xl">
                    {t.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {t.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find the tribe */}
      <section className="border-t border-border/60 py-32 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <SectionLabel index="//TRIBE">FIND THE TRIBE</SectionLabel>
          <h2 className="mt-6 font-display text-5xl tracking-wide md:text-7xl">
            YOU KNOW IF YOU'RE <span className="text-plasma glow-text">ONE OF US.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            If you read this far and felt something — come find us. We're always looking
            for people who care too much about the craft.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-plasma">
              WORK WITH US <span aria-hidden>→</span>
            </Link>
            <a
              href="https://www.youtube.com/@goblin_studios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WATCH US ON YOUTUBE <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}