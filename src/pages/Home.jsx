import React from "react";
import AboutSection from "../components/AboutSection";
import TestimonialSection from "../components/TestimonialSection";
import HeroSection from "../components/HeroSection";
import NavbarSection from "../components/NavbarSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ProjectSection from "../components/ProjectSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <div>
      <NavbarSection />
      <HeroSection
        title={`SHINY POWER SOLUTION`}
        subtitle={`RELIABLE ENERGY FOR A SUSTAINABLE FUTURE`}
      />
      <AboutSection
        title={`About Shin`}
        description={`Your trusted partner in energy solutions`}
      />
      <ServicesSection />
      <BlogSection />
      <WhyChooseUsSection
        title={`Why Choose Us`}
        subtitle={`Advantage of our company`}
      />
      <ProjectSection
        title={`Our Projects`}
        description={`Explore our recent projects and initiatives`}
        limit={3}
      />
      <TestimonialSection title={`What Our Clients Say`} description={`Hear from our satisfied clients about their experiences with us`} />
      <ContactSection title={`Contact Us`} description={`We would love to hear from you! Whether you have questions about our services, need support, or want to discuss a project, feel free to reach out.`}  />
    </div>
  );
}

export default Home;
