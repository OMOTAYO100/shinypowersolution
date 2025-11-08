import React from "react";
import solarBg from "../assets/solar-panel-image-F.webp"
import { GoArrowUpRight } from "react-icons/go";

function HeroSection({title, subtitle, }) {
  return (
    <>
      <section style={{backgroundImage: `url(${solarBg})`}} className=" max-h-fit bg-cover bg-center p-8 md:p-16 lg:p-20 space-y-8 flex flex-col justify-center overlay font-Figtree" loading="lazy">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-green-500 font-Lato" data-aos="zoom in" data-aos-delay="200">
          {title}
        </h1>

        <div className="space-y-8 flex flex-col justify-center items-center">
          <h3 className="text-xl sm:text-3xl md:text-4xl text-center font-bold text-white " data-aos="fade-up" data-aos-delay="400">
            {subtitle}
          </h3>
          <p className="text-center text-2xl sm:w-[60%] mx-auto font-semibold text-white" data-aos="fade-up" data-aos-delay="500">
            At <span className="font-semibold text-green-500">Shiny Power Solution</span>, we provide innovative and
            sustainable energy system that keeps your home and business running
            without interruptions. From Solar solutions to reliable backup
            power, we help you stay connected, productive and worry-free.
          </p>

          <div className=" flex space-x-6 justify-self-center mt-7" data-aos="fade-up" data-aos-delay="500">
            <button className=" bg-green-500 p-2 text-md text-white rounded cursor-pointer hover:bg-lime-500 transition-all duration-300 font-semibold">
              Learn More {<GoArrowUpRight className="inline-block" />}
            </button>
            
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 md:p-16 lg:p-20 text-center font-Figtree" data-aos="zoom in" data-aos-delay="300">
        <div className="flex items-center gap-1">
          <p className="text-6xl font-bold text-green-500" data-aos="zoom in" data-aos-delay="400">1200</p>
          <p className="text-gray-400"><i>Hectors total area covered</i></p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-6xl font-bold text-green-500" data-aos="zoom in" data-aos-delay="500">98%</p>
          <p className="text-gray-400"><i>Our green solutions</i></p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-6xl font-bold text-green-500" data-aos="zoom in" data-aos-delay="600">5</p>
          <p className="text-gray-400"><i>Top industries served</i></p>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-6xl font-bold text-green-500" data-aos="zoom in" data-aos-delay="700">10+</p>
          <p className="text-gray-400"><i>Years Experience in the industry</i></p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
