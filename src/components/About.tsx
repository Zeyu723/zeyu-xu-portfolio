import { motion } from "motion/react";
import { profile } from "../content/portfolio";

export default function About() {
  return (
    <section id="about" className="section-container py-28">
      <div className="editorial-grid">
        <div className="md:col-span-5">
          <p className="label-mono mb-4 text-accent">Profile</p>
          <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
            Built for research, grounded in software engineering
          </h2>
        </div>

        <div className="space-y-8 md:col-span-6 md:col-start-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl leading-relaxed text-foreground"
          >
            I am a {profile.degree} student at {profile.university}, expected to graduate in 2026.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-lg leading-relaxed text-muted"
          >
            My current work connects Android development, applied machine learning, and security.
            I care about systems that can be explained, evaluated, and deployed, especially when
            they support investigation or decision-making in real-world environments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="grid gap-6 border-t border-border pt-8 sm:grid-cols-3"
          >
            <div>
              <p className="label-mono mb-2 text-accent">Location</p>
              <p className="font-semibold">{profile.location}</p>
            </div>
            <div>
              <p className="label-mono mb-2 text-accent">Degree</p>
              <p className="font-semibold">{profile.expected}</p>
            </div>
            <div>
              <p className="label-mono mb-2 text-accent">Status</p>
              <p className="font-semibold">{profile.availability}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
