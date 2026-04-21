import { Link } from "react-router-dom";
import { profile } from "../content/portfolio";

export default function Footer() {
  return (
    <footer className="section-container border-t border-border py-16">
      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
        <div>
          <Link to="/" className="font-display text-2xl font-bold">
            {profile.name}
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {profile.headline}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="label-mono mb-4">Navigation</p>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
              <li><Link to="/research" className="hover:text-accent">Research</Link></li>
              <li><Link to="/notes" className="hover:text-accent">Notes</Link></li>
              <li><Link to="/about" className="hover:text-accent">About</Link></li>
            </ul>
          </div>
          <div>
            <p className="label-mono mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href={`mailto:${profile.email}`} className="hover:text-accent">{profile.email}</a></li>
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a></li>
              <li><a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row">
        <p>(c) {new Date().getFullYear()} {profile.name}. Portfolio prepared for academic and professional review.</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
