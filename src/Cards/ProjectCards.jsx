import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function ProjectCards({ title, image, text, dataAos = "fade-up", dataAosDelay = "200" }) {
  return (
     <div className="group" data-aos={dataAos} data-aos-delay={dataAosDelay}>
              <figure className="relative inline-block overflow-hidden rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                <img className="w-full block" src={image} alt="" />
                <figcaption
                className="flex items-center text-gray-800 gap-2 absolute top-5 md:top-15 left-10 md:left-[-100%] font-bold text-xl md:text-2xl md:opacity-0 
                   transition-all duration-700 ease-in-out md:group-hover:left-10 md:group-hover:opacity-100"
              >
                {title}
                <GoArrowUpRight className="inline-block text-xl font-bold" />
              </figcaption>
              <p className="absolute bottom-4 md:bottom-[-50px] left-0 w-full text-center text-gray-200 text-lg font-bold px-4 md:opacity-0 
                   transition-all duration-700 ease-in-out group-hover:bottom-2 group-hover:opacity-100">{text}</p>
              </figure>

            </div>

        
    
  )
}

export default ProjectCards