import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import TeamA from "../assets/team-image-A.jpg";


function AboutTeam({ image, name, text }) {
  return (
    <>
      <div className="flex flex-col items-center bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition">
        <figure className="w-40 h-40 rounded-full overflow-hidden mb-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </figure>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500 text-center mb-3">{text}</p>
        <div className="flex gap-4 text-green-500">
          <MdEmail />
          <FaLinkedinIn />
          <FaFacebookF />
          <FaWhatsapp />
        </div>
      </div>
    </>
  );
}

export default AboutTeam;
