import React, { memo } from "react";
import { GoArrowUpRight } from "react-icons/go";
import ServiceCard from "../Cards/SeviceCard.jsx";
import ServicesData from "../data/ServicesData";

const ServicesSection = () => {
  return (
    <section 
      className="mt-6 md:mt-16 lg:mt-20" 
      id="services" 
      data-aos="fade-up" 
      data-aos-delay="200"
      aria-labelledby="services-heading"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 gap-4 p-6 md:p-12 lg:p-16 bg-white text-center sm:flex-row-reverse">
        <button 
          className="py-2 px-4 rounded-2xl bg-slate-100 shadow-2xl shadow-gray-300 text-black text-lg hover:bg-green-600 hover:text-white transition-all duration-300" 
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          <a href="#services">
            Explore Services <GoArrowUpRight className="inline-block" />
          </a>
        </button>
        <div>
          <p 
            className="text-sm text-green-500" 
            data-aos="fade-up" 
            data-aos-delay="600"
          >
            Discover tailored solutions for a cleaner, greener tomorrow
          </p>
          <h2 
            id="services-heading"
            className="text-2xl sm:text-3xl font-semibold" 
            data-aos="fade-up" 
            data-aos-delay="800"
          >
            Empowering Your Energy Needs
          </h2>
        </div>
      </div>

      {/* Services Grid */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-12 lg:p-16 bg-slate-100" 
        data-aos="fade-up" 
        data-aos-delay="300"
      >
        {ServicesData.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default memo(ServicesSection);