import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { damping: 28, stiffness: 320 });
  const cursorY = useSpring(mouseY, { damping: 28, stiffness: 320 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(media.matches);

    updateEnabled();
    media.addEventListener("change", updateEnabled);

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button")));
    };

    const hide = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", hide);

    return () => {
      media.removeEventListener("change", updateEnabled);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", hide);
    };
  }, [mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80]"
      style={{ x: cursorX, y: cursorY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        animate={{ scale: hovering ? 1.65 : 1 }}
        transition={{ duration: 0.18 }}
        className="relative -left-1/2 -top-1/2"
      >
        <span className="block h-2 w-2 bg-accent" />
        <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40" />
        <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/20 animate-spin-slow" />
      </motion.div>
    </motion.div>
  );
}
