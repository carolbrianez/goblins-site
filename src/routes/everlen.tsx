import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Shield, Globe, Bot, Radio, Crosshair, HardHat, RefreshCw, Sprout } from "lucide-react";
import everlen from "@/assets/everlen-key-art.jpg";
import { useState } from "react";

export const Route = createFileRoute("/everlen")({
  head: () => ({
    meta: [
      { title: "Everlen — Goblin Studios Original IP" },
      { name: "description", content: "Everlen — a dark fantasy AAA-style world by Goblin Studios. Built in Unreal Engine 5." },
      { property: "og:title", content: "Everlen — Goblin Studios" },
      { property: "og:description", content: "A blood-soaked dark fantasy world. Built in Unreal Engine 5." },
      { property: "og:image", content: "/assets/everlen-key-art.jpg" },
    ],
  }),
  component: EverlenPage,
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
            src="https://www.youtube.com/embed/w49B3_-jVoc?autoplay=1&rel=0"
            title="Everlen Teaser"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

function EverlenPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <PageLayout>
      {/* Hero com play button */}
      <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">
        <img src={everlen} alt="Everlen key art" className="h-full w-full scale-105 object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        <div className="absolute inset-0 vignette" />

        {/* Play button */}
        <button
          onClick={() => setModalOpen(true)}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center gap-4"
        >
          <div className="flex h-20 w-20 items-center justify-center border-2 border-plasma bg-background/40 backdrop-blur-sm transition-all group-hover:bg-plasma/20 group-hover:scale-110">
            <span className="ml-1 text-3xl text-plasma">▶</span>
          </div>
        </button>

        <div className="absolute inset-x-0 bottom-24 z-10 mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//IP_001">DARK FANTASY · UNREAL ENGINE 5</SectionLabel>
          <h1 className="font-display text-[clamp(5rem,18vw,18rem)] leading-[0.78] tracking-wider text-foreground glow-text select-none">
            EVERLEN
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Where forgotten gods bleed into the cracks of the empire and the only
            currency left is faith.
          </p>
        </div>
      </section>

      {/* lore */}
      <section className="border-t border-border/60 py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <SectionLabel index="//LORE">THE WORLD</SectionLabel>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>
                Build, adapt, fail, rise again - where survival meets roguelike.
              </p>
              <p>
                In <em>Everlen</em> players are thrown into an apocalyptic space-opera universe where morality lives in the grey areas. Gameplay is focused on intense encounters with hostile creatures in the bullet hell combat style, inspired by Returnal, Dune and Helldivers 2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* pillars */}
      <section className="border-t border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//PILLARS">KEY FEATURES</SectionLabel>

          <div className="mt-12 grid gap-16 lg:grid-cols-2">

            {/* Key Gameplay Pillars */}
            <div>
              <h3 className="font-display text-2xl tracking-[0.12em] text-plasma mb-8">
                KEY GAMEPLAY PILLARS
              </h3>
              <div className="flex flex-col gap-6">
                {[
                  [Shield, "Stand with your friends in intense third person shooter battles against a ruthless hive-mind planet."],
                  [Globe, "Survive and manage your resources on a apocalyptic alien planet, procedurally generated for each run."],
                  [Bot, "Craft and upgrade suit modifiers, consumables, and ammo each new run."],
                  [Radio, "Decipher a complex dark space opera narrative."],
                ].map(([Icon, text]) => (
                  <div key={text} className="flex min-h-[72px] items-center gap-5 border border-border/60 bg-background p-5 transition-colors hover:border-plasma/40">
                    <Icon className="shrink-0 text-plasma" size={28} />
                    <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Pillars */}
            <div>
              <h3 className="font-display text-2xl tracking-[0.12em] text-plasma mb-8">
                CORE PILLARS
              </h3>
              <div className="flex flex-col gap-6">
                {[
                  [Crosshair, "Cooperative shooter combat."],
                  [HardHat, "Immersive world."],
                  [RefreshCw, "High replayability potential."],
                  [Sprout, "Robust build customization."],
                ].map(([Icon, text]) => (
                  <div key={text} className="flex min-h-[72px] items-center gap-5 border border-border/60 bg-background p-5 transition-colors hover:border-plasma/40">
                    <Icon className="shrink-0 text-plasma" size={28} />
                    <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* media gallery */}
      <section className="py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//MEDIA">SCREENSHOTS · CONCEPT</SectionLabel>
          <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[260px]">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`relative overflow-hidden border border-border/60 clip-cut ${i === 1 || i === 4 ? "row-span-2" : ""}`}>
                <img src={everlen} alt={`Everlen still ${i}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.3em] text-plasma">PLATE_{String(i).padStart(2, "0")}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 text-center">
        <h3 className="font-display text-4xl tracking-wide md:text-6xl">
          BLEED WITH US. <Link to="/contact" className="text-plasma underline-offset-4 hover:underline">JOIN THE COVEN.</Link>
        </h3>

        <div className="mt-8">
          <a
          href="https://store.steampowered.com/app/3943600/Everlen_The_Volgran_Torment/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-plasma inline-flex items-center gap-3 px-10 py-4 text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
              <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z"/>
            </svg>
            ADD TO WISHLIST ON STEAM
          </a>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && <VideoModal onClose={() => setModalOpen(false)} />}
    </PageLayout>
  );
}