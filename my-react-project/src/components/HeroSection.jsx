import React, { useState, useEffect } from "react";
import solarBg1 from "../assets/Herobg1.jpg";  
import solarBg2 from "../assets/Herobg2.jpg";  
import solarBg3 from "../assets/Herobg3.jpg";  
import solarBg4 from "../assets/Herobg4.jpg";  
import avatar1 from "../assets/Avatar-1.webp";
import avatar2 from "../assets/Avatar-2.webp";
import avatar3 from "../assets/Avatar-3.webp";
import avatar4 from "../assets/Avatar-4.webp";
import { FaStar, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function HeroSection({ title, subtitle }) {
  const images = [solarBg1, solarBg2, solarBg3, solarBg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const avatars = [avatar1, avatar2, avatar3, avatar4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <section className="relative h-[90vh] md:h-screen flex flex-col justify-center overflow-hidden font-Figtree">
        {/* Animated Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            className="absolute inset-0 bg-cover bg-center -z-20"
          />
        </AnimatePresence>

        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        {/* Large Background Text */}
        <div className="mt-8 md:mt-18 absolute inset-0 flex justify-center items-start pt-20 md:pt-12 pointer-events-none select-none overflow-hidden -z-5">
           <h1 className="text-[8.5vw] md:text-[130px] font-black text-[#A68F73]/60 uppercase whitespace-nowrap leading-none tracking-tighter">
             {title}
           </h1>
        </div>

        <div className="mt-36 md:mt-60 relative z-10 px-8 md:px-16 lg:px-24 space-y-10 flex flex-col justify-center items-start text-left max-w-7xl w-full">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-[60%] text-4xl md:text-7xl font-extrabold text-white font-Lato leading-tight tracking-wide"
          >
            {subtitle}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10 w-full"
          >
            <p className="text-lg md:text-xl max-w-2xl font-medium text-gray-200 leading-relaxed">
              At <span className="font-bold text-green-500">Shiny Power Solution</span>, we provide innovative and
              sustainable energy system that keeps your home and business running
              without interruptions. From Solar solutions to reliable backup
              power, we help you stay connected, productive and worry-free.
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-8 pt-4">
              {/* Buttons Container */}
              <div className="flex flex-wrap items-center gap-6">
                <button className="bg-green-600 hover:bg-green-500 border-2 border-transparent text-white px-8 py-3.5 rounded-full text-lg font-bold transition-all duration-300 shadow-lg shadow-green-500/20 active:scale-95">
                  Get Quote
                </button>
                <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3.5 rounded-full text-lg font-bold transition-all duration-300 active:scale-95">
                  Contact Us
                </button>
              </div>

              {/* Avatar / Review Group */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center gap-4 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-green-500/50 shadow-2xl"
              >
                <div className="flex -space-x-3">
                  {avatars.map((avatar, i) => (
                    <img 
                      key={i} 
                      src={avatar} 
                      alt={`Satisfied Shiny Power Solution Customer ${i + 1}`} 
                      className="w-10 h-10 rounded-full border-2 border-green-500 object-cover" 
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-600 border-2 border-green-500">
                    <FaPlus className="text-sm" />
                  </div>
                </div>
                <div className="flex flex-col items-start gap-0.5 text-left">
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-white text-[10px] md:text-xs font-semibold whitespace-nowrap">
                    3600+ pleased customers
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 md:p-16 lg:p-20 text-center font-Figtree bg-white/5" data-aos="fade-up">
        <div className="flex items-center justify-center gap-2">
          <p className="text-5xl font-bold text-green-500">1200</p>
          <p className="text-gray-400 text-sm text-left leading-tight"><i>Hectors total<br/>area covered</i></p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-5xl font-bold text-green-500">98%</p>
          <p className="text-gray-400 text-sm text-left leading-tight"><i>Our green<br/>solutions</i></p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-5xl font-bold text-green-500">5</p>
          <p className="text-gray-400 text-sm text-left leading-tight"><i>Top industries<br/>served</i></p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-5xl font-bold text-green-500">10+</p>
          <p className="text-gray-400 text-sm text-left leading-tight"><i>Years Experience<br/>in the industry</i></p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

