import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

function ProjectCards({
  title,
  image,
  text,
  dataAos = "fade-up",
  dataAosDelay = "200",
}) {
  return (
    //  <div className="group" data-aos={dataAos} data-aos-delay={dataAosDelay}>
    //           <figure className="relative inline-block overflow-hidden rounded-lg shadow-md hover:scale-105 transition-all duration-300">
    //             <img className="w-full block" src={image} alt="" />
    //             <figcaption
    //             className="flex items-center text-gray-800 gap-2 absolute top-5 md:top-15 left-10 md:left-[-100%] font-bold text-xl md:text-2xl md:opacity-0
    //                transition-all duration-700 ease-in-out md:group-hover:left-10 md:group-hover:opacity-100"
    //           >
    //             {title}
    //             <GoArrowUpRight className="inline-block text-xl font-bold" />
    //           </figcaption>
    //           <p className="absolute bottom-4 md:bottom-[-50px] left-0 w-full text-center text-gray-200 text-lg font-bold px-4 md:opacity-0
    //                transition-all duration-700 ease-in-out group-hover:bottom-2 group-hover:opacity-100">{text}</p>
    //           </figure>

    //         </div>

    <>
      <div
        className="hover:scale-105 transition-transform duration-300"
        data-aos="fade-up"
        data-aos-delay={dataAosDelay}
      >
        <figure className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition-all duration-300">
          <img
            src={image}
            alt={title}
            className="w-full h-100 rounded-lg shadow-md"
            loading="lazy"
            width="400"
            height="400"
          />
        </figure>
        <div className="flex flex-col space-y-3 absolute bottom-0 bg-white text-black p-4 m-4 text-sm rounded-2xl">
          <h3 className="font-semibold text-xl">{title}</h3>
          <p>{text}</p>
          <div className="flex items-center justify-end space-x-2 mt-2 bg-green-500/25 p-2 rounded-full w-fit  place-items-end ml-auto">
            <a
              href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-green-500 text-black px-4 py-2 rounded-full w-fit hover:bg-green-600 transition-all duration-300"
              aria-label={`Learn more about ${title}`}
            >
              Learn More
            </a>
            <FiChevronRight className="inline-block text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
