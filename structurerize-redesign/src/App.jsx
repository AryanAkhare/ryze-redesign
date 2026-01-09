import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import OurStory from "./pages/OurStory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
