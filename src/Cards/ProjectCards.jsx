import React from "react";
import { FiChevronRight } from "react-icons/fi";

function ProjectCards({
  title,
  image,
  text,
  dataAos = "fade-up",
  dataAosDelay = "200",
}) {
  return (
    <>
      <div
        className="hover:scale-105 transition-transform duration-300"
        data-aos={dataAos}
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
