import React from 'react';
import { IoStar } from "react-icons/io5";


function TestimonialCards({ name, description, Images }) {
  return (
    <div className="border p-4 rounded-lg shadow-md space-y-6 font-Figtree group">
        <div className='flex gap-1'>
            <IoStar className="text-2xl  text-green-500 cursor-pointer transition-colors duration-300 " />
            <IoStar className="text-2xl  text-green-500 cursor-pointer transition-colors duration-300 " />
            <IoStar className="text-2xl  text-green-500 cursor-pointer transition-colors duration-300 " />
            <IoStar className="text-2xl  text-green-500 cursor-pointer transition-colors duration-300 " />
            <IoStar className="text-2xl  text-green-500 cursor-pointer transition-colors duration-300 " />
        </div>
             <p className="text-gray-600">{description}</p>
             
     <div className="flex flex-col gap-4 mt-4">
        <figure>
            <img className='size-16 rounded-full' src={Images} alt="" />
        </figure>
         <p className="font-semibold text-gray-400">{name}</p>
     </div>
 
    </div>
  )
}

export default TestimonialCards