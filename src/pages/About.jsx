import React from "react";

import NavbarSection from "../components/NavbarSection";
import AboutHistory from "../components/AboutHistory";
import ContactSection from '../components/ContactSection'


function About() {
  return (
    <div>
      <NavbarSection />
      <AboutHistory
        title={`More About ShinY`}
        subtitle={`Powering a brighter tomorrow`}
        description={`Shiny has been a pioneer in the renewable energy industry since 2017, delivering groundbreaking solutions to help reduce electricity consumption by up to 10%. With decades of expertise, we are committed to driving innovation that supports a sustainable and energy-efficient future.`}
      />
      <ContactSection />

    </div>
  );
}

export default About;
