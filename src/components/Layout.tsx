import type { ReactNode } from "react";
import { motion } from "motion/react";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <CustomCursor />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
