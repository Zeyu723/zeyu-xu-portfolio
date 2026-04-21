import { ArrowLeft, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { notes } from "../content/portfolio";

export default function NoteDetail() {
  const { slug } = useParams();
  const note = notes.find((item) => item.slug === slug);

  if (!note) {
    return (
      <div className="section-container min-h-[60vh] pt-40">
        <Link to="/notes" className="label-mono text-accent">Back to notes</Link>
        <h1 className="mt-8 text-4xl font-bold">Note not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <article className="mx-auto max-w-3xl px-6">
        <Link
          to="/notes"
          className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-transform hover:-translate-x-1"
        >
          <ArrowLeft size={16} /> Back to notes
        </Link>

        <header className="mb-12">
          <div className="mb-6 flex items-center gap-6">
            <span className="label-mono text-accent">{note.category}</span>
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <Clock size={14} /> {note.readTime}
            </span>
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-6xl">
            {note.title}
          </h1>
          <p className="label-mono mt-6">Published {note.date}</p>
        </header>

        <div className="accent-line mb-12" />

        <div className="space-y-8">
          {note.content.map((paragraph) => (
            <p key={paragraph} className="text-xl leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="mt-16 border-t border-border pt-8">
          <div className="flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <span key={tag} className="border border-border px-3 py-1.5 text-xs text-muted">
                {tag}
              </span>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
}
