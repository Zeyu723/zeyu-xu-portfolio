import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import About from "../components/About";
import AgentResearchPreview from "../components/AgentResearchPreview";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import PositioningPillars from "../components/PositioningPillars";
import Projects from "../components/Projects";
import ResearchInterests from "../components/ResearchInterests";
import Roadmap from "../components/Roadmap";
import Skills from "../components/Skills";
import SupervisionFit from "../components/SupervisionFit";
import { notes } from "../content/portfolio";

const latestNotes = notes.slice(0, 2);

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Hero />
      <PositioningPillars />
      <ResearchInterests />
      <AgentResearchPreview />
      <Projects />

      <section className="section-container py-28">
        <div className="editorial-grid mb-12 items-end">
          <div className="md:col-span-6">
            <p className="label-mono mb-4 text-accent">Writing</p>
            <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
              Research notes
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Link
              to="/notes"
              className="inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              Read all notes
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {latestNotes.map((note) => (
            <Link
              key={note.slug}
              to={`/notes/${note.slug}`}
              className="group border-t border-border pt-8 transition-colors hover:border-accent"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="label-mono text-accent">{note.category}</span>
                <span className="label-mono">{note.date}</span>
              </div>
              <h3 className="mb-5 text-3xl font-bold leading-tight group-hover:text-accent">
                {note.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{note.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <Roadmap />
      <About />
      <Skills />
      <Experience />
      <SupervisionFit />
      <Contact />
    </motion.div>
  );
}
