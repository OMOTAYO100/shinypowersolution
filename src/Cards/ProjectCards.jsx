import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function ProjectCards({ title, image, text }) {
  return (
     <div className="group">
              <figure className="relative inline-block overflow-hidden rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                <img className="w-[100%] block" src={image} alt="" />
                <figcaption
                className="flex items-center gap-2 absolute bottom-25 md:bottom-30 left-10 md:left-[-100%] text-green-500 font-bold text-xl md:text-2xl md:opacity-0 
                   transition-all duration-700 ease-in-out md:group-hover:left-10 md:group-hover:opacity-100"
              >
                {title}
                <GoArrowUpRight className="inline-block text-xl font-bold" />
              </figcaption>
              <p className="absolute bottom-4 md:bottom-[-50px] left-0 w-full text-center text-white text-lg font-bold px-4 md:opacity-0 
                   transition-all duration-700 ease-in-out group-hover:bottom-2 group-hover:opacity-100">{text}</p>
              </figure>

            </div>

        
    
  )
}

export default ProjectCards