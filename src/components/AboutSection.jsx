import React from "react";
import { Link } from "react-router-dom";
import panelP from "../assets/solar-panel-image-P.jpg";
import { GoArrowUpRight } from "react-icons/go";

function AboutSection({ title, description }) {
  return (
    <section className="p-6 md:p-16 lg:p-20 bg-slate-100 font-Figtree">
      <h2
        className="text-center text-3xl sm:text-4xl font-semibold mb-4"
        data-aos="fade-up"
      >
        {title}
        <span className="text-green-500 animate-pulse">Y</span>
      </h2>
      <h3
        className="text-green-500 text-center sm:text-xl font-semibold mb-16 sm:w-[60%] mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {description}
      </h3>
      <div
        className="flex flex-col sm:flex-row items-center gap-6 sm:*:size-2/4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <figure>
          <img
            className="rounded max-h-screen w-full object-cover"
            src={panelP}
            alt=""
            loading="lazy"
          />
        </figure>

        <div className="space-y-6">
          <div>
            <p className="mb-4" data-aos="fade-up" data-aos-delay="600">
              At{" "}
              <span className="font-semibold text-green-500">
                Shiny Power Solution
              </span>
              , we believe that access to clean, reliable, and affordable energy
              drives progress. Our mission is to light up homes, businesses, and
              communities through innovative solar and renewable energy
              solutions that deliver lasting impact.
            </p>
            <p className="mb-4" data-aos="fade-up" data-aos-delay="700">
              Focused on sustainability, efficiency, and trust, we provide
              tailored power systems that meet the unique needs of our clients.
              From residential rooftops to large-scale commercial projects, we
              combine cutting-edge technology with expert service to power a
              brighter, greener future reducing costs, lowering carbon
              footprints, and empowering everyone to embrace renewable energy
              with confidence.
            </p>
          </div>

          <div
            className="mt-6 border-2 border-green-500 w-fit  rounded-full justify-start p-2 hover:bg-green-500 hover:text-white transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <button>
              <Link to="/services">
                Our Services{" "}
                <GoArrowUpRight className="inline-block text-2xl" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
