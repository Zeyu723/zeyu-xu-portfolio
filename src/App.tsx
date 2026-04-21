import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AgentResearchPage from "./pages/AgentResearch";
import Layout from "./components/Layout";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Home from "./pages/Home";
import NoteDetail from "./pages/NoteDetail";
import NotesPage from "./pages/Notes";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsPage from "./pages/Projects";
import ResearchPage from "./pages/Research";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
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
      </Layout>
    </Router>
  );
}
