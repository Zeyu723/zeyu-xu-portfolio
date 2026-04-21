import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="pb-20 pt-32">
      <section className="section-container mb-8">
        <span className="label-mono mb-4 block text-accent">Connect</span>
        <h1 className="mb-10 text-6xl font-bold uppercase md:text-8xl">Contact</h1>
        <div className="accent-line" />
      </section>
      <Contact />
    </div>
  );
}
