import { Link, useRouterState } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", labelKey: "nav.home", external: false },
  { to: "/services", labelKey: "nav.services", external: false },
  { to: "https://www.artstation.com/goblin-studios", labelKey: "nav.portfolio", external: true },
  { to: "/everlen", labelKey: "nav.everlen", external: false },
  { to: "/bookatoon", labelKey: "nav.bookatoon", external: false },
  { to: "/goblin-way", labelKey: "nav.goblinWay", external: false },
  { to: "/contact", labelKey: "nav.contact", external: false },
];

const navLinkClass = (active: boolean) =>
  `group relative px-3 py-2 font-mono text-[11px] tracking-[0.28em] transition-colors ${
    active ? "text-plasma" : "text-muted-foreground hover:text-foreground"
  }`;

const navUnderline = (active: boolean) =>
  `absolute -bottom-1 left-0 h-px bg-plasma transition-all duration-300 ${
    active ? "w-full" : "w-0 group-hover:w-full"
  }`;

export function Header() {
  const { location } = useRouterState();
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = location.pathname === item.to;
            if (item.external) {
              return (
                <a
                  key={item.to}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navLinkClass(false)}
                >
                  <span className="relative">
                    {t(item.labelKey)}
                    <span className={navUnderline(false)} />
                  </span>
                </a>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to as any}
                className={navLinkClass(active)}
              >
                <span className="relative">
                  {t(item.labelKey)}
                  <span className={navUnderline(active)} />
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-plasma text-xs">
            {t("nav.startProject")} <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          onClick={() => i18n.changeLanguage(i18n.language === "en" ? "de" : "en")}
          className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground hover:text-plasma"
        >
          {i18n.language === "en" ? "DE" : "EN"}
        </button>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center border border-border lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`h-px w-5 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) =>
              item.external ? (
                <a
                  key={item.to}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="border-b border-border/40 py-3 font-mono text-xs tracking-[0.28em] text-muted-foreground hover:text-plasma"
                >
                  {t(item.labelKey)}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to as any}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/40 py-3 font-mono text-xs tracking-[0.28em] text-muted-foreground hover:text-plasma"
                >
                  {t(item.labelKey)}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}