import {
  FaSolarPanel,
  FaBatteryFull,
  FaLightbulb,
} from "react-icons/fa";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

import panelC from "../assets/solar-panel-image-C.jpg";
import panelE from "../assets/solar-panel-image-E.jpg";
import panelF from "../assets/solar-panel-image.jpg";



 const Services = [
  {
    id: 1,
    icon: FaSolarPanel,
    image: panelC,
    title: "Solar Panel Installation",
    description: "Professional installation of high-efficiency solar panels tailored to your energy needs. Our expert team ensures optimal placement and maximum energy generation for your home or business.",
    delay: 400
  },
  {
    id: 2,
    icon: FaBatteryFull,
    image: panelE,
    title: "Energy Storage Solution",
    description: "Advanced battery systems that store excess solar energy for use during peak hours or power outages. Achieve energy independence with our reliable storage solutions.",
    delay: 500
  },
  {
    id: 3,
    icon: FaLightbulb,
    image: panelF,
    title: "System Maintenance & Support",
    description: "Comprehensive maintenance packages to keep your solar system running at peak performance. Our team provides regular inspections, cleaning, and prompt technical support.",
    delay: 600
  }
];

export default Services;