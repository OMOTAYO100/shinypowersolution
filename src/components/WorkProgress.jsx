import React from 'react'
import { GiArchiveResearch } from "react-icons/gi";
import { TbRulerMeasure } from "react-icons/tb";
import { PiSolarPanelLight } from "react-icons/pi"; 

function WorkProgress() {
  return (
    <>
   <div className="flex flex-col justify-center items-center gap-4 mt-4">
         <h4 className="text-xl font-Figtree font-semibold text-green-500" data-aos="fade-up">Simple steps to a sustainable future</h4>
         <h2 className="font-Lato text-4xl" data-aos="fade-up">Our Work Progress</h2>
      </div>

      <div className=" font-Figtree flex flex-col md:flex-row bg-white text-center gap-6 p-6 md:p-12 lg:p-20 rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
        <div className="flex flex-col justify-center items-center space-y-4 ">
          <GiArchiveResearch className="text-9xl items-center text-green-500 border-2 border-gray-400 p-4 rounded-2xl" />
          <p className="text-xl" data-aos="fade-up">Research & Development</p>
          <p className="text-gray-400" data-aos="fade-up"> We invest in advanced solar technologies and innovative energy solutions to ensure every installation delivers maximum performance and long-term efficiency.</p>
        </div>
        <hr className="hidden md:block font-bold w-[30%] h-0.5 bg-green-500 relative top-20 " />
        <div className=" flex flex-col justify-center items-center space-y-4 ">
          <TbRulerMeasure className="text-9xl items-center text-green-500 border-2 border-gray-400 p-4 rounded-2xl" />
          <p className="text-xl" data-aos="fade-up">Measurement & Planning</p>
          <p className="text-gray-400" data-aos="fade-up"> Our expert team carefully assesses your energy needs, roof structure, and sunlight exposure to design a system perfectly tailored to your environment and goals.</p>
        </div>
        <hr className=" hidden md:block font-bold w-[30%] h-0.5 bg-green-500 relative top-20 " />
        <div className="flex flex-col justify-center items-center space-y-4">
          <PiSolarPanelLight className="text-9xl items-center text-green-500 border-2 border-gray-400 p-4 rounded-2xl" />
          <p className="text-xl" data-aos="fade-up">Solar Panel Installation</p>
          <p className="text-gray-400" data-aos="fade-up">  We deliver seamless, high-quality installations using top-tier solar panels and materials, ensuring reliable, sustainable power for years to come.</p>
        </div>
      </div>
      </>
  )
}

export default WorkProgress