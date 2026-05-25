import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-surface/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-plasma to-transparent opacity-60" />

      <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              AAA craft. Indie soul. We build, co-develop and outsource ambitious games
              with Unreal Engine — for studios that refuse to play it safe.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-plasma opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-plasma" />
              </span>
              <span className="font-mono text-[11px] tracking-[0.3em] text-plasma">
                AVAILABLE FOR NEW PROJECTS · Q1 2026
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.3em] text-plasma">STUDIO</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/goblin-way" className="hover:text-foreground">The Goblin Way</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.3em] text-plasma">WORLDS</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/everlen" className="hover:text-foreground">Everlen</Link></li>
              <li><Link to="/chamado" className="hover:text-foreground">O Chamado do Herói</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.3em] text-plasma">SIGNAL</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>hello@goblinstudios.gg</li>
              <li>press@goblinstudios.gg</li>
              <li>biz@goblinstudios.gg</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/40 pt-6 text-[11px] font-mono tracking-[0.2em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} GOBLIN STUDIOS // ALL WORLDS RESERVED</span>
          <span className="text-plasma/80">// BUILT WITH UNREAL ENGINE 5 + OBSESSION</span>
        </div>
      </div>
    </footer>
  );
}
