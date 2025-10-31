import React from "react";
import { GiSolarPower } from "react-icons/gi";
import AboutHistoryCard from "../Cards/AboutHistoryCard";
import AboutOffers from "../Cards/AboutOffers";
import WorkProgress from "../components/WorkProgress"
import AboutTeam from "../Cards/AboutTeam"
import aboutData from "../data/TeamData";
import TeamA from '../assets/team-image-A.jpg'

import panelA from "../assets/solar-panel-image-A.jpg";

function AboutHistory({ title, subtitle, description }) {
  return (
    <>
      <div className="p-6 md:p-16 lg:p-20 font-Figtree">
        <div className="flex flex-col md:flex-row items-center gap-12 sm:*:size-2/4 ">
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-green-400">{subtitle}</h4>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-gray-400">{description}</p>

            <div className="grid grid-col-1 md:grid-cols-2 gap-4 ">
              <AboutHistoryCard
                text={
                  "We design and install efficient solar inverter systems for homes and businesses."
                }
                icon={<GiSolarPower />}
                header={`Solar inverter setup`}
              />
              <AboutHistoryCard
                text={
                  "We provide cost-effective renewable energy solutions tailored to your budget."
                }
                icon={<GiSolarPower />}
                header={`Affordable pricing`}
              />
              <AboutHistoryCard
                text={
                  "We design and install efficient solar inverter systems for homes and businesses."
                }
                icon={<GiSolarPower />}
                header={`Solar inverter setup`}
              />
              <AboutHistoryCard
                text={
                  "We design and install efficient solar inverter systems for homes and businesses."
                }
                icon={<GiSolarPower />}
                header={`Solar inverter setup`}
              />
              <AboutHistoryCard
                text={
                  "We design and install efficient solar inverter systems for homes and businesses."
                }
                icon={<GiSolarPower />}
                header={`Solar inverter setup`}
              />
              <AboutHistoryCard
                text={
                  "We design and install efficient solar inverter systems for homes and businesses."
                }
                icon={<GiSolarPower />}
                header={`Solar inverter setup`}
              />
            </div>
          </div>

          <div className=" flex flex-col justify-center">
            <figure className="relative md:left-20">
              <img
                className="h-[400px] w-full md:w-[400px] rounded-2xl"
                src={panelA}
                alt=""
              />
            </figure>
            <figure className="absolute bottom-8 hidden sm:block">
              <img className="size-60 rounded-2xl" src={panelA} alt="" />
            </figure>
          </div>
        </div>

        {/* <div className=" flex items-center justify-center mt-8 space-x-4 md:space-x-20 bg-slate-100 text-green-500">
          <p className="text-xl">Lithuim</p>
          <p className="text-xl">Lithuim</p>
          <p className="text-xl">Lithuim</p>
          <p className="text-xl">Lithuim</p>
          <p className="text-xl">Lithuim</p>
          <p className="text-xl">Lithuim</p>
        </div> */}

        <AboutOffers />
        <WorkProgress />
        
            {/* Team Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
