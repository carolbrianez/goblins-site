export function Atmosphere() {
  return (
    <>
      {/* film grain */}
      <div className="pointer-events-none fixed inset-0 z-[70] grain opacity-100" aria-hidden />

      {/* global vignette */}
      <div className="pointer-events-none fixed inset-0 z-[60] vignette" aria-hidden />

      {/* faint scanlines */}
      <div
        className="pointer-events-none fixed inset-0 z-[65] opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 2px, rgba(255,255,255,0.4) 3px, transparent 4px)",
        }}
        aria-hidden
      />

      {/* HUD corners */}
      <div className="pointer-events-none fixed left-3 top-20 z-[55] hidden lg:block" aria-hidden>
        <div className="font-mono text-[10px] tracking-[0.3em] text-plasma/70 flicker">
          ◢ SYS.GOBLIN_v4.20 // SIGNAL ONLINE
        </div>
      </div>
      <div className="pointer-events-none fixed right-3 top-20 z-[55] hidden lg:block" aria-hidden>
        <div className="font-mono text-[10px] tracking-[0.3em] text-plasma/70">
          LAT: -23.55° // LON: -46.63° ◣
        </div>
      </div>

      {/* bottom ticker */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[55] hidden border-t border-plasma/20 bg-background/60 backdrop-blur-sm lg:block">
        <div className="overflow-hidden py-1.5">
          <div className="ticker flex whitespace-nowrap font-mono text-[10px] tracking-[0.35em] text-plasma/70">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex shrink-0 gap-8 px-8">
                <span>◢ AAA Power · Indie Soul</span>
                <span>◢ UNREAL ENGINE 5 SPECIALISTS</span>
                <span>◢ FULL DEV · CO-DEV · OUTSOURCE</span>
                <span>◢ NOW BUILDING: EVERLEN // BOOKATOON</span>
                <span>◢ WE ARE ALL ARTISTS</span>
                <span>◢ ACCEPTING Q1 2026 PROJECTS</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
