import { ArrowUpRight, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "../content/portfolio";

const featuredProjects = projects.slice(0, 4);

export default function Projects() {
  return (
    <section id="projects" className="section-container py-28">
      <div className="editorial-grid mb-16 items-end">
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="label-mono mb-4 text-accent"
          >
            Evidence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-bold leading-none md:text-7xl"
          >
            Selected projects
          </motion.h2>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <div className="accent-line mb-8" />
          <p className="text-lg leading-relaxed text-muted">
            Work from capstone research, hackathons, computer vision, and digital forensics.
          </p>
        </div>
      </div>

      <div className="space-y-14">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ x: 8 }}
            className="group relative grid gap-8 overflow-hidden border-t border-border pt-10 lg:grid-cols-12"
          >
            <motion.div
              aria-hidden="true"
              className="absolute left-0 top-0 h-px bg-accent"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="lg:col-span-3">
              <div className="mb-4 flex items-center gap-4">
                <span className="font-mono text-sm text-accent">0{index + 1}</span>
                <span className="h-px w-12 bg-border transition-colors group-hover:bg-accent" />
                <span className="label-mono">{project.period}</span>
              </div>
              <p className="text-sm text-muted">{project.category}</p>
            </div>

            <div className="lg:col-span-6">
              <Link to={`/projects/${project.slug}`} className="block">
                <h3 className="mb-5 text-3xl font-bold leading-tight transition-colors group-hover:text-accent md:text-5xl">
                  {project.title}
                </h3>
              </Link>
              <p className="max-w-3xl text-lg leading-relaxed text-muted">{project.summary}</p>
              {project.recognition && (
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Trophy size={17} className="text-accent" />
                  {project.recognition}
                </div>
              )}
            </div>

            <div className="lg:col-span-3">
              <div className="mb-8 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="border border-border bg-background/70 px-3 py-1.5 text-xs text-muted transition-colors group-hover:border-accent/40 group-hover:text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/projects/${project.slug}`}
                className="inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-accent"
              >
                Read case study
                <span className="flex h-10 w-10 items-center justify-center border border-border transition-colors group-hover:border-accent group-hover:text-accent">
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
