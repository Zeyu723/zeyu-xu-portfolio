import { motion } from "motion/react";
import { awards, education, experience } from "../content/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-container py-28">
      <div className="editorial-grid">
        <div className="md:col-span-5">
          <p className="label-mono mb-4 text-accent">Background</p>
          <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
            Education & recognition
          </h2>
        </div>

        <div className="space-y-20 md:col-span-6 md:col-start-7">
          <div className="space-y-10">
            <h3 className="border-b border-border pb-4 text-2xl font-bold">Education</h3>
            {education.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="grid gap-4 border-b border-border pb-8 sm:grid-cols-[10rem_1fr]"
              >
                <p className="label-mono text-accent">{item.period}</p>
                <div>
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                  <p className="mt-2 font-medium text-foreground">
                    {item.institution}, {item.location}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.details}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="space-y-10">
            <h3 className="border-b border-border pb-4 text-2xl font-bold">Awards</h3>
            {awards.map((award, index) => (
              <motion.article
                key={award.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="border-b border-border pb-8"
              >
                <h4 className="text-2xl font-bold">{award.title}</h4>
                <p className="mt-2 font-medium text-foreground">{award.event}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{award.detail}</p>
              </motion.article>
            ))}
          </div>

          <div className="space-y-10">
            <h3 className="border-b border-border pb-4 text-2xl font-bold">Professional Experience</h3>
            {experience.map((item, index) => (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="grid gap-4 sm:grid-cols-[10rem_1fr]"
              >
                <p className="label-mono text-accent">{item.period}</p>
                <div>
                  <h4 className="text-2xl font-bold">{item.role}</h4>
                  <p className="mt-2 font-medium text-foreground">{item.organization}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.details}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
