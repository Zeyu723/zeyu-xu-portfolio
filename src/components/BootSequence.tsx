import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type IntroPhase = "welcome" | "identity" | "lock" | "compress" | "cut" | "open";

const finalPhases: IntroPhase[] = ["lock", "compress", "cut", "open"];

export default function BootSequence() {
  const [phase, setPhase] = useState<IntroPhase>("welcome");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setComplete(true);
      return undefined;
    }

    const identityTimer = window.setTimeout(() => setPhase("identity"), 760);
    const lockTimer = window.setTimeout(() => setPhase("lock"), 1540);
    const compressTimer = window.setTimeout(() => setPhase("compress"), 2360);
    const cutTimer = window.setTimeout(() => setPhase("cut"), 3260);
    const openTimer = window.setTimeout(() => setPhase("open"), 4360);
    const doneTimer = window.setTimeout(() => setComplete(true), 5580);

    return () => {
      window.clearTimeout(identityTimer);
      window.clearTimeout(lockTimer);
      window.clearTimeout(compressTimer);
      window.clearTimeout(cutTimer);
      window.clearTimeout(openTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  const isCompressed = phase === "compress" || phase === "cut" || phase === "open";
  const isCutting = phase === "cut" || phase === "open";
  const isOpen = phase === "open";
  const showIdentity = phase !== "welcome";
  const showFinalName = finalPhases.includes(phase);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          role="status"
          aria-label="Opening Zeyu Xu portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none fixed inset-0 z-[120] overflow-hidden bg-transparent text-background"
        >
          <motion.div
            className="intro-frame absolute inset-0 overflow-hidden"
            animate={{
              scale: isCompressed ? 0.89 : 1,
              borderRadius: isCompressed ? 22 : 0,
            }}
            transition={{ duration: 0.86, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              aria-hidden="true"
              className="intro-slice intro-slice-top absolute left-0 top-0 h-1/2 w-full overflow-hidden"
              animate={{ y: isOpen ? "-112%" : "0%" }}
              transition={{ duration: 1.12, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              aria-hidden="true"
              className="intro-slice intro-slice-bottom absolute bottom-0 left-0 h-1/2 w-full overflow-hidden"
              animate={{ y: isOpen ? "112%" : "0%" }}
              transition={{ duration: 1.12, ease: [0.76, 0, 0.24, 1] }}
            />

            <motion.div
              className="absolute inset-x-6 top-8 z-20 flex items-center justify-between gap-5 font-mono text-[10px] uppercase tracking-[0.28em] text-background/55 sm:inset-x-10"
              animate={{
                opacity: isOpen ? 0 : 1,
                y: isOpen ? -18 : 0,
              }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>zeyu.app</span>
              <motion.span
                animate={{ opacity: phase === "welcome" ? 0.58 : 1 }}
                transition={{ duration: 0.34 }}
              >
                {showFinalName ? "identity locked" : "opening study"}
              </motion.span>
            </motion.div>

            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center"
              animate={{
                opacity: isOpen ? 0 : 1,
                scale: isCompressed ? 0.9 : 1,
                filter: isOpen ? "blur(12px)" : "blur(0px)",
              }}
              transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative flex min-h-[34vw] w-full max-w-6xl items-center justify-center sm:min-h-[24vw] lg:min-h-72">
                <motion.p
                  className="absolute left-1/2 top-[16%] -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.42em] text-background/50"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    y: showFinalName ? -12 : 0,
                  }}
                  transition={{ duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
                >
                  {showFinalName ? "AI Agent Systems / Product Engineering" : "Welcome to zeyu.app"}
                </motion.p>

                <motion.div
                  aria-hidden="true"
                  className="intro-title intro-title-ghost absolute font-display text-[20vw] font-bold leading-none tracking-[0.1em] sm:text-[15vw] lg:text-[11vw]"
                  initial={{ opacity: 0, y: 34, scale: 1.12, filter: "blur(16px)" }}
                  animate={{
                    opacity: showIdentity && !isOpen ? (showFinalName ? 0.18 : 0.34) : 0,
                    y: showIdentity ? 0 : 34,
                    scale: showFinalName ? 1.08 : 1.16,
                    filter: showFinalName ? "blur(2px)" : "blur(8px)",
                  }}
                  transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
                >
                  {"\u8bb8\u6cfd\u5b87"}
                </motion.div>

                <motion.div
                  className="intro-title absolute font-display text-[16vw] font-bold leading-[0.82] sm:text-[12vw] lg:text-[9.5vw]"
                  initial={{ opacity: 0, y: 28, scale: 1.08 }}
                  animate={{
                    opacity: phase === "welcome" ? 1 : 0,
                    y: phase === "welcome" ? 0 : -26,
                    scale: phase === "welcome" ? 1 : 0.92,
                    letterSpacing: phase === "welcome" ? "0.16em" : "0.3em",
                  }}
                  transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                >
                  WELCOME
                </motion.div>

                <motion.h1
                  className="intro-title absolute font-display text-[18vw] font-bold leading-[0.82] sm:text-[14vw] lg:text-[10.6vw]"
                  initial={{ opacity: 0, y: 36, scale: 1.08, letterSpacing: "0.28em" }}
                  animate={{
                    opacity: showFinalName && !isOpen ? 1 : 0,
                    y: showFinalName ? 0 : 36,
                    scale: showFinalName ? 1 : 1.08,
                    letterSpacing: isCompressed ? "0.03em" : "0.08em",
                  }}
                  transition={{ duration: 0.84, ease: [0.16, 1, 0.3, 1] }}
                >
                  ZEYU XU
                </motion.h1>
              </div>
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="intro-cut-line absolute left-0 top-1/2 z-30 h-px w-full origin-left bg-background"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: isCutting ? 1 : 0,
                opacity: isOpen ? 0 : isCutting ? 1 : 0,
              }}
              transition={{ duration: isCutting ? 1.05 : 0.2, ease: [0.76, 0, 0.24, 1] }}
            />

            <motion.div
              className="absolute inset-x-6 bottom-8 z-20 flex items-end justify-between gap-5 font-mono text-[10px] uppercase tracking-[0.24em] text-background/48 sm:inset-x-10"
              animate={{
                opacity: isOpen ? 0 : 1,
                y: isOpen ? 18 : 0,
              }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>portfolio interface</span>
              <span>perth / wa</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
