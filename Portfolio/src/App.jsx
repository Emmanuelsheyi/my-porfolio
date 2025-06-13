import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import LeftPanel from "./components/LeftPanel"; // Create this component

function App() {
  return (
    <section className="main-container">
      <LeftPanel />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </section>
  );
}

export default App;
