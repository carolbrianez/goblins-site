import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";
import chamadoImg from "@/assets/chamado-key-art.jpg";
import heroImg from "@/assets/hero-cinematic.jpg";

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

const SERVICES = [
  {
    id: "01",
    title: "CONCEPT",
    sub: "Where worlds begin.",
    body: "Worldbuilding, character creation, turnarounds, environmental design and key visuals. We define the visual language before a single polygon is created.",
    media: { type: "video", src: "/videos/concept-video.mp4" },
  },
  {
    id: "02",
    title: "3D ART",
    sub: "AAA assets. Game-ready.",
    body: "Human characters, likeness, creatures, props, optimized assets built for high-performance real-time experiences.",
    media: { type: "video", src: "https://cdn.prod.website-files.com/66859b13105707a6b4417a25%2F6a0ee8821526e1694d523151_Modelos%203D%20%281%29compree_mp4.mp4", flip: true },
  },
  {
    id: "03",
    title: "RIGGING & ANIMATION",
    sub: "Motion that feels alive.",
    body: "Rigging, VFX, asset integration, in-engine cinematics and technical solutions for artistic challenges. Combat, locomotion, cinematic, all disciplines covered.",
    media: { type: "video", src: "https://cdn.prod.website-files.com/66859b13105707a6b4417a25%2F6a0ee89cb084f8e1144828ee_ANIMA%C3%87%C3%83OFINAL%20%281%29compress_mp4.mp4" },
  },
  {
    id: "04",
    title: "UNREAL DEVELOPMENT",
    sub: "Engine-level. No shortcuts.",
    body: "Technical programming, Blueprint systems, performance optimization and gameplay mechanics development, multiplayer development.",
    media: { type: "image", src: heroImg },
  },
  {
    id: "05",
    title: "CINEMATIC",
    sub: "Trailers that sell your game.",
    body: "In-engine cinematics, trailers, reveal sequences and cutscenes. We make people feel the game before they play it.",
    media: { type: "video", src: "https://cdn.prod.website-files.com/66859b13105707a6b4417a25%2F6a0ee73f3ab8b3ab12cbada5_EVERLEN%20OK2%20compress_mp4.mp4" },
  },
  {
    id: "06",
    title: "UI & UX",
    sub: "Next level interface.",
    body: "Interface design focused on usability and immersion. HUDs, menus, UX flows and interactive elements that serve the experience without breaking it.",
    media: { type: "image", src: chamadoImg },
  },
  {
    id: "07",
    title: "SOUND DESIGN",
    sub: "The layer players feel.",
    body: "SFX, ambient design, music direction and audio implementation. Sound that makes every action land harder and every world feel real.",
    media: { type: "video", src: "/videos/sfx-video.mp4", position: "right" },
  },
];

const WAYS = [
  {
    id: "01",
    title: "FULL DEVELOPMENT",
    sub: "End-to-end. We own it.",
    body: "We assemble the team, run production, ship the game. From original IP to publisher-funded titles, you get a single accountable studio with senior leads at every discipline.",
    bullets: [
      "Vision lock & creative direction",
      "Agile vertical slice",
      "Full production team (art, code, design, audio)",
      "Console & PC ship support",
    ],
  },
  {
    id: "02",
    title: "CO-DEVELOPMENT",
    sub: "Strike force. Embedded.",
    body: "Plug a senior crew directly into your studio. We respect your culture, ship inside your pipelines, and behave like full-time team members, because for the duration of the project, that's exactly what we are.",
    bullets: [
      "Embedded leads & specialists",
      "Pipeline integration (Perforce, Jira, etc.)",
      "Sprint-by-sprint accountability",
      "Scale up or down without friction",
    ],
  },
  {
    id: "03",
    title: "OUTSOURCE",
    sub: "Per-task. AAA fidelity.",
    body: "Isolated deliverables: Concept art, characters, environments, animation, VFX, cinematics, gameplay systems. Senior reviews, clear milestones, no surprises.",
    bullets: [
      "Per-asset or per-vertical scoping",
      "Art tests on the house (within reason)",
      "Daily / weekly review cadence",
      "Source files always delivered",
    ],
  },
];

function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-24">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        </div>
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//SERVICES">CAPABILITIES MATRIX</SectionLabel>
          <h1 className="max-w-5xl font-display text-6xl leading-[0.9] tracking-wide md:text-[9rem]">
            CHOOSE <br />
            <span className="text-plasma glow-text">YOUR DESTINY.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Three work models. One objective: AAA quality delivered in indie scope.
          </p>
        </div>
      </section>

      {/* Service banners */}
      {SERVICES.map((s, i) => (
        <section key={s.id} className="relative h-[70vh] min-h-[500px] overflow-hidden">
          {s.media.type === "video" ? (
            <video
              autoPlay loop muted playsInline
              className={`absolute inset-0 h-full w-full object-cover ${s.media.position === "right" ? "object-right" : "object-center"}`}
              style={s.media.flip ? { transform: "scaleX(-1)" } : undefined}
            >
              <source src={s.media.src} type="video/mp4" />
            </video>
          ) : (
            <img src={s.media.src} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
          )}
          <div className={`absolute inset-0 bg-gradient-to-r ${i % 2 === 0 ? "from-background via-background/40 to-transparent" : "from-transparent via-background/40 to-background"}`} />
          <div className="absolute inset-0 bg-background/10" />
          <div className={`relative flex h-full items-center ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
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
          YOUR VISION. <span className="text-plasma glow-text">OUR EXPERTISE.</span> YOUR SUCCESS.
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
          CHOOSE YOUR <span className="text-plasma glow-text">DESTINY.</span>
        </h3>
        <div className="mt-8">
          <Link to="/contact" className="btn-plasma">START A PROJECT →</Link>
        </div>
      </section>
    </PageLayout>
  );
}