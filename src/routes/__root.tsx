import { Outlet, Link, createRootRoute, useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Atmosphere } from "@/components/site/Atmosphere";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-xs tracking-[0.3em] text-plasma">{t("errors.notFound.code")}</div>
        <h1 className="mt-4 font-display text-7xl tracking-wider text-foreground glow-text">{t("errors.notFound.title")}</h1>
        <h2 className="mt-4 font-display text-xl tracking-[0.2em] text-foreground">{t("errors.notFound.subtitle")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("errors.notFound.body")}
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-plasma text-xs">{t("errors.notFound.cta")}</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const { t } = useTranslation();
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-xs tracking-[0.3em] text-blood">{t("errors.fatal.code")}</div>
        <h1 className="mt-4 font-display text-2xl tracking-[0.18em] text-foreground">
          {t("errors.fatal.title")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("errors.fatal.body")}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-plasma text-xs">
            {t("errors.fatal.retry")}
          </button>
          <a href="/" className="btn-ghost text-xs">{t("errors.fatal.home")}</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return (
    <>
      <Atmosphere />
      <Outlet />
    </>
  );
}