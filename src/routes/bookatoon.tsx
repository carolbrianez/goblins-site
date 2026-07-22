import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import chamado from "@/assets/chamado-key-art.jpg";
import { useState } from "react";

export const Route = createFileRoute("/bookatoon")({
  head: () => ({
    meta: [
      { title: "BOOKATOON - Goblin Studios" },
      { name: "description", content: "An emotionally crafted VR game for children undergoing pediatric oncology treatment. Built in partnership with Hospital do Amor." },
      { property: "og:title", content: "Bookatoon - Goblin Studios" },
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
            title="Bookatoon"
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
            BOOKATOON
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground select-none">
            A VR adventure built to walk beside children fighting cancer turning treatment days into hero's journeys.
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
                <span className="text-holo">Bookatoon</span> was born from the belief that no child should lose the ability to dream, imagine, and find hope while facing a health challenge, more than a game, Bookatoon is an original transmedia universe designed to inspire courage, resilience, and perseverance through memorable characters, music, stories, games, and immersive experience.
              </p>
              <p>
                Its first chapter began with the humanization of pediatric oncology care, but its vision extends far beyond cancer-creating meaningful experiences that support children and families throughout their healthcare journey. The first Bookatoon experience is a therapeutic gamification platform developed by <span className="text-plasma">Goblin Studios</span>, with scientific and institucional support from <span className="text-holo">Hospital de Amor</span>, one of Latin America's leading cancer treatment and research centers.
              </p>
              <p>
                Together, they combine creativity, technology, and clinical expertise to build a global entertainment franchise that transforms storytelling into a source of hope, empowering children to discover that the light to overcome life's greatest challenges has always existed within themselves.
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
              ["IMAGINE", "Where fear gives way to music."],
              ["BELIEVE", "Because courage grows from within."],
              ["OVERCOME", "One story, one song and one step at a time."],
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