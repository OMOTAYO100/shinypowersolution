import React from "react";
import NavbarSection from "../components/NavbarSection";
import ContactSection from "../components/ContactSection";

function Contact() {
  return (
    <>
      <NavbarSection />
      <div className="mt-2 p-6 md:p-16 lg:p-20 bg-white text-start font-Figtree">
        <ContactSection
          title={`Get in touch`}
          description={`We are here to help you. Please fill out the form below and we will get back to you as soon as possible.`}
        />
      </div>
    </>
  );
}

export default Contact;
