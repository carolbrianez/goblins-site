export function SectionLabel({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-10 bg-plasma" />
      {index && <span className="font-mono text-[11px] tracking-[0.3em] text-plasma">{index}</span>}
      <span className="font-mono text-[11px] tracking-[0.3em] text-muted-foreground">{children}</span>
    </div>
  );
}
