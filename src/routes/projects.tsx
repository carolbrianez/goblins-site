import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import everlen from "@/assets/everlen-key-art.jpg";
import chamado from "@/assets/chamado-key-art.jpg";
import hero from "@/assets/hero-cinematic.jpg";
import studio from "@/assets/studio-atmosphere.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Goblin Studios" },
      { name: "description", content: "Original IPs and client work from Goblin Studios. AAA-fidelity portfolio of games built in Unreal Engine." },
      { property: "og:title", content: "Projects — Goblin Studios" },
      { property: "og:description", content: "Original IPs and client work portfolio." },
    ],
  }),
  component: ProjectsPage,
});

const ORIGINALS = [
  { title: "EVERLEN", tag: "DARK FANTASY · AAA-LIKE", img: everlen, href: "/everlen" },
  { title: "O CHAMADO DO HERÓI", tag: "VR · HUMANITARIAN", img: chamado, href: "/chamado" },
];

const CLIENT_WORK = [
  { title: "TRIALFORGE / COMBAT VERTICAL", tag: "CO-DEV", img: hero },
  { title: "VOID GAMES / VFX PACKAGE", tag: "OUTSOURCE", img: studio },
  { title: "FIRST PHOENIX / CHARACTERS", tag: "OUTSOURCE", img: everlen },
  { title: "RED GAMES / CINEMATIC", tag: "FULL DEV", img: chamado },
  { title: "PSYQUEDELIC / ENVIRONMENT KIT", tag: "OUTSOURCE", img: hero },
  { title: "CREDICITRUS / SERIOUS GAME", tag: "FULL DEV", img: studio },
];

function ProjectsPage() {
  return (
    <PageLayout>
      <section className="pt-40 pb-16">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//PORTFOLIO">SELECTED WORK</SectionLabel>
          <h1 className="max-w-5xl font-display text-6xl leading-[0.9] tracking-wide md:text-[9rem]">
            WORLDS <br />
            <span className="text-plasma glow-text">WE'VE FORGED.</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <h2 className="mb-10 font-display text-3xl tracking-wide md:text-5xl">
            <span className="text-plasma">▣</span> ORIGINAL IPs
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {ORIGINALS.map((p) => (
              <Link key={p.title} to={p.href} className="group relative block overflow-hidden border border-border/60 clip-cut">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-plasma">{p.tag}</div>
                  <h3 className="mt-2 font-display text-4xl tracking-wide md:text-5xl">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <h2 className="mb-10 font-display text-3xl tracking-wide md:text-5xl">
            <span className="text-plasma">▣</span> CLIENT WORK
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CLIENT_WORK.map((p, i) => (
              <article key={i} className="group relative overflow-hidden border border-border/60 clip-cut">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                  <div className="absolute right-3 top-3 h-2 w-2 bg-plasma animate-pulse" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-plasma">{p.tag}</div>
                  <h3 className="mt-1 font-display text-lg tracking-wide">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 text-center">
        <h3 className="font-display text-4xl tracking-wide md:text-6xl">
          NEXT WORLD: <span className="text-plasma glow-text">YOURS?</span>
        </h3>
        <div className="mt-8">
          <Link to="/contact" className="btn-plasma">PITCH US →</Link>
        </div>
      </section>
    </PageLayout>
  );
}
