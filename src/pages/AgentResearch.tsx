import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ArchitectureBlueprint from "../components/ArchitectureBlueprint";
import { agentResearch, profile } from "../content/portfolio";

const principles = [
  "Identity should be explicit rather than improvised by each session.",
  "Memory should be layered across user profile, project context, transient state, and system rules.",
  "Tools should be documented, permissioned, and traceable.",
  "Local-first workflows are preferred where privacy, control, or cost matters.",
  "The system should remain understandable enough to maintain over time.",
];

const experiments = [
  "Compared 10+ model providers and local deployments for capability, cost, stability, and workflow fit.",
  "Explored single-controller / multi-backend architecture to reduce identity drift in long-running work.",
  "Designed governance-file patterns for identity, memory, tools, boundaries, and project knowledge.",
  "Studied tool-backed workflows against model-only chat for coding, research, planning, and study support.",
];

export default function AgentResearchPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="section-container mb-24">
        <div className="editorial-grid items-end">
          <div className="md:col-span-8">
            <p className="label-mono mb-4 text-accent">Agent Lab</p>
            <h1 className="font-display text-6xl font-bold leading-none md:text-8xl">
              Personal AI agent systems
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-xl leading-relaxed text-muted">
              Public-facing notes on my self-directed research into governable, execution-capable
              AI systems for real work, study, planning, and life management.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground py-24 text-background">
        <div className="agent-grid absolute inset-0 opacity-40" />
        <div className="section-container relative z-10 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="label-mono mb-4 text-background/60">Core Question</p>
            <h2 className="font-display text-4xl font-bold leading-tight text-background md:text-6xl">
              How can AI move beyond chat and become a stable operating layer?
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-2xl leading-relaxed text-background">
              My current answer is architectural: one stable interaction surface, modular execution
              engines, layered memory, explicit boundaries, and auditable tool use.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {["Single controller", "Modular engines", "Layered memory", "Governed tools"].map(
                (item) => (
                  <div key={item} className="border-t border-background/20 pt-4">
                    <span className="label-mono text-accent">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <ArchitectureBlueprint />

      <section className="section-container py-28">
        <div className="editorial-grid mb-16 items-end">
          <div className="md:col-span-5">
            <p className="label-mono mb-4 text-accent">Research Tracks</p>
            <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
              What I am studying
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-lg leading-relaxed text-muted">
              This is not generic AI-tool enthusiasm. I am trying to understand the structure
              required for personal agents to remain useful, safe, and maintainable over time.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {agentResearch.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="editorial-grid border-t border-border pt-10"
            >
              <div className="md:col-span-4">
                <p className="label-mono mb-4 text-accent">Track 0{index + 1}</p>
                <h3 className="text-4xl font-bold leading-tight">{item.title}</h3>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <p className="mb-8 text-xl leading-relaxed text-muted">{item.summary}</p>
                <ul className="space-y-4">
                  {item.evidence.map((point) => (
                    <li key={point} className="flex gap-4 text-base leading-relaxed text-muted">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-container pb-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label-mono mb-4 text-accent">Design Principles</p>
            <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
              Governed, not improvised.
            </h2>
          </div>
          <div className="space-y-14 lg:col-span-6 lg:col-start-7">
            <div>
              <h3 className="mb-7 text-2xl font-bold">Principles</h3>
              <ul className="space-y-5">
                {principles.map((principle) => (
                  <li key={principle} className="border-t border-border pt-5 text-lg text-muted">
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-7 text-2xl font-bold">Experimentation</h3>
              <ul className="space-y-5">
                {experiments.map((experiment) => (
                  <li key={experiment} className="border-t border-border pt-5 text-lg text-muted">
                    {experiment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="border-t border-border pt-12">
          <div className="editorial-grid items-center">
            <div className="md:col-span-7">
              <p className="label-mono mb-4 text-accent">Research Fit</p>
              <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
                I am looking for supervision around reliable agents, human-AI workflows, and deployable intelligent systems.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="mb-8 text-lg leading-relaxed text-muted">
                My cyber-security background gives this work a practical concern for boundaries,
                auditability, and trustworthy execution.
              </p>
              <a
                href={`mailto:${profile.email}?subject=AI agent research conversation`}
                className="inline-flex items-center gap-3 bg-foreground px-6 py-4 text-sm font-semibold text-background transition-colors hover:bg-accent"
              >
                Discuss research fit
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
