import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Media />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
