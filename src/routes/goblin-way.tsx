import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/goblin-way")({
  head: () => ({
    meta: [
      { title: "The Goblin Way • Goblin Studios" },
      { name: "description", content: "How we think, how we work, and why we exist." },
      { property: "og:title", content: "The Goblin Way • Goblin Studios" },
      { property: "og:description", content: "How we think, how we work, and why we exist." },
    ],
  }),
  component: GoblinWayPage,
});

type CreedSection = {
  titles: string[];
  body: string[];
  quote?: { text: string; author: string };
};

function GoblinWayPage() {
  const { t } = useTranslation();
  const CREED_SECTIONS = t("goblinWayPage.creed.sections", { returnObjects: true }) as CreedSection[];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//MANIFESTO">{t("goblinWayPage.hero.sectionLabel")}</SectionLabel>
          <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.85] tracking-wide md:text-[8rem]">
            {t("goblinWayPage.hero.titlePlain")} <span className="text-plasma glow-text">{t("goblinWayPage.hero.titleAccent")}</span> {t("goblinWayPage.hero.titleSuffix")}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t("goblinWayPage.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Creed */}
      <section className="border-t border-border/60 py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//CODE">{t("goblinWayPage.creed.sectionLabel")}</SectionLabel>
          <div className="mt-12 space-y-24">
            {CREED_SECTIONS.map((section, i) => (
              <div
                key={i}
                className="border-t border-border/60 pt-12 first:border-t-0 first:pt-0"
              >
                <div className="mb-8">
                  {section.titles.map((title, j) => (
                    <h3
                      key={j}
                      className="font-display text-3xl tracking-wide text-foreground md:text-5xl"
                    >
                      {title}
                    </h3>
                  ))}
                </div>
                <div className="max-w-3xl space-y-2">
                  {section.body.map((line, k) => (
                    <p
                      key={k}
                      className="text-sm leading-relaxed text-muted-foreground md:text-base"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                {section.quote && (
                  <blockquote className="mt-8 max-w-2xl border-l-2 border-plasma pl-6">
                    <p className="text-lg italic text-foreground md:text-xl">
                      "{section.quote.text}"
                    </p>
                    <footer className="mt-2 font-mono text-xs tracking-[0.2em] text-plasma">
                      — {section.quote.author.toUpperCase()}
                    </footer>
                  </blockquote>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find the tribe */}
      <section className="border-t border-border/60 py-32 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <SectionLabel index="//TRIBE">{t("goblinWayPage.tribe.sectionLabel")}</SectionLabel>
          <h2 className="mt-6 font-display text-5xl tracking-wide md:text-7xl">
            {t("goblinWayPage.tribe.titlePlain")} <span className="text-plasma glow-text">{t("goblinWayPage.tribe.titleAccent")}</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            {t("goblinWayPage.tribe.body")}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-plasma">
              {t("goblinWayPage.tribe.ctaWork")} <span aria-hidden>→</span>
            </Link>
            <a
              href="https://www.youtube.com/@goblin_studios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              {t("goblinWayPage.tribe.ctaYoutube")} <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}