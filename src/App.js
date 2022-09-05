import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Experience from "./pages/Experience/Experience";
import Extracurriculars from "./pages/Extracurriculars/Extracurriculars";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop.js";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/extracurriculars" element={<Extracurriculars />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
