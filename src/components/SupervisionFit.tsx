import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { supervisionFit } from "../content/portfolio";

export default function SupervisionFit() {
  return (
    <section className="relative overflow-hidden bg-foreground py-28 text-background">
      <div className="agent-grid absolute inset-0 opacity-35" />
      <div className="section-container relative z-10">
        <div className="editorial-grid mb-16 items-end">
          <div className="md:col-span-7">
            <p className="label-mono mb-4 text-background/60">Graduate Supervision Fit</p>
            <h2 className="font-display text-5xl font-bold leading-none text-background md:text-7xl">
              The right mentor can turn this into a research path.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-lg leading-relaxed text-background/70">
              I am looking for a practical research environment with agent systems, applied AI,
              human-centred design, or trustworthy deployment.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {supervisionFit.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group border-t border-background/20 pt-8"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="font-mono text-sm text-accent">0{index + 1}</span>
                <span className="h-px flex-1 bg-background/20 transition-colors group-hover:bg-accent" />
              </div>
              <h3 className="mb-5 text-3xl font-bold leading-tight text-background group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mb-7 text-base leading-relaxed text-background/70">{item.summary}</p>
              <div className="flex flex-wrap gap-2">
                {item.signals.map((signal) => (
                  <span key={signal} className="border border-background/20 px-3 py-1.5 text-xs text-background/70">
                    {signal}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 border-t border-background/20 pt-10">
          <Link
            to="/agent-research"
            className="inline-flex items-center gap-3 bg-background px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-white"
          >
            Review the research direction
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
