import React from "react";
import { GiSolarPower } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineRecordVoiceOver } from "react-icons/md";

function AboutHistoryCard({ icon, header, text,  dataAos, dataAosDelay }) {
  return (
    <div className="border-2 border-gray-400 p-2 flex gap-4 rounded-2xl" data-aos={dataAos} data-aos-delay={dataAosDelay}>
      <p className="text-green-500 text-4xl">{icon}</p>
      <div>
        <h3>{header}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
}

export default AboutHistoryCard;
