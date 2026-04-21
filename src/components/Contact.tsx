import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "../content/portfolio";

export default function Contact() {
  const links = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}?subject=Graduate research conversation`,
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/zeyu-xu-658a51286",
      href: profile.linkedin,
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/zeyu-xu",
      href: profile.github,
      icon: Github,
    },
    {
      label: "Live demo",
      value: "galaxy-zeyu.vercel.app",
      href: profile.portfolioDemo,
      icon: ExternalLink,
    },
  ];

  return (
    <section id="contact" className="section-container py-28">
      <div className="editorial-grid items-start">
        <div className="md:col-span-5">
          <p className="label-mono mb-4 text-accent">Contact</p>
          <h2 className="font-display text-5xl font-bold leading-none md:text-7xl">
            Start a research conversation
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted">
            I am happy to share code samples, discuss the Android malware-detection capstone,
            or talk through potential graduate supervision fit.
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="grid gap-4">
            {links.map((link, index) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="group flex items-center justify-between gap-6 border-t border-border py-6 transition-colors hover:border-accent"
                >
                  <span className="flex items-center gap-5">
                    <span className="flex h-12 w-12 items-center justify-center border border-border text-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="label-mono mb-1 block text-accent">{link.label}</span>
                      <span className="text-lg font-semibold text-foreground">{link.value}</span>
                    </span>
                  </span>
                  <ExternalLink size={18} className="text-muted transition-colors group-hover:text-accent" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
