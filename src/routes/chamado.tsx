import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import chamado from "@/assets/chamado-key-art.jpg";
import { useState } from "react";

export const Route = createFileRoute("/chamado")({
  head: () => ({
    meta: [
      { title: "O Chamado do Herói — Goblin Studios" },
      { name: "description", content: "An emotionally crafted VR game for children undergoing pediatric oncology treatment. Built in partnership with Hospital do Amor." },
      { property: "og:title", content: "O Chamado do Herói - Goblin Studios" },
      { property: "og:description", content: "VR game for pediatric oncology - in partnership with Hospital do Amor." },
      { property: "og:image", content: "/assets/chamado-key-art.jpg" },
    ],
  }),
  component: ChamadoPage,
});

function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-4 font-mono text-[11px] tracking-[0.3em] text-plasma hover:text-foreground"
        >
          ✕ CLOSE
        </button>
        <div className="relative aspect-video w-full overflow-hidden border border-border/60">
          <iframe
            src="https://www.youtube.com/embed/fROwLhENyGE?autoplay=1&rel=0"
            title="O Chamado do Herói"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

function ChamadoPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageLayout>
      <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">
        <img src={chamado} alt="O Chamado do Herói key art" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/30 to-background" />

        {/* Play button */}
        <button
          onClick={() => setModalOpen(true)}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center gap-4"
        >
          <div className="flex h-20 w-20 items-center justify-center border-2 border-holo bg-background/40 backdrop-blur-sm transition-all group-hover:bg-holo/20 group-hover:scale-110">
            <span className="ml-1 text-3xl text-holo">▶</span>
          </div>
        </button>

        <div className="absolute inset-x-0 bottom-24 z-10 mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//IP_002">VR · HUMANITARIAN · UNREAL ENGINE</SectionLabel>
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.85] tracking-wide text-foreground glow-holo select-none">
            O CHAMADO <br />DO HERÓI.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground select-none">
            A VR adventure built to walk beside children fighting cancer — turning
            treatment days into hero's journeys.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-border/60 py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <SectionLabel index="//MISSION">WHY THIS GAME EXISTS</SectionLabel>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>
                Pediatric oncology treatment is long, painful, and isolating. A child can
                spend years going back and forth from the hospital, surrounded by
                machines that beep and adults who whisper.
              </p>
              <p>
                <span className="text-holo">O Chamado do Herói</span> is what happens when you
                hand that child a VR headset and a sword — and tell them the kingdom is
                waiting.
              </p>
              <p>
                Built in partnership with <span className="text-plasma">Hospital do Amor</span>,
                one of Latin America's leading cancer treatment centers, the game is
                clinically integrated into pediatric care — distraction therapy with the
                soul of an actual game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//PILLARS">DESIGN PILLARS</SectionLabel>
          <div className="mt-10 grid gap-px border border-border/60 bg-border/60 md:grid-cols-3">
            {[
              ["EMOTIONAL SAFETY", "Every beat reviewed by oncologists, psychologists, and child specialists."],
              ["AGENCY & POWER", "The player is never the patient. They're the hero."],
              ["CLINICAL DURATION", "Sessions calibrated to chemo cycles — short, episodic, and welcoming."],
            ].map(([t, b]) => (
              <div key={t} className="bg-background p-8">
                <h3 className="font-display text-2xl tracking-wide text-holo">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-border/60 py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="font-display text-3xl leading-tight tracking-wide md:text-5xl">
            "A child asked the nurse if she could play
            <span className="text-holo glow-holo"> one more level</span> before chemo. <br />
            That's the day we knew we'd built the right thing."
          </p>
          <p className="mt-6 font-mono text-xs tracking-[0.3em] text-muted-foreground">
            — GOBLIN STUDIOS · INTERNAL POSTMORTEM
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 text-center">
        <h3 className="font-display text-4xl tracking-wide md:text-6xl">
          GAMES CAN <span className="text-holo glow-holo">HEAL.</span>
        </h3>
        <div className="mt-8">
          <Link to="/contact" className="btn-ghost">PARTNER WITH US →</Link>
        </div>
      </section>

      {modalOpen && <VideoModal onClose={() => setModalOpen(false)} />}
    </PageLayout>
  );
}