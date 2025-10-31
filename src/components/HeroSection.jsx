import React from "react";
import solarBg from "../assets/solar-panel-image-C.jpg"
import { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";

function HeroSection({title, subtitle, }) {
 const words = ['Reliable', 'Sustainable', 'Affordable', 'Efficient']
 const [currentWord, setCurrentWord] = useState('Reliable');

 useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * words.length);
      setCurrentWord(words[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section style={{backgroundImage: `url(${solarBg})`}} className=" h-screen bg-cover bg-center p-6 md:p-16 lg:p-20 space-y-12 flex flex-col justify-center font-Figtree">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-200">
          {title}
        </h1>

        <div className="space-y-8">
          <h3 className=" text-green-500 text-xl sm:text-3xl md:text-4xl text-center font-semibold mt-6">
            ⚡{currentWord} {subtitle}
          </h3>
          <p className="text-center text-2xl sm:w-[60%] mx-auto text-white">
            At <span className="font-semibold text-green-500">Shiny Power Solution</span>, we provide innovative and
            sustainable energy system that keeps your home and business running
            without interruptions. From Solar solutions to reliable backup
            power, we help you stay connected, productive and worry-free.
          </p>

          <div className=" flex space-x-6 justify-self-center mt-16">
            <button className=" bg-green-500 p-2 text-md text-white rounded cursor-pointer">
              Learn More {<GoArrowUpRight className="inline-block" />}
            </button>
            
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-16 lg:p-20 text-center font-Figtree">
        <div className="flex items-center gap-1">
          <p className="text-6xl font-bold text-green-500">1200</p>
          <p className="text-gray-400"><i>Hectors total area covered</i></p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-6xl font-bold text-green-500">98%</p>
          <p className="text-gray-400"><i>Our green solutions</i></p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-6xl font-bold text-green-500">5</p>
          <p className="text-gray-400"><i>Top industries served</i></p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-6xl font-bold text-green-500">12+</p>
          <p className="text-gray-400"><i>Years Experience in the industry</i></p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
