import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../content/portfolio";

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <div className="pt-32 pb-20">
      <section className="section-container mb-20">
        <p className="label-mono mb-4 text-accent">Portfolio Archive</p>
        <h1 className="font-display text-6xl font-bold leading-none md:text-8xl">
          Projects
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted">
          CV-backed project work across AI agents, mobile security, hackathon prototypes,
          full-stack systems, computer vision, WebGL, and digital forensics.
        </p>

        <div className="mt-12 flex flex-wrap gap-3 border-b border-border pb-8">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm font-semibold transition-colors ${
                filter === category
                  ? "bg-accent text-white"
                  : "border border-border text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="grid gap-10 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group border-t border-border pt-8"
            >
              <Link to={`/projects/${project.slug}`} className="block">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="label-mono text-accent">{project.category}</span>
                  <span className="label-mono">{project.period}</span>
                </div>
                <h2 className="mb-5 text-3xl font-bold leading-tight transition-colors group-hover:text-accent">
                  {project.title}
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-muted">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tag) => (
                    <span key={tag} className="border border-border px-3 py-1.5 text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
