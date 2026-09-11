import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CloudRain,
  Crosshair,
  Map,
  Navigation,
  Radar,
  Route as RouteIcon,
  TriangleAlert,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import floodMapAsset from "@/assets/floodops-city-map.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FLOODOPS | Urban Flood Decision Support" },
      {
        name: "description",
        content:
          "Operational flood intelligence for prediction, risk monitoring, flood-depth visualization, and safer route planning.",
      },
      { property: "og:title", content: "FLOODOPS | Urban Flood Decision Support" },
      {
        property: "og:description",
        content: "Predict urban flood risk and coordinate safer emergency response with FLOODOPS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const capabilities = [
  {
    icon: CloudRain,
    title: "Rainfall Nowcast",
    detail: "Street-level precipitation outlook",
    status: "LIVE",
    tone: "text-primary",
  },
  {
    icon: Waves,
    title: "Flood Depth Mapping",
    detail: "Dynamic inundation surfaces",
    status: "0–2.4 M",
    tone: "text-primary",
  },
  {
    icon: TriangleAlert,
    title: "Risk Detection",
    detail: "Critical exposure monitoring",
    status: "3 ALERTS",
    tone: "text-critical",
  },
  {
    icon: RouteIcon,
    title: "Safe Routes",
    detail: "Flood-aware response routing",
    status: "ACTIVE",
    tone: "text-warning",
  },
];

const timeline = [
  { label: "NOW", depth: "0.4m", level: "WATCH", width: "w-1/4" },
  { label: "+1H", depth: "0.9m", level: "RISING", width: "w-2/5" },
  { label: "+2H", depth: "1.6m", level: "WARNING", width: "w-2/3" },
  { label: "+3H", depth: "2.1m", level: "CRITICAL", width: "w-[88%]" },
];

const letterDelays = [
  "delay-[0ms]",
  "delay-[70ms]",
  "delay-[140ms]",
  "delay-[210ms]",
  "delay-[280ms]",
  "delay-[350ms]",
  "delay-[420ms]",
  "delay-[490ms]",
];

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid size-9 place-items-center border border-primary/40 bg-primary/8 text-primary shadow-[0_0_24px_var(--glow-primary)]">
        <Radar aria-hidden="true" className="size-5" />
        <span className="absolute right-0 top-0 size-1.5 bg-critical" />
      </div>
      <div>
        <div className="font-display text-[15px] font-bold tracking-[0.18em] text-foreground">FLOODOPS</div>
        <div className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Urban Flood Decision Support
        </div>
      </div>
    </div>
  );
}

function MapVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative isolate overflow-hidden border border-border bg-card ${compact ? "min-h-52" : "min-h-[390px] lg:min-h-[470px]"}`}
    >
      <img
        src={floodMapAsset.url}
        alt="Urban flood-depth intelligence map showing monitored roads and critical zones"
        width={1400}
        height={1050}
        className="absolute inset-0 size-full object-cover opacity-80 saturate-75"
      />
      <div className="map-shade absolute inset-0" />
      <div className="absolute left-3 top-3 flex items-center gap-2 border border-primary/30 bg-background/85 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-primary backdrop-blur-md">
        <span className="size-1.5 animate-pulse bg-primary" /> Live inundation model
      </div>
      <div className="absolute right-3 top-3 border border-border bg-background/85 px-2.5 py-1.5 text-right backdrop-blur-md">
        <div className="font-mono text-[9px] uppercase text-muted-foreground">Model confidence</div>
        <div className="font-mono text-sm font-semibold text-foreground">94.7%</div>
      </div>

      {!compact && (
        <>
          <div className="absolute left-[58%] top-[54%] grid size-9 place-items-center rounded-full border border-critical/70 bg-critical/15 text-critical shadow-[0_0_28px_var(--glow-critical)]">
            <Crosshair aria-hidden="true" className="size-4" />
          </div>
          <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 border border-border bg-background/90 backdrop-blur-md">
            <div className="px-3 py-2.5">
              <p className="font-mono text-[8px] uppercase text-muted-foreground">Peak depth</p>
              <p className="mt-0.5 font-mono text-sm font-semibold text-primary">2.4 m</p>
            </div>
            <div className="border-x border-border px-3 py-2.5">
              <p className="font-mono text-[8px] uppercase text-muted-foreground">Road closures</p>
              <p className="mt-0.5 font-mono text-sm font-semibold text-critical">08</p>
            </div>
            <div className="px-3 py-2.5">
              <p className="font-mono text-[8px] uppercase text-muted-foreground">Safe corridors</p>
              <p className="mt-0.5 font-mono text-sm font-semibold text-warning">12</p>
            </div>
          </div>
        </>
      )}
      <span className="absolute bottom-0 left-0 size-8 border-b border-l border-primary/60" />
      <span className="absolute right-0 top-0 size-8 border-r border-t border-primary/60" />
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="border-b border-border bg-background/95">
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Brand />
          <Button asChild variant="outline" className="h-9 border-primary/40 bg-primary/5 px-3 text-xs text-primary hover:bg-primary/10 hover:text-primary sm:px-4">
            <a href="/login">
              Operator Login <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-[1400px] gap-10 px-5 pb-8 pt-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-12 lg:pb-10 lg:pt-14">
        <div className="relative z-10">
          <div className="mb-5 flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-8 bg-primary" /> Urban Flood Intelligence
          </div>
          <h1 aria-label="FLOODOPS" className="font-display text-5xl font-black leading-none text-foreground sm:text-7xl lg:text-[88px]">
            {"FLOODOPS".split("").map((letter, index) => (
              <span key={`${letter}-${index}`} className={`brand-letter inline-block ${letterDelays[index] ?? ""}`}>
                {letter}
              </span>
            ))}
          </h1>
          <div className="my-6 h-px max-w-xl bg-border">
            <div className="h-px w-1/3 bg-primary" />
          </div>
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-[1.08] sm:text-4xl">
            Predict Flood Risk. <span className="text-primary">Respond Before It Escalates.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
            Real-time flood prediction, risk monitoring, flood-depth visualization, and safer route intelligence for decisive urban response.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-l border-primary pl-4 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            <span className="flex items-center gap-2"><span className="size-1.5 bg-primary" /> System operational</span>
            <span>Model sync 08:42:16 UTC</span>
          </div>
        </div>

        <MapVisual />
      </section>

      <section className="border-y border-border bg-panel/55">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-border px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:px-12">
          {capabilities.map(({ icon: Icon, title, detail, status, tone }) => (
            <article key={title} className="group flex min-h-28 items-center gap-4 px-1 py-5 sm:px-5 lg:first:pl-0 lg:last:pr-0">
              <div className={`grid size-10 shrink-0 place-items-center border border-border bg-background ${tone}`}>
                <Icon aria-hidden="true" className="size-[18px]" />
              </div>
              <div className="min-w-0">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="truncate text-sm font-semibold">{title}</h3>
                  <span className={`font-mono text-[8px] font-semibold ${tone}`}>{status}</span>
                </div>
                <p className="text-[11px] text-muted-foreground">{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-7 px-5 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-12 lg:py-12">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-warning">
            <span className="size-1.5 bg-warning" /> Predictive simulation
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">See How Flooding Evolves</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Track projected water depth across the next three hours to prioritize warnings, closures, and field response.
          </p>
          <div className="mt-6 space-y-3">
            {timeline.map((point) => (
              <div key={point.label} className="grid grid-cols-[42px_1fr_64px] items-center gap-3 font-mono text-[9px]">
                <span className="font-semibold text-foreground">{point.label}</span>
                <div className="h-1 bg-muted"><div className={`h-full bg-primary ${point.width}`} /></div>
                <span className={point.level === "CRITICAL" ? "text-critical" : point.level === "WARNING" ? "text-warning" : "text-muted-foreground"}>{point.depth}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <MapVisual compact />
          <div className="absolute bottom-3 left-3 right-3 grid grid-cols-4 border border-border bg-background/90 backdrop-blur-md">
            {timeline.map((point, index) => (
              <div key={point.label} className={`px-2 py-2 ${index > 0 ? "border-l border-border" : ""}`}>
                <p className="font-mono text-[9px] font-semibold text-foreground">{point.label}</p>
                <p className={`mt-0.5 font-mono text-[7px] ${point.level === "CRITICAL" ? "text-critical" : point.level === "WARNING" ? "text-warning" : "text-primary"}`}>{point.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-primary/20 bg-primary/5">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-5 px-5 py-8 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-critical">
              <span className="size-1.5 animate-pulse bg-critical" /> Time-critical decisions
            </div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Respond Before the Flood Escalates.</h2>
          </div>
          <Button asChild size="lg" className="h-11 bg-primary px-5 text-xs font-bold text-primary-foreground shadow-[0_0_30px_var(--glow-primary)] hover:bg-primary/90">
            <a href="/login">
              Operator Login <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-5 text-[10px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div className="flex items-center gap-2"><Map aria-hidden="true" className="size-3 text-primary" /> FLOODOPS — Urban Flood Decision Support</div>
        <div className="flex items-center gap-2 font-mono uppercase tracking-[0.12em]"><Navigation aria-hidden="true" className="size-3" /> Operational intelligence platform</div>
      </footer>
    </main>
  );
}