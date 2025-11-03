import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true,     // Whether animation should happen only once
      easing: "ease-in-out", // Optional: smooth easing
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
