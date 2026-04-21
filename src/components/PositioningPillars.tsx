import { motion } from "motion/react";
import { positioningPillars } from "../content/portfolio";

export default function PositioningPillars() {
  return (
    <section className="section-container py-24">
      <div className="editorial-grid mb-14 items-end">
        <div className="md:col-span-5">
          <p className="label-mono mb-4 text-accent">Positioning</p>
          <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
            One direction, three anchors.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-xl leading-relaxed text-muted">
            The site is built for one audience first: a mentor who wants to know what I can build,
            what I want to research, and whether my direction can become a real project.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {positioningPillars.map((pillar, index) => (
          <motion.article
            key={pillar.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden border-t border-border pt-8"
          >
            <motion.div
              aria-hidden="true"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-0 h-px bg-accent"
            />
            <p className="label-mono mb-8 text-accent">{pillar.label}</p>
            <h3 className="mb-5 text-3xl font-bold leading-tight group-hover:text-accent">
              {pillar.title}
            </h3>
            <p className="mb-8 text-base leading-relaxed text-muted">{pillar.summary}</p>
            <div className="space-y-3">
              {pillar.points.map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-muted">
                  <span className="h-1.5 w-1.5 bg-accent" />
                  {point}
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
