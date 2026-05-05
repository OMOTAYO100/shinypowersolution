import React from 'react'
import TestimonialCards from '../Cards/TestimonialCards.jsx'
import TestimonialA from '../assets/testimonial-A.jpg';
import TestimonialB from '../assets/testimonial-B.jpg';
import TestimonialC from '../assets/testimonial-C.jpg';

function TestimonialSection({ title, description}) {
  return (
    <section className='p-6 md:p-16 lg:p-20 space-y-6' data-aos="fade-up">
      <div className='space-y-2'>
        <p className='text-lg text-green-500' data-aos="fade-up">{description}</p>
       <h2 className='text-4xl font-semibold' data-aos="fade-up">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="300">
        <TestimonialCards name="Mrs. Hannah" Images={TestimonialA} description="“Our experience with Shiny Power Solution was seamless from start to finish — professional team, excellent service, and incredible energy savings!”" />
        <TestimonialCards name="Mr. Segun" Images={TestimonialB} description="I never imagined switching to solar could be this easy. The installation was fast, and my electricity bills have dropped drastically!" />
        <TestimonialCards name="Mr. John" Images={TestimonialC} description="Reliable, efficient, and eco-friendly! Shiny Power Solution truly delivered on their promise of clean and affordable energy" />
      </div>
       
    </section>
  )
}

export default TestimonialSection