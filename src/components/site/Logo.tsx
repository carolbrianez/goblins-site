import rune from "@/assets/goblin-rune.png";
import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <div className="relative h-9 w-9 shrink-0">
        <img
          src={rune}
          alt="Goblin Studios sigil"
          width={36}
          height={36}
          className="h-9 w-9 object-contain drop-shadow-[0_0_8px_color-mix(in_oklab,var(--plasma)_70%,transparent)] transition-transform duration-500 group-hover:rotate-[8deg]"
        />
        <span className="pointer-events-none absolute inset-0 animate-pulse rounded-full bg-plasma/10 blur-md" />
      </div>
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg tracking-[0.22em] text-foreground">
            GOBLIN
          </span>
          <span className="font-mono text-[10px] tracking-[0.4em] text-plasma">
            STUDIOS
          </span>
        </div>
      )}
    </Link>
  );
}
