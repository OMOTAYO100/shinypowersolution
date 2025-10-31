import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function ProjectCards({ title, image }) {
  return (
     <div className="bg-white group">
              <figure className="relative inline-block overflow-hidden rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                <img className="w-[100%] block" src={image} alt="" />
                <figcaption
                className=" flex items-center gap-2 absolute bottom-20 left-[-100%] text-green-500 font-semibold text-lg opacity-0 
                   transition-all duration-700 ease-in-out group-hover:left-10 group-hover:opacity-100"
              >
                {title}
                <GoArrowUpRight className="inline-block text-xl font-bold " />
              </figcaption>
              <p className="absolute bottom-[-50px] left-0 w-full text-center text-white text-lg px-4 opacity-0 
                   transition-all duration-700 ease-in-out group-hover:bottom-5 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
              </figure>

            </div>

        
    
  )
}

export default ProjectCards