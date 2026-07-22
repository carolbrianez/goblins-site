import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { SectionLabel } from "@/components/site/SectionLabel";

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

const CREED_SECTIONS: CreedSection[] = [
  {
    titles: ["THE GOBLIN WAY"],
    body: [
      "OUR CREED.",
      "There is a belief that great games can only be built by giant studios.",
      "We don't believe that.",
      "Not because ambition became smaller.",
      "Because the people behind it became stronger.",
      "For decades, the industry's greatest talent gathered inside massive organizations.",
      "They built unforgettable worlds.",
      "Defined genres.",
      "Inspired generations.",
      "Today, something remarkable is happening.",
      "Those same developers are founding their own studios.",
      "Smaller.",
      "More agile.",
      "More specialized.",
      "The experience never disappeared.",
      "It simply found new homes.",
      "The future of game development isn't about replacing AAA.",
      "It's about redistributing it.",
      "Knowledge.",
      "Craftsmanship.",
      "Leadership.",
      "Production expertise.",
      "The walls became smaller.",
      "The standards never did.",
    ],
  },
  {
    titles: ["CRAFT ABOVE EVERYTHING."],
    body: [
      "Technology changes.",
      "Pipelines evolve.",
      "Tools improve.",
      "But one thing never changes:",
      "Great games are made by people.",
      "By artists who obsess over every silhouette.",
      "By designers who understand emotion.",
      "By programmers who care about every interaction.",
      "By producers who know that creativity only flourishes when execution is disciplined.",
      "Technology should amplify craftsmanship.",
      "Never replace it.",
      "We believe in better workflows.",
      "Not shortcuts.",
    ],
  },
  {
    titles: ["THE NEW REALITY."],
    body: [
      "Players no longer ask how many people built a game.",
      "They ask one question.",
      '"Is it good?"',
      "Studios face a different challenge than they did ten years ago.",
      "Budgets are tighter.",
      "Schedules are shorter.",
      "Expectations are higher.",
      "Yet the opportunity has never been greater.",
      "Modern production methods allow focused teams to achieve a level of quality that once belonged only to the industry's largest companies.",
      "Not by working less.",
      "By working smarter.",
    ],
  },
  {
    titles: ["INDIE SCOPE.", "AAA STANDARDS."],
    body: [
      "We believe excellence has never depended on size.",
      "It depends on clarity.",
      "Direction.",
      "Talent.",
      "Discipline.",
      "The ability to make every decision count.",
      "Every asset.",
      "Every mechanic.",
      "Every sprint.",
      "Every pixel.",
      "Every line of code.",
      "Nothing exists without purpose.",
      "That is how ambitious games are built.",
    ],
  },
  {
    titles: ["WE BUILD ALLIES."],
    body: [
      "Great partnerships are built on trust, transparency and shared ownership.",
      "When we join a project, we don't become another external supplier.",
      "We become part of the team.",
      "Your milestones become ours.",
      "Your challenges become ours.",
      "Your victories become ours.",
    ],
  },
  {
    titles: ["THE NEXT GENERATION."],
    body: [
      "During The Game Awards, Swen Vincke shared a thought that resonated throughout the industry:",
      '"The game of the year will be made by a developer that simply wanted to make a game they wanted to play themselves."',
      "That belief isn't nostalgia.",
      "It's the direction the industry is taking.",
      "Studios like Kojima Productions.",
      "Teams like Sandfall Interactive with Clair Obscur: Expedition 33.",
      "Countless independent studios founded by veterans from the world's biggest companies.",
      "Different sizes.",
      "One common belief.",
      "Extraordinary games are built by extraordinary people.",
      "Not extraordinary bureaucracy.",
    ],
  },
  {
    titles: ["THIS IS THE GOBLIN WAY."],
    body: [
      "Question conventions.",
      "Respect the craft.",
      "Never stop learning.",
      "Stay humble.",
      "Stay curious.",
      "Protect quality.",
      "Share knowledge.",
      "Build worlds worth remembering.",
      "Because great studios are not measured by the number of people inside them.",
      "They are measured by the legacy they leave in the players who experience their games.",
    ],
    quote: {
      text: "Find something to believe in, and find it for yourself. When you do, pass it on to the future.",
      author: "Hideo Kojima",
    },
  },
  {
    titles: ["THE GOBLIN CODE"],
    body: [
      "We believe craft outlives trends.",
      "We believe discipline enables creativity.",
      "We believe great teams stay small until they must grow.",
      "We believe every artist should understand production.",
      "We believe every programmer should respect design.",
      "We believe quality is built one decision at a time.",
      "We believe trust is the foundation of every partnership.",
      "We believe knowledge exists to be shared.",
      "We believe games are made by people, for people.",
      "We believe every project deserves to become someone's favorite game.",
    ],
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
            We're not a agency. We're not a vendor. We're a crew, with a code.
          </p>
        </div>
      </section>

      {/* Creed */}
      <section className="border-t border-border/60 py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          <SectionLabel index="//CODE">THE MANIFESTO</SectionLabel>
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
          <SectionLabel index="//TRIBE">FIND THE TRIBE</SectionLabel>
          <h2 className="mt-6 font-display text-5xl tracking-wide md:text-7xl">
            YOU KNOW IF YOU'RE <span className="text-plasma glow-text">ONE OF US.</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            If you read this far and felt something, come find us. We're always looking
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