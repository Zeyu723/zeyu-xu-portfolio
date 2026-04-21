import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { agentResearch } from "../content/portfolio";

const architecture = ["Controller", "Orchestration", "Execution", "Memory"];

export default function AgentResearchPreview() {
  return (
    <section className="relative overflow-hidden bg-foreground py-28 text-background">
      <div className="agent-grid absolute inset-0 opacity-45" />
      <motion.div
        aria-hidden="true"
        initial={{ x: "-30%", opacity: 0 }}
        whileInView={{ x: "110%", opacity: [0, 0.8, 0] }}
        viewport={{ once: false }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 h-px w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
      />

      <div className="section-container relative z-10">
        <div className="editorial-grid mb-16 items-end">
          <div className="md:col-span-7">
            <p className="label-mono mb-4 text-background/60">Agent Research</p>
            <h2 className="font-display text-5xl font-bold leading-none text-background md:text-7xl">
              Personal AI systems, treated as architecture.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-lg leading-relaxed text-background/70">
              A public version of my self-directed work on stable controllers, modular execution,
              layered memory, and governed tool use.
            </p>
            <Link
              to="/agent-research"
              className="mt-8 inline-flex items-center gap-3 bg-background px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-white"
            >
              Open Agent Lab
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative border-y border-background/20 py-9">
              <div className="absolute inset-y-0 left-10 w-px bg-background/20" />
              <div className="space-y-7">
                {architecture.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="relative flex items-center gap-6"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.35, 1], opacity: [0.65, 1, 0.65] }}
                      transition={{ duration: 2.4, delay: index * 0.25, repeat: Infinity }}
                      className="z-10 flex h-20 w-20 shrink-0 items-center justify-center border border-background/25 bg-foreground font-mono text-sm text-accent"
                    >
                      0{index + 1}
                    </motion.span>
                    <span className="text-2xl font-bold text-background">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-6 lg:col-start-7">
            {agentResearch.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group border-t border-background/20 pt-7"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="font-mono text-sm text-accent">0{index + 1}</span>
                  <span className="h-px flex-1 bg-background/20 transition-colors group-hover:bg-accent" />
                </div>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-background group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-background/70">{item.summary}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
