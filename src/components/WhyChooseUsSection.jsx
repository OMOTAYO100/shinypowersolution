import { FaSolarPanel, FaBatteryFull } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { WiStrongWind } from "react-icons/wi";
import ResidentailImage from "../assets/Residential-Solar-Installation-1.png";
import React from "react";
import CardsSection from "../Cards/WhyChooseUsCardsSection";

function WhyChooseUsSection({ title }) {
  return (
    <section className="p-6 md:p-16 lg:p-20 space-y-12 bg-slate-100 shadow-lg shadow-gray-600 font-Figtree" data-aos="fade-up" data-aos-delay="200">
      <h2 className="text-2xl sm:text-4xl text-center font-semibold" data-aos="fade-up" data-aos-delay="300">
        {title}
      </h2>

      <h4 className="text-center text-gray-400 font-semibold sm:w-[60%] mx-auto" data-aos="fade-up" data-aos-delay="400">
        Choosing the right energy partner is more than just about electricity,
        its about trust , long-term value and brighter future. At
        <span className="text-green-500"> Shiny Power Solution</span>, we
        provide
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="400">
        <CardsSection
          icon={<WiStrongWind />}
          bg="bg-green-200"
          title={"Reliable Energy"}
          subtitle={
            "We deliver consistent, uninterrupted power you can count on, day after day"
          }
        />
        <CardsSection
          bg="bg-green-200"
          title={"Affordable Solution"}
          subtitle={`Our system are designed to cut costs and maximaze value without compromising quality.`}
          icon={<FaSolarPanel />}
         data-aos="fade-up" data-aos-delay="500"
        />
        <CardsSection
          bg="bg-green-200"
          icon={<FaBatteryFull />}
          title={"Sustainable Approach"}
          subtitle={`We're committed to clean, renewable energy that reduces enviromental impart and support a greener planet`}
          data-aos="fade-up" data-aos-delay="600"
        />
        <CardsSection
          bg="bg-green-200"
          icon={<MdSupportAgent />}
          title={"Expert Support"}
          subtitle={
            "From consultation to installation and beyond, our dedicated team ensures smooth professional service every step of the way"}
          data-aos="fade-up" data-aos-delay="700"
        />
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
