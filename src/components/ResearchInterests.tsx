import { motion } from "motion/react";
import { profile, researchInterests } from "../content/portfolio";

export default function ResearchInterests() {
  return (
    <section id="research" className="section-container relative py-28">
      <div className="pointer-events-none absolute right-8 top-20 hidden h-44 w-44 border border-accent/15 md:block" />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 h-px origin-left bg-gradient-to-r from-accent via-border to-transparent"
      />

      <div className="editorial-grid mb-16 items-end">
        <div className="md:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="label-mono mb-4 text-accent"
          >
            Academic Direction
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-bold leading-none md:text-7xl"
          >
            Research interests
          </motion.h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.68, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl leading-relaxed text-muted"
          >
            {profile.researchStatement}
          </motion.p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {researchInterests.map((interest, index) => (
          <motion.article
            key={interest.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden border-t border-border pt-8"
          >
            <motion.div
              aria-hidden="true"
              className="absolute left-0 top-0 h-px bg-accent"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="reveal-sheen pointer-events-none absolute inset-x-0 top-0 h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-sm text-accent">0{index + 1}</span>
              <span className="h-px flex-1 bg-border mx-5" />
              <span className="label-mono">Fit</span>
            </div>
            <h3 className="mb-5 text-2xl font-bold leading-tight group-hover:text-accent">
              {interest.title}
            </h3>
            <p className="mb-8 text-sm leading-relaxed text-muted">{interest.summary}</p>
            <div className="mb-8 flex flex-wrap gap-2">
              {interest.methods.map((method) => (
                <span
                  key={method}
                  className="border border-border bg-background/70 px-3 py-1.5 text-xs text-muted transition-colors group-hover:border-accent/40 group-hover:text-foreground"
                >
                  {method}
                </span>
              ))}
            </div>
            <p className="border-l border-accent pl-5 text-sm leading-relaxed text-foreground">
              {interest.supervisorFit}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
