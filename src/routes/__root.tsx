import { Outlet, Link, createRootRoute, useRouter } from "@tanstack/react-router";
import { Atmosphere } from "@/components/site/Atmosphere";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-xs tracking-[0.3em] text-plasma">// ERR_SIGNAL_LOST</div>
        <h1 className="mt-4 font-display text-7xl tracking-wider text-foreground glow-text">404</h1>
        <h2 className="mt-4 font-display text-xl tracking-[0.2em] text-foreground">PORTAL NOT FOUND</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The world you are looking for hasn't been built yet — or it never was.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-plasma text-xs">RETURN TO BASE</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-xs tracking-[0.3em] text-blood">// FATAL_EXCEPTION</div>
        <h1 className="mt-4 font-display text-2xl tracking-[0.18em] text-foreground">
          THIS PAGE FAILED TO COMPILE
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something glitched in the pipeline. Try reloading or go back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-plasma text-xs">
            RETRY
          </button>
          <a href="/" className="btn-ghost text-xs">HOME</a>
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