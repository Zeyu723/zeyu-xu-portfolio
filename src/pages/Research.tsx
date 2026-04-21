import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { profile, researchInterests } from "../content/portfolio";

export default function ResearchPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="section-container mb-20">
        <p className="label-mono mb-4 text-accent">Academic Focus</p>
        <h1 className="font-display text-6xl font-bold leading-none md:text-8xl">
          Research
        </h1>
        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-muted">
          {profile.researchStatement} The common thread is practical methodology: systems should
          be measurable, explainable, usable beyond a demo, and careful about what they are allowed
          to do.
        </p>
      </section>

      <section className="section-container space-y-20">
        {researchInterests.map((area, index) => (
          <motion.article
            key={area.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="editorial-grid border-t border-border pt-10"
          >
            <div className="md:col-span-5">
              <p className="label-mono mb-4 text-accent">Area 0{index + 1}</p>
              <h2 className="text-4xl font-bold leading-tight">{area.title}</h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {area.methods.map((method) => (
                  <span key={method} className="border border-border px-3 py-1.5 text-xs text-muted">
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="mb-8 text-lg leading-relaxed text-muted">{area.summary}</p>
              <div className="border-l border-accent pl-6">
                <h3 className="mb-3 text-xl font-bold">Supervisor fit</h3>
                <p className="leading-relaxed text-muted">{area.supervisorFit}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="mt-28 bg-foreground py-24 text-background">
        <div className="section-container grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label-mono mb-4 text-background/70">Next Step</p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
              Looking for graduate supervision where research questions meet deployable engineering.
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="mb-8 text-lg leading-relaxed text-background/70">
              I would like to discuss research fit around reliable AI agents, human-AI workflows,
              secure deployment, and applied intelligent systems.
            </p>
            <Link
              to="/agent-research"
              className="inline-flex bg-background px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-white"
            >
              View Agent Lab
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
