import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import chamado from "@/assets/bookatoonIPsemLogo.jpg";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";

export const Route = createFileRoute("/bookatoon")({
  head: () => ({
    meta: [
      { title: "BOOKATOON - Goblin Studios" },
      { name: "description", content: "An emotionally crafted VR game for children undergoing pediatric oncology treatment. Built in partnership with Hospital do Amor." },
      { property: "og:title", content: "Bookatoon - Goblin Studios" },
      { property: "og:description", content: "VR game for pediatric oncology - in partnership with Hospital do Amor." },
      { property: "og:image", content: "/assets/bookatoonIPsemLogo.jpg" },
    ],
  }),
  component: ChamadoPage,
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
          ✕ {t("bookatoonPage.modalClose")}
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

function BookatoonFloatingButton() {
  const { t } = useTranslation();
  return (
    <a
      href="https://bookatoon.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-4 right-4 z-40 flex items-center gap-3 sm:bottom-10 sm:right-10 lg:bottom-30 lg:right-30"
    >
      <div className="pointer-events-none max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[260px] group-hover:opacity-100">
        <p className="font-mono text-[11px] tracking-[0.25em] text-foreground">
          {t("bookatoonPage.floatingCta.label")}
        </p>
        <p className="mt-1 text-[10px] tracking-wide text-muted-foreground">
          {t("bookatoonPage.floatingCta.caption")}
        </p>
      </div>
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/30 bg-background/40 backdrop-blur-sm transition-all duration-300 group-hover:border-plasma group-hover:shadow-[0_0_24px_color-mix(in_oklab,var(--plasma)_30%,transparent)] sm:h-16 sm:w-16">
        <svg viewBox="0 0 100 100" className="spin-slow h-full w-full fill-foreground">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />
          <circle cx="50" cy="50" r="15" fill="var(--background)" />
          <ellipse cx="45" cy="56" rx="5.5" ry="4.2" fill="currentColor" transform="rotate(-15 45 56)" />
          <rect x="48.7" y="39" width="3" height="18" fill="currentColor" />
          <path d="M51.7 39 C61 41 61.5 49 55 53.5 C58 48 57.5 43 51.7 41 Z" fill="currentColor" />
        </svg>
      </div>
    </a>
  );
}

function ChamadoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();
  const pillars = t("bookatoonPage.pillars.items", { returnObjects: true }) as { title: string; body: string }[];

  return (
    <PageLayout>
      <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">
        <img src={chamado} alt="O Chamado do Herói key art" className="h-full w-full object-cover" style={{ objectPosition: `center var(--bookatoon-hero-y, 15%)` }} width={1920} height={1080} />
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
          <SectionLabel index="//IP_002">{t("bookatoonPage.hero.sectionLabel")}</SectionLabel>
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.85] tracking-wide text-foreground glow-holo select-none">
            BOOKATOON
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground select-none">
            {t("bookatoonPage.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-border/60 py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <SectionLabel index="//MISSION">{t("bookatoonPage.mission.sectionLabel")}</SectionLabel>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>
                <Trans i18nKey="bookatoonPage.mission.p1" components={{ holo: <span className="text-holo" /> }} />
              </p>
              <p>
                <Trans i18nKey="bookatoonPage.mission.p2" components={{ plasma: <span className="text-plasma" />, holo: <span className="text-holo" /> }} />
              </p>
              <p>
                {t("bookatoonPage.mission.p3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-border/60 bg-surface/40 py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//PILLARS">{t("bookatoonPage.pillars.sectionLabel")}</SectionLabel>
          <div className="mt-10 grid gap-px border border-border/60 bg-border/60 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="bg-background p-8">
                <h3 className="font-display text-2xl tracking-wide text-holo">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-border/60 py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="font-display text-3xl leading-tight tracking-wide md:text-5xl">
            <Trans i18nKey="bookatoonPage.quote.text" components={{ holo: <span className="text-holo glow-holo" /> }} />
          </p>
          <p className="mt-6 font-mono text-xs tracking-[0.3em] text-muted-foreground">
            {t("bookatoonPage.quote.attribution")}
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 text-center">
        <h3 className="font-display text-4xl tracking-wide md:text-6xl">
          {t("bookatoonPage.finalCta.titlePlain")} <span className="text-holo glow-holo">{t("bookatoonPage.finalCta.titleAccent")}</span>
        </h3>
        <div className="mt-8">
          <Link to="/contact" className="btn-ghost">{t("bookatoonPage.finalCta.button")} →</Link>
        </div>
      </section>

      {modalOpen && <VideoModal onClose={() => setModalOpen(false)} />}
      <BookatoonFloatingButton />
    </PageLayout>
  );
}