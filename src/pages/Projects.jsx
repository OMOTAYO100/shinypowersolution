import React from 'react'
import NavbarSection from '../components/NavbarSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection' 
import ProjectCards from '../Cards/ProjectCards'

function Projects() {
  return (
    <div>
      <NavbarSection />
      <ProjectSection
        title={`Our Work in action`}
        description={`We are powering sustainable Solution`}
      />
      <ContactSection />
    </div>
  )
}

export default Projects