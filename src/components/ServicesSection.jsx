import {
  FaSolarPanel,
  FaBatteryFull,
  FaLightbulb,
  FaWind,
} from "react-icons/fa";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

import panelC from "../assets/solar-panel-image-C.jpg";
import panelE from "../assets/solar-panel-image-E.jpg";
import panelF from "../assets/solar-panel-image.jpg";


function ServicesSection() {
  return (
    <>
      <section className="mt-6 md:mt-16 lg:mt-20" id="services font-Figtree" data-aos="fade-up" data-aos-delay="200">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 gap-4 p-6 md:p-12 lg:p-16 bg-white text-center sm:flex-row-reverse">
          <button className="py-2 px-4 rounded-2xl bg-slate-100 shadow-2xl shadow-gray-300 text-black text-lg hover:bg-green-600 hover:text-black transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
            <a href="#services">
              Explore Services <GoArrowUpRight className="inline-block" />
            </a>
          </button>
          <div>
            <p className="text-sm text-green-500" data-aos="fade-up" data-aos-delay="600">
              Discover tailored solutions for a cleaner, greener tomorrow
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold" data-aos="fade-up" data-aos-delay="800">
              Empowering Your Energy Needs
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-12 lg:p-16 bg-slate-100" data-aos="fade-up" data-aos-delay="300">
          <div className="relative hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
            <p className="absolute top-4 right-4 z-10 bg-green-500 p-4 rounded-lg" data-aos="fade-up" data-aos-delay="500">
              <FaSolarPanel className="inline-block text-3xl text-black" />
            </p>
            <figure>
              <img
                src={panelC}
                alt="Service Image"
                className="w-full h-100 rounded-lg shadow-md"
              />
            </figure>
            <div className=" flex flex-col space-y-3 absolute bottom-0 bg-white text-black p-4 m-4 text-sm rounded-2xl">
              <h2 className="font-semibold text-xl text-center text-green-500" data-aos="fade-up" data-aos-delay="600">
                Solar Panel Installation
              </h2>
              <p data-aos="fade-up" data-aos-delay="700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                amet, tempora beatae eos quia modi odio veritatis repellendus
                exercitationem! Sit laboriosam enim aliquid aspernatur facilis
                ipsa. Sapiente molestiae error odit!
              </p>
              <a href="#" className="text-green-500 hover:underline">
                Learn More
              </a>
            </div>
          </div>

          <div className="relative hover:scale-105 transition-all duration-300">
            <p className="absolute top-4 right-4 z-10 bg-green-500 p-4 rounded-lg">
              <FaBatteryFull className="inline-block text-3xl text-black " />
            </p>
            <figure>
              <img
                src={panelE}
                alt="Service Image"
                className="w-full h-100 rounded-lg shadow-md"
              />
            </figure>
            <div className=" flex flex-col space-y-3 absolute bottom-0 bg-white text-black p-4 m-4 text-sm rounded-2xl ">
              <h2 className="font-semibold text-xl text-center text-green-500" data-aos="fade-up" data-aos-delay="600">
                Energy Storage Solution
              </h2>
              <p data-aos="fade-up" data-aos-delay="700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                amet, tempora beatae eos quia modi odio veritatis repellendus
                exercitationem! Sit laboriosam enim aliquid aspernatur facilis
                ipsa. Sapiente molestiae error odit!
              </p>
              <a href="#" className="text-green-500 hover:underline">
                Learn More
              </a>
            </div>
          </div>

          <div className="relative hover:scale-105 transition-all duration-300">
            <p className="absolute top-4 right-4 z-10 bg-green-500 p-4 rounded-lg">
              <FaLightbulb className="inline-block text-3xl text-black " />
            </p>
            <figure>
              <img
                src={panelF}
                alt="Service Image"
                className="w-full h-100 rounded-lg shadow-md"
              />
            </figure>
            <div className=" flex flex-col space-y-3 absolute bottom-0 bg-white text-black p-4 m-4 text-sm rounded-2xl">
              <h2 className="font-semibold text-xl text-center text-green-500" data-aos="fade-up" data-aos-delay="600">
                System Maintenance & Support
              </h2>
              <p data-aos="fade-up" data-aos-delay="700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                amet, tempora beatae eos quia modi odio veritatis repellendus
                exercitationem! Sit laboriosam enim aliquid aspernatur facilis
                ipsa. Sapiente molestiae error odit!
              </p>
              <a href="#" className="text-green-500 hover:underline" data-aos="fade-up" data-aos-delay="800">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesSection;
