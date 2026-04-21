import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { notes } from "../content/portfolio";

export default function NotesPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="section-container mb-20">
        <p className="label-mono mb-4 text-accent">Knowledge Base</p>
        <h1 className="font-display text-6xl font-bold leading-none md:text-8xl">
          Notes
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted">
          Short research notes on AI-agent architecture, applied AI, security-aware workflows,
          and human-centred interfaces.
        </p>
      </section>

      <section className="section-container">
        <div className="max-w-4xl space-y-12">
          {notes.map((note, index) => (
            <motion.article
              key={note.slug}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
              className="group border-b border-border pb-12"
            >
              <Link to={`/notes/${note.slug}`} className="block">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="label-mono text-accent">{note.category}</span>
                  <span className="label-mono">{note.date}</span>
                </div>
                <h2 className="mb-6 text-4xl font-bold leading-tight transition-colors group-hover:text-accent">
                  {note.title}
                </h2>
                <p className="text-lg leading-relaxed text-muted">{note.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
