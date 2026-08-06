import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import everlen from "@/assets/everlenSLogo.png";
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
import steamIcon from "@/assets/steam.svg";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";

export const Route = createFileRoute("/everlen")({
  head: () => ({
    meta: [
      { title: "Everlen - Goblin Studios Original IP" },
      { name: "description", content: "Everlen - a dark sci-fi AAA-style world by Goblin Studios. Built in Unreal Engine 5." },
      { property: "og:title", content: "Everlen - Goblin Studios" },
      { property: "og:description", content: "A blood-soaked dark fantasy world. Built in Unreal Engine 5." },
      { property: "og:image", content: "/assets/everlenSLogo.jpg" },
    ],
  }),
  component: EverlenPage,
});

function VideoModal({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation();
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
          ✕ {t("everlenPage.modalClose")}
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
  const { t } = useTranslation();
  const PILLAR_ICONS = [icon1, icon2, icon3];
  const pillarsText = t("everlenPage.pillars.items", { returnObjects: true }) as { title: string; text: string }[];
  const pillars = pillarsText.map((p, i) => ({ ...p, icon: PILLAR_ICONS[i] }));

  return (
    <PageLayout>
      {/* Hero com play button */}
      <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">
        <img
          src={everlen}
          alt="Everlen key art"
          className="h-full w-full scale-105 object-cover object-[70%_center] md:object-center"
          width={1920}
          height={1080}
        />
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
          <SectionLabel index="//IP_001">{t("everlenPage.hero.sectionLabel")}</SectionLabel>
          <h1 className="font-display text-[clamp(5rem,18vw,18rem)] leading-[0.78] tracking-wider text-foreground glow-text select-none">
            EVERLEN
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {t("everlenPage.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* lore */}
      <section className="border-t border-border/60 py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <SectionLabel index="//LORE">{t("everlenPage.lore.sectionLabel")}</SectionLabel>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>{t("everlenPage.lore.p1")}</p>
              <p>
                <Trans i18nKey="everlenPage.lore.p2" components={{ em: <em /> }} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* pillars */}
      <section className="border-t border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//PILLARS">{t("everlenPage.pillars.sectionLabel")}</SectionLabel>
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map(({ icon, title, text }) => (
              <div key={title} className="flex items-center gap-6 border border-border/60 bg-background p-6 transition-colors hover:border-plasma/40">
                <img src={icon} alt={title} className="h-16 w-16 shrink-0" />
                <div>
                  <h3 className="font-mono text-xs tracking-[0.2em] text-plasma mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* media gallery */}
      <section className="py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//MEDIA">{t("everlenPage.media.sectionLabel")}</SectionLabel>
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
          {t("everlenPage.finalCta.titlePlain")} <span className="text-plasma">{t("everlenPage.finalCta.titleAccent")}</span>
        </h3>

        <div className="mt-8">
          <a
          href="https://store.steampowered.com/app/3943600/Everlen_The_Volgran_Torment/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-plasma inline-flex items-center gap-3 px-10 py-4 text-base"
          >
            <img src={steamIcon} alt="Steam" className="h-5 w-5 shrink-0" />
            {t("everlenPage.finalCta.wishlistButton")}
          </a>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && <VideoModal onClose={() => setModalOpen(false)} />}
    </PageLayout>
  );
}