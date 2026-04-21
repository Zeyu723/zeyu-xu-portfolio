import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../content/portfolio";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="section-container min-h-[60vh] pt-40">
        <Link to="/projects" className="label-mono text-accent">Back to projects</Link>
        <h1 className="mt-8 text-4xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <article className="section-container">
        <Link
          to="/projects"
          className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-transform hover:-translate-x-1"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <header className="editorial-grid mb-16 items-end">
          <div className="md:col-span-8">
            <p className="label-mono mb-4 text-accent">{project.category}</p>
            <h1 className="font-display text-5xl font-bold leading-none md:text-7xl">
              {project.title}
            </h1>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <p className="label-mono mb-2">Period</p>
            <p className="text-2xl font-bold">{project.period}</p>
          </div>
        </header>

        <div className="editorial-grid">
          <aside className="space-y-10 md:col-span-4">
            <div>
              <h2 className="label-mono mb-3 text-accent">Context</h2>
              <p className="text-lg font-semibold">{project.context}</p>
            </div>
            <div>
              <h2 className="label-mono mb-3 text-accent">Role</h2>
              <p className="text-lg font-semibold">{project.role}</p>
            </div>
            <div>
              <h2 className="label-mono mb-4 text-accent">Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="border border-border px-3 py-1.5 text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-foreground px-5 py-4 text-sm font-semibold text-background transition-colors hover:bg-accent"
              >
                Open live demo
                <ExternalLink size={17} />
              </a>
            )}
          </aside>

          <div className="space-y-12 md:col-span-7 md:col-start-6">
            <section>
              <h2 className="mb-5 text-3xl font-bold">Summary</h2>
              <p className="text-xl leading-relaxed text-muted">{project.summary}</p>
            </section>

            {project.recognition && (
              <section className="border-l border-accent pl-6">
                <h2 className="mb-3 text-2xl font-bold">Recognition</h2>
                <p className="text-lg text-muted">{project.recognition}</p>
              </section>
            )}

            <section>
              <h2 className="mb-5 text-3xl font-bold">Highlights</h2>
              <ul className="space-y-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-4 text-lg leading-relaxed text-muted">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
