import { motion } from "motion/react";
import { skillGroups } from "../content/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-container py-28">
      <div className="editorial-grid mb-16 items-end">
        <div className="md:col-span-6">
          <p className="label-mono mb-4 text-accent">Technical Base</p>
          <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
            Skills
          </h2>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <p className="text-lg leading-relaxed text-muted">
            A practical stack for building agent-backed workflows, full-stack products, mobile apps,
            computer-vision interfaces, and security-aware systems.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="border-t border-border pt-7"
          >
            <h3 className="mb-7 text-xl font-bold">{group.category}</h3>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted">
                  <span className="h-1.5 w-1.5 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
