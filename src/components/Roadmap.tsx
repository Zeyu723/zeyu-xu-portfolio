import { motion } from "motion/react";
import { roadmap } from "../content/portfolio";

export default function Roadmap() {
  return (
    <section className="section-container py-28">
      <div className="editorial-grid mb-16 items-end">
        <div className="md:col-span-6">
          <p className="label-mono mb-4 text-accent">Trajectory</p>
          <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
            From portfolio to research path.
          </h2>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <p className="text-lg leading-relaxed text-muted">
            This gives the site a direction of travel: useful now for supervisors, expandable later
            into a knowledge garden and agent lab.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block" />
        <div className="space-y-10">
          {roadmap.map((item, index) => (
            <motion.article
              key={item.phase}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="grid gap-6 border-t border-border pt-8 md:grid-cols-12 md:border-t-0 md:pt-0"
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-5">
                  <motion.span
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.25 }}
                    className="relative z-10 flex h-9 w-9 items-center justify-center bg-accent font-mono text-xs font-semibold text-white"
                  >
                    {index + 1}
                  </motion.span>
                  <span className="text-2xl font-bold">{item.phase}</span>
                </div>
              </div>
              <div className="md:col-span-5">
                <h3 className="mb-4 text-3xl font-bold leading-tight">{item.title}</h3>
                <p className="text-base leading-relaxed text-muted">{item.summary}</p>
              </div>
              <div className="md:col-span-4">
                <div className="flex flex-wrap gap-2">
                  {item.outputs.map((output) => (
                    <span key={output} className="border border-border px-3 py-1.5 text-xs text-muted">
                      {output}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
