import React, { memo } from "react";

const ServiceCard = memo(({ service }) => {
  const Icon = service.icon;
  
  return (
    <div 
      className="relative hover:scale-105 transition-all duration-300" 
      data-aos="fade-up" 
      data-aos-delay={service.delay}
    >
      <div className="absolute top-4 right-4 z-10 bg-green-500 p-4 rounded-lg">
        <Icon className="inline-block text-3xl text-black" />
      </div>
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
        <h3 className="font-semibold text-xl text-center text-green-500">
          {service.title}
        </h3>
        <p>{service.description}</p>
        <a 
          href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-green-500 hover:underline"
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
        </a>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;