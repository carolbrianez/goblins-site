import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
