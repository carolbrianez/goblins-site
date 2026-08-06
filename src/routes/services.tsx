import { createFileRoute, Link } from "@tanstack/react-router";
import { Trans, useTranslation } from "react-i18next";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services • Goblin Studios" },
      { name: "description", content: "Full Development, Co-Development and Outsourcing for Unreal Engine games. AAA fidelity, indie velocity." },
      { property: "og:title", content: "Services • Goblin Studios" },
      { property: "og:description", content: "Full Dev, Co-Dev and Outsourcing for ambitious games." },
    ],
  }),
  component: ServicesPage,
});

const ANCHOR_CLASS: Record<string, string> = {
  top: "object-top",
  bottom: "object-bottom",
  left: "object-left",
  right: "object-right",
  center: "object-center",
};

function getMediaPositionClasses(media: { position?: string; mobileAnchor?: string }) {
  const desktop = ANCHOR_CLASS[media.position ?? "center"] ?? "object-center";
  if (!media.mobileAnchor) return desktop;
  const mobile = ANCHOR_CLASS[media.mobileAnchor] ?? "object-center";
  return `${mobile} md:${desktop}`;
}

function ServicesPage() {
  const { t } = useTranslation();

  const SERVICE_MEDIA = [
    { type: "video", src: "/videos/concept-video.mp4" },
    { type: "video", src: "https://cdn.prod.website-files.com/66859b13105707a6b4417a25%2F6a0ee8821526e1694d523151_Modelos%203D%20%281%29compree_mp4.mp4", flip: true, mobileAnchor: "right" },
    { type: "video", src: "https://cdn.prod.website-files.com/66859b13105707a6b4417a25%2F6a0ee89cb084f8e1144828ee_ANIMA%C3%87%C3%83OFINAL%20%281%29compress_mp4.mp4", mobileAnchor: "right" },
    { type: "video", src: "/videos/unreal-video.mp4", position: "right", mobileAnchor: "left" },
    { type: "video", src: "https://cdn.prod.website-files.com/66859b13105707a6b4417a25%2F6a0ee73f3ab8b3ab12cbada5_EVERLEN%20OK2%20compress_mp4.mp4", mobileAnchor: "right" },
    { type: "video", src: "/videos/ui-ux-video.mp4", position: "right", mobileAnchor: "left" },
    { type: "video", src: "/videos/sfx-video.mp4", position: "right", mobileAnchor: "right" },
  ];

  const servicesText = t("servicesPage.banners", { returnObjects: true }) as {
    id: string; title: string; sub: string; body: string;
  }[];
  const SERVICES = servicesText.map((s, i) => ({ ...s, media: SERVICE_MEDIA[i] }));

  const WAYS = t("servicesPage.ways", { returnObjects: true }) as {
    id: string; title: string; sub: string; body: string; bullets: string[];
  }[];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-24">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        </div>
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//SERVICES">{t("servicesPage.hero.sectionLabel")}</SectionLabel>
          <h1 className="max-w-5xl font-display text-6xl leading-[0.9] tracking-wide md:text-[9rem]">
            {t("servicesPage.hero.titleLine1")} <br />
            <span className="text-plasma glow-text">{t("servicesPage.hero.titleLine2")}</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t("servicesPage.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Service banners */}
      {SERVICES.map((s, i) => (
        <section key={s.id} className="relative h-[70vh] min-h-[500px] overflow-hidden">
          {s.media.type === "video" ? (
            <video
              autoPlay loop muted playsInline
              className={`absolute inset-0 h-full w-full object-cover ${getMediaPositionClasses(s.media)}`}
              style={s.media.flip ? { transform: "scaleX(-1)" } : undefined}
            >
              <source src={s.media.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={s.media.src}
              alt={s.title}
              className={`absolute inset-0 h-full w-full object-cover ${getMediaPositionClasses(s.media)}`}
            />
          )}
          <div className={`absolute inset-0 bg-gradient-to-r ${i % 2 === 0 ? "from-background via-background/40 to-transparent" : "from-transparent via-background/40 to-background"}`} />
          <div className="absolute inset-0 bg-background/10" />
          <div className={`relative flex h-full items-end pb-12 md:items-center md:pb-0 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
            <div className={`mx-auto max-w-[1500px] w-full px-6 lg:px-10 ${i % 2 === 0 ? "" : "flex justify-end"}`}>
              <div className="max-w-xl">
                <span className="font-mono text-[11px] tracking-[0.3em] text-plasma">//{s.id} • {s.sub}</span>
                <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-foreground md:text-7xl">
                  {s.title}
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">{s.body}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-y border-border/60 bg-surface/40 py-24 text-center">
        <p className="font-display text-4xl leading-tight tracking-wide md:text-6xl lg:text-7xl">
          <Trans
            i18nKey="servicesPage.midBanner"
            components={{ accent: <span className="text-plasma glow-text" /> }}
          />
        </p>
      </section>

      {/* Ways */}
      <section className="relative">
        {WAYS.map((p, i) => (
          <div key={p.id} className={`relative border-t border-border/60 py-24 ${i % 2 ? "bg-surface/40" : ""}`}>
            <div className="mx-auto grid max-w-[1500px] gap-12 px-6 lg:grid-cols-[1fr_2fr] lg:px-10">
              <div>
                <span className="font-mono text-[11px] tracking-[0.3em] text-plasma">WAY //{p.id}</span>
                <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-wide md:text-7xl">{p.title}</h2>
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

      {/* CTA */}
      <section className="border-t border-border/60 py-24 text-center">
        <h3 className="font-display text-4xl tracking-wide md:text-6xl">
          {t("servicesPage.finalCta.titleLine1")} <span className="text-plasma glow-text">{t("servicesPage.finalCta.titleLine2")}</span>
        </h3>
        <div className="mt-8">
          <Link to="/contact" className="btn-plasma">{t("servicesPage.finalCta.button")} →</Link>
        </div>
      </section>
    </PageLayout>
  );
}