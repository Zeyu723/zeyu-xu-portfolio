import { ArrowRight, Mail } from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import type { PointerEvent } from "react";
import { Link } from "react-router-dom";
import { profile, researchInterests } from "../content/portfolio";

const signalWords = [
  "AI AGENTS",
  "FULL-STACK SYSTEMS",
  "HUMAN-AI WORKFLOWS",
  "SECURITY-AWARE DEPLOYMENT",
  "PERTH / WA",
];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const fieldY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const pointerX = useMotionValue(720);
  const pointerY = useMotionValue(220);
  const trackerX = useSpring(pointerX, { stiffness: 90, damping: 22 });
  const trackerY = useSpring(pointerY, { stiffness: 90, damping: 22 });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left - 44);
    pointerY.set(event.clientY - bounds.top - 44);
  };

  return (
    <section className="relative overflow-hidden pt-20 sm:pt-24" onPointerMove={handlePointerMove}>
      <div className="lab-grid absolute inset-0" />
      <div className="hero-scan absolute inset-x-0 top-20 hidden h-px bg-accent/50 shadow-[0_0_28px_rgba(37,99,235,0.55)] sm:block" />
      <motion.div
        aria-hidden="true"
        style={{ x: trackerX, y: trackerY }}
        className="pointer-events-none absolute left-0 top-0 z-10 hidden h-20 w-20 border border-accent/45 bg-background/20 backdrop-blur-[1px] lg:block"
      >
        <span className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-accent" />
        <span className="absolute -right-1 -top-1 h-3 w-3 border-r border-t border-accent" />
        <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-accent" />
        <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-accent" />
      </motion.div>
      <motion.div
        style={{ y: fieldY }}
        className="absolute inset-y-16 right-0 hidden w-[56vw] lg:block"
        aria-hidden="true"
      >
        <div className="data-sweep absolute right-16 top-0 h-full w-px bg-border" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          className="absolute right-28 top-10 h-72 w-72 border border-accent/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          className="absolute right-56 top-36 h-96 w-96 border border-foreground/10"
        />
        <motion.div
          animate={{ scale: [1, 1.45, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-12 top-40 h-3 w-3 bg-accent"
        />
        <motion.div
          animate={{ y: [0, 14, 0], opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-72 top-32 h-2 w-2 bg-foreground"
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 8, 0] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-44 bottom-32 h-4 w-4 border border-accent"
        />
        <div className="trace-line absolute bottom-20 right-0 h-px w-[38rem] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </motion.div>

      <div className="section-container relative z-10 grid min-h-0 items-center gap-16 pb-10 sm:min-h-[calc(78svh-5rem)] sm:pb-16 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="label-mono mb-5 max-w-full leading-relaxed text-accent"
          >
            <span className="hidden sm:inline">
              {profile.degree} / {profile.university} / {profile.expected}
            </span>
            <span className="sm:hidden">
              {profile.university} / {profile.expected}
            </span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="break-words font-display text-5xl font-bold leading-none sm:text-7xl md:text-8xl lg:text-[8.25rem]"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-3xl space-y-4 break-words sm:mt-10 sm:space-y-5"
          >
            <p className="text-2xl font-medium leading-snug text-foreground md:text-3xl">
              {profile.headline}
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.supervisorPitch}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:flex sm:flex-row"
          >
            <Link
              to="/agent-research"
              className="group/cta col-span-2 inline-flex w-full items-center justify-center gap-3 bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent sm:w-auto"
            >
              Open Agent Lab
              <ArrowRight size={18} className="transition-transform group-hover/cta:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="group/cta inline-flex w-full items-center justify-center gap-3 border border-border bg-background/60 px-4 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent sm:w-auto sm:px-6"
            >
              Projects
              <ArrowRight size={18} className="transition-transform group-hover/cta:translate-x-0.5" />
            </Link>
            <a
              href={`mailto:${profile.email}?subject=Graduate research conversation`}
              className="group/cta inline-flex w-full items-center justify-center gap-3 border border-border bg-background/60 px-4 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent sm:w-auto sm:px-6"
            >
              Email Zeyu
              <Mail size={18} className="transition-transform group-hover/cta:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:col-span-4 lg:block"
        >
          <div className="scan-panel relative overflow-hidden border-y border-border py-8">
            <p className="label-mono mb-6 text-accent">Research Fit</p>
            <div className="space-y-6">
              {researchInterests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.25 }}
                  className="group border-t border-border pt-5 first:border-t-0 first:pt-0"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-sm text-accent">0{index + 1}</span>
                    <h2 className="text-lg font-semibold leading-snug group-hover:text-accent">
                      {interest.title}
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{interest.summary}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 border-y border-border bg-background/70 py-4 backdrop-blur">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-10 whitespace-nowrap px-6"
        >
          {[...signalWords, ...signalWords, ...signalWords].map((word, index) => (
            <span key={`${word}-${index}`} className="label-mono text-muted">
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
