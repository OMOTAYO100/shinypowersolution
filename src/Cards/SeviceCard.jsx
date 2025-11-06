import React from "react";
import { FiChevronRight } from "react-icons/fi";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  
  return (
    <div 
      className="hover:scale-105 transition-transform duration-300" 
      data-aos="fade-up" 
      data-aos-delay={service.delay}
    >
      
      <figure>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-100 rounded-lg shadow-md"
          loading="lazy"
          width="400"
          height="400"
        />
      </figure>
      <div className="flex flex-col space-y-3 absolute bottom-0 bg-white text-black p-4 m-4 text-sm rounded-2xl">
        <div className=" self-start z-10 bg-green-500/25 p-4 rounded-full">
        <Icon className="inline-block text-3xl text-green-500" />
      </div>
        <h3 className="font-semibold text-xl">
          {service.title}
        </h3>
        <p>{service.description}</p>
        <div className="flex items-center space-x-2 mt-2 bg-green-500/25 p-2 rounded-full w-fit place-items-end ml-auto group" data-aos="slide" data-aos-delay="300"  >
        <a 
          href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="bg-green-500 text-black px-4 py-2 rounded-full w-fit hover:bg-green-600 transition-all duration-300  transform group-hover:translate-x-3" 
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
        </a>
        <FiChevronRight className="inline-block text-2xl transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;