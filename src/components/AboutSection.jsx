import React from "react";
import { Link } from "react-router-dom";
import panelA from "../assets/solar-panel-image-A.jpg";
import { GoArrowUpRight } from "react-icons/go";

function AboutSection({ title, description }) {
  return (
    <section className="p-6 md:p-16 lg:p-20 bg-slate-100 font-Figtree">
      <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-8" data-aos="fade-up">
        {title}<span className="text-green-500 animate-pulse">Y</span>
      </h2>
      <h3 className="text-green-500 text-center sm:text-xl font-semibold mb-16 sm:w-[60%] mx-auto" data-aos="fade-up" data-aos-delay="200">
        {description}
      </h3>
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:*:size-2/4" data-aos="fade-up" data-aos-delay="400">
        <figure>
          <img className="rounded h-[450px]" src={panelA} alt="" />
        </figure>
        <div className="space-y-6">
         <div>
          
           <p className="mb-4" data-aos="fade-up" data-aos-delay="600">
            At  <span className="font-semibold text-green-500">Shiny Power Solution</span>, we believe that access to clean, reliable,
            and affordable energy is the foundation for progress. Our mission is
            to light up homes, businesses, and communities with innovative solar
            and renewable energy solutions that make a lasting impact. 
          </p>
         </div>
          <p className="mb-4" data-aos="fade-up" data-aos-delay="700">With a focus on sustainability, efficiency, and trust, we provide tailored
            power solutions designed to meet the unique needs of our clients.
            Whether it's residential installations, commercial projects, or
            community-wide energy systems, we combine cutting-edge technology
            with expert service to deliver results that last. </p>
            <p className="mb-4" data-aos="fade-up" data-aos-delay="800">We are more than
            just an energy company we are partners in powering a brighter,
            greener future. Through our work, we are committed to reducing
            energy costs, minimizing carbon footprints, and empowering
            individuals and businesses to embrace renewable energy with
            confidence.</p>

            <div className="mt-6 border-2 border-green-500 w-fit mx-auto rounded-full p-2 hover:bg-green-500 hover:text-white transition-all duration-300" data-aos="fade-up" data-aos-delay="900">
        <button><Link to="/services">Our Services <GoArrowUpRight className="inline-block text-2xl" /></Link></button>
      </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
