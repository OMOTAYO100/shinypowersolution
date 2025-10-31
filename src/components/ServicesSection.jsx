import {
  FaSolarPanel,
  FaBatteryFull,
  FaLightbulb,
  FaWind,
} from "react-icons/fa";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import panelA from "../assets/solar-panel-image-A.jpg";
import panelC from "../assets/solar-panel-image-C.jpg";
import panelE from "../assets/solar-panel-image-E.jpg";
import panelF from "../assets/solar-panel-image.jpg";
import panelG from "../assets/solar-panel-image-G.jpg";
import panelH from "../assets/solar-panel-image-H.jpg";

function ServicesSection() {
  return (
    <>
      <section className="mt-6 md:mt-16 lg:mt-20" id="services font-Figtree ">
        <div className="flex items-center justify-between gap-4 p-6 md:p-12 lg:p-16 bg-white text-center sm:flex-row-reverse">
          <button className="py-2 px-4 rounded-2xl bg-slate-100 shadow-2xl shadow-gray-300 text-black text-lg hover:bg-green-600 hover:text-black transition-all duration-300">
            <a href="#services">
              Explore Services <GoArrowUpRight className="inline-block" />
            </a>
          </button>
          <div>
            <p className="text-sm text-green-500">
              Discover tailored solutions for a cleaner, greener tomorrow
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Empowering Your Energy Needs
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-12 lg:p-16 bg-slate-100">
          <div className="relative hover:scale-105 transition-all duration-300">
            <p className="absolute top-4 right-4 z-10 bg-green-500 p-4 rounded-lg">
              <FaSolarPanel className="inline-block text-3xl text-black " />
            </p>
            <figure>
              <img
                src={panelC}
                alt="Service Image"
                className="w-full h-100 rounded-lg shadow-md"
              />
            </figure>
            <div className=" flex flex-col space-y-3 absolute bottom-0 bg-white text-black p-4 m-4 text-sm rounded-2xl">
              <h2 className="font-semibold text-xl text-center text-green-500">
                Solar Panel Installation
              </h2>
              <p>
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
              <h2 className="font-semibold text-xl text-center text-green-500">
                Energy Storage Solution
              </h2>
              <p>
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
              <h2 className="font-semibold text-xl text-center text-green-500">
                System Maintenance & Support
              </h2>
              <p>
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
        </div>
      </section>
    </>
  );
}

export default ServicesSection;
