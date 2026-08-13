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

function FlagUS() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true">
      <rect width="16" height="12" fill="#B22234" />
      <rect y="0.92" width="16" height="0.92" fill="#fff" />
      <rect y="2.77" width="16" height="0.92" fill="#fff" />
      <rect y="4.62" width="16" height="0.92" fill="#fff" />
      <rect y="6.46" width="16" height="0.92" fill="#fff" />
      <rect y="8.31" width="16" height="0.92" fill="#fff" />
      <rect y="10.15" width="16" height="0.92" fill="#fff" />
      <rect width="6.4" height="6.46" fill="#3C3B6E" />
    </svg>
  );
}

function FlagDE() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true">
      <rect width="16" height="4" fill="#000" />
      <rect y="4" width="16" height="4" fill="#DD0000" />
      <rect y="8" width="16" height="4" fill="#FFCE00" />
    </svg>
  );
}

function LanguageSwitchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      {/* Seta de cima, curva da direita pra esquerda */}
      <path
        d="M5 6 C5 3.8, 6.8 2, 9 2 L16 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M13.5 -0.2 L16.3 2 L13.5 4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bandeira DE, canto superior direito */}
      <g transform="translate(11, 4)">
        <rect width="11" height="8.25" fill="#000" />
        <rect y="2.75" width="11" height="2.75" fill="#DD0000" />
        <rect y="5.5" width="11" height="2.75" fill="#FFCE00" />
      </g>

      {/* Bandeira US, canto inferior esquerdo */}
      <g transform="translate(2, 11)">
        <rect width="11" height="8.25" fill="#B22234" />
        <rect y="0.63" width="11" height="0.63" fill="#fff" />
        <rect y="1.9" width="11" height="0.63" fill="#fff" />
        <rect y="3.16" width="11" height="0.63" fill="#fff" />
        <rect y="4.42" width="11" height="0.63" fill="#fff" />
        <rect y="5.68" width="11" height="0.63" fill="#fff" />
        <rect y="6.94" width="11" height="0.63" fill="#fff" />
        <rect width="4.4" height="4.4" fill="#3C3B6E" />
      </g>

      {/* Seta de baixo, curva da esquerda pra direita */}
      <path
        d="M19 18 C19 20.2, 17.2 22, 15 22 L8 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M10.5 24.2 L7.7 22 L10.5 19.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] text-muted-foreground hover:text-plasma"
        >
          <LanguageSwitchIcon />
          <span>{i18n.language === "en" ? "EN" : "DE"}</span>
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