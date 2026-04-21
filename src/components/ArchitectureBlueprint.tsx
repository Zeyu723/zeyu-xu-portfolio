import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { architectureLayers } from "../content/portfolio";

export default function ArchitectureBlueprint() {
  const [activeId, setActiveId] = useState(architectureLayers[0].id);
  const activeLayer = useMemo(
    () => architectureLayers.find((layer) => layer.id === activeId) ?? architectureLayers[0],
    [activeId],
  );

  return (
    <section className="section-container py-28">
      <div className="editorial-grid mb-16 items-end">
        <div className="md:col-span-5">
          <p className="label-mono mb-4 text-accent">Interactive Blueprint</p>
          <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
            A system, not a chatbot.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-xl leading-relaxed text-muted">
            Click through the layers to see how I think about long-running personal AI:
            interface stability, routing, tool execution, memory, and governance.
          </p>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-border md:block" />
          <div className="space-y-4">
            {architectureLayers.map((layer, index) => {
              const active = layer.id === activeId;

              return (
                <button
                  key={layer.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveId(layer.id)}
                  onMouseEnter={() => setActiveId(layer.id)}
                  className={`group relative grid w-full grid-cols-[3rem_1fr] items-center gap-4 border-t py-5 text-left transition-colors ${
                    active ? "border-accent text-foreground" : "border-border text-muted hover:border-accent"
                  }`}
                >
                  <span
                    className={`relative z-10 flex h-10 w-10 items-center justify-center font-mono text-xs transition-colors ${
                      active ? "bg-accent text-white" : "border border-border bg-background text-muted group-hover:border-accent"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span>
                    <span className="block text-2xl font-bold leading-tight">{layer.title}</span>
                    <span className="label-mono mt-2 block">{layer.label}</span>
                  </span>
                  {active && (
                    <motion.span
                      layoutId="blueprint-active-line"
                      className="absolute bottom-0 left-0 h-px w-full bg-accent"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="scan-panel relative min-h-[29rem] overflow-hidden border-y border-border py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="label-mono mb-5 text-accent">{activeLayer.label}</p>
                <h3 className="mb-6 text-5xl font-bold leading-none md:text-6xl">
                  {activeLayer.title}
                </h3>
                <p className="mb-10 max-w-2xl text-xl leading-relaxed text-muted">
                  {activeLayer.summary}
                </p>
                <div className="space-y-5">
                  {activeLayer.details.map((detail) => (
                    <div key={detail} className="flex gap-4 border-t border-border pt-5 text-lg text-muted">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
