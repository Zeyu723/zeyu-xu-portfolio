import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import { profile } from "../content/portfolio";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <section className="section-container mb-12">
        <p className="label-mono mb-4 text-accent">About</p>
        <h1 className="font-display text-6xl font-bold leading-none md:text-8xl">
          {profile.name}
        </h1>
        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-muted">
          {profile.supervisorPitch}
        </p>
      </section>

      <About />
      <Skills />
      <Experience />
    </div>
  );
}
