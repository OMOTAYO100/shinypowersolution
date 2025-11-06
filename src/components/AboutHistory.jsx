import React from "react";
import { GiSolarPower } from "react-icons/gi";
import { FaAccusoft } from "react-icons/fa6";
import { IoLayersOutline } from "react-icons/io5";
import { MdOutlineSolarPower } from "react-icons/md";
import { GiHypersonicBolt } from "react-icons/gi";
import { SiJsonwebtokens } from "react-icons/si";
import AboutHistoryCard from "../Cards/AboutHistoryCard";

import WorkProgress from "../components/WorkProgress"
import AboutTeam from "../Cards/AboutTeam"
import aboutData from "../data/TeamData";


import panelT from "../assets/solar-panel-image-T.jpg";
import panelC from "../assets/solar-panel-image-M.jpg";

function AboutHistory({ title, subtitle, description }) {
  return (
    <>
      <div className="p-6 md:p-16 lg:p-20 font-Figtree">
        <div className="flex flex-col md:flex-row items-center gap-12 sm:*:size-2/4" data-aos="fade-up" data-aos-delay="400">
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-green-400" data-aos="fade-up" data-aos-delay="100">{subtitle}</h4>
            <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="200">{title}</h2>
            <p className="text-gray-400" data-aos="fade-up" data-aos-delay="300">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <AboutHistoryCard
    text="We design and install efficient solar inverter systems for homes and businesses."
    icon={<GiSolarPower />}
    header="Solar inverter setup"
    dataAos="fade-up"
    dataAosDelay="100"
  />

  <AboutHistoryCard
    text="We provide cost-effective renewable energy solutions tailored to your budget."
    icon={<FaAccusoft />}
    header="Affordable pricing"
    dataAos="fade-up"
    dataAosDelay="200"
  />

  <AboutHistoryCard
    text="We design and install efficient solar inverter systems for homes and businesses."
    icon={<MdOutlineSolarPower />}
    header="Energy Efficiency Solutions"
    dataAos="fade-up"
    dataAosDelay="300"
  />

  <AboutHistoryCard
    text="We design and install efficient solar inverter systems for homes and businesses."
    icon={<GiHypersonicBolt />}
    header="Battery Storage Installation"
    dataAos="fade-up"
    dataAosDelay="400"
  />

  <AboutHistoryCard
    text="We design and install efficient solar inverter systems for homes and businesses."
    icon={<SiJsonwebtokens />}
    header="Home & Business Electrification"
    dataAos="fade-up"
    dataAosDelay="500"
  />

  <AboutHistoryCard
    text="We design and install efficient solar inverter systems for homes and businesses."
    icon={<IoLayersOutline />}
    header="Sustainable Energy Consulting"
    dataAos="fade-up"
    dataAosDelay="600"
  />
</div>

          </div>

          <div className=" flex flex-col justify-center">
            <figure className="relative md:left-20">
              <img
                className="rounded max-h-screen w-full object-cover"
                src={panelT}
                alt="image"
                loading="lazy"
              />
            </figure>
            <figure className="absolute bottom-8 hidden sm:block">
              <img className="size-60 rounded-2xl" src={panelC} alt="image" loading="lazy" />
            </figure>
          </div>
        </div>

        


        <WorkProgress />

            {/* Team Section */}
      <section className="mt-16 p-6 md:p-12 bg-slate-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aboutData.map((team) => (
            <AboutTeam
              key={team.id}
              title={team.title}
              subtitle={team.subtitle}
              image={team.image}
              name={team.name}
              text={team.text}
            />
          ))}
        </div>
      </section>
        
      
      </div>
    </>
  );
}

export default AboutHistory;
