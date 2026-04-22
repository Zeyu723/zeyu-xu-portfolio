import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "../pages/About";
import AgentResearchPage from "../pages/AgentResearch";
import ContactPage from "../pages/Contact";
import Home from "../pages/Home";
import NoteDetail from "../pages/NoteDetail";
import NotesPage from "../pages/Notes";
import ProjectDetail from "../pages/ProjectDetail";
import ProjectsPage from "../pages/Projects";
import ResearchPage from "../pages/Research";

export default function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={`progress-${location.pathname}`}
          aria-hidden="true"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: [1, 1, 0] }}
          exit={{ scaleX: 1, opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.77, 0, 0.18, 1] }}
          className="route-progress pointer-events-none fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-accent"
        />
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/agent-research" element={<AgentResearchPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/notes/:slug" element={<NoteDetail />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
