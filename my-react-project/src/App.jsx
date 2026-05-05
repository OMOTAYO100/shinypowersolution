import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SolarStore from "./pages/Store";
import AdminStore from "./pages/AdminStore";
import { CartProvider } from "./context/CartContext";
import CartSidebar from "./components/CartSidebar";
import Chatbot from "./components/Chatbot";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <CartProvider>
      <Router>
        <CartSidebar />
        <Chatbot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />

          {/* ✅ FIXED ROUTE */}
          <Route path="/store" element={<SolarStore />} />
          
          {/* Admin Dashboard */}
          <Route path="/admin" element={<AdminStore />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;