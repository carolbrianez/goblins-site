import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82c-.9-.85-1.47-2.02-1.53-3.32h-3.03v13.03c0 1.34-1.09 2.43-2.43 2.43a2.43 2.43 0 0 1 0-4.86c.24 0 .48.03.7.1V9.98a5.6 5.6 0 0 0-.7-.05A5.6 5.6 0 0 0 4 15.53a5.6 5.6 0 0 0 5.61 5.6 5.6 5.6 0 0 0 5.6-5.6V9.28a8.53 8.53 0 0 0 4.98 1.6V7.86a5.3 5.3 0 0 1-3.59-2.04z" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 12s0-3.4-.43-5a3.02 3.02 0 0 0-2.12-2.13C18.8 4.42 12 4.42 12 4.42s-6.8 0-8.45.45A3.02 3.02 0 0 0 1.43 7C1 8.6 1 12 1 12s0 3.4.43 5a3.02 3.02 0 0 0 2.12 2.13c1.65.45 8.45.45 8.45.45s6.8 0 8.45-.45A3.02 3.02 0 0 0 22.57 17c.43-1.6.43-5 .43-5zM9.75 15.02V8.98L15.5 12z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "X", href: "https://x.com/goblinthestudio", icon: XIcon },
  { label: "Instagram", href: "https://www.instagram.com/goblin.studios/", icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@goblin.studios", icon: TikTokIcon },
  { label: "YouTube", href: "https://www.youtube.com/@goblin_studios", icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-surface/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-plasma to-transparent opacity-60" />

      <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              AAA quality, indie budget. Full development, co-development, and outsourcing for ambitious Unreal Engine projects and studios shaping the new era of indie games.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-plasma opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-plasma" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.3em] text-plasma">
                AVAILABLE FOR NEW PROJECTS
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.3em] text-plasma">STUDIO</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><a href="https://www.artstation.com/goblin-studios" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Portfolio</a></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link to="/goblin-way" className="hover:text-foreground">The Goblin Way</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.3em] text-plasma">WORLDS</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/everlen" className="hover:text-foreground">Everlen</Link></li>
              <li><Link to="/bookatoon" className="hover:text-foreground">Bookatoon</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.3em] text-plasma">SIGNAL</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>contact@goblinstudios.com.br</li>
            </ul>
            <div className="mt-5 flex items-center gap-4">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-plasma"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/40 pt-6 text-[11px] font-mono tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>©GOBLIN STUDIOS - since 2021 // ALL RIGTHS RESERVED</span>
          <span className="text-plasma/80">// BUILT WITH UNREAL ENGINE 5 + OBSESSION</span>
        </div>
      </div>
    </footer>
  );
}