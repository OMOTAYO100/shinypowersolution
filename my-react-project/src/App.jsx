import { Suspense, lazy, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load components for faster initial load
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const SolarStore = lazy(() => import("./pages/Store"));
const AdminStore = lazy(() => import("./pages/AdminStore"));

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
        <Suspense fallback={<div className="flex items-center justify-center h-screen bg-black text-green-500 font-bold">Loading...</div>}>
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
        </Suspense>
      </Router>
    </CartProvider>
  );
};

export default App;