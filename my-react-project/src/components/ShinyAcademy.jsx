import React from 'react'
import AboutImg from '../assets/About-image.webp'
import { motion } from 'framer-motion'
function ShinyAcademy() {
  return (
    <section className="p-6 md:p-16 mt-12 flex flex-col-reverse md:flex-row items-center sm:gap-12 justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 flex flex-col items-start gap-6 sm:mt-12"
        >
          <h3 className="text-xl mt-12 bg-[#E6F6EE] dark:bg-[#0d2818] text-[#00A859] dark:text-[#00C96B] py-1 px-3 rounded-full font-lato transition-colors duration-300">
            About The Academy
          </h3>

          <h1 className="w-full text-3xl sm:text-[70px] font-bold sm:leading-[70px] font-lato text-gray-400 md:text-black transition-colors duration-300">
            Practical Skills That{" "}
            <span className="text-[#008c4a] dark:text-[#00C96B]">Actually Get You Hired</span>
          </h1>

          <p className="text-[#737373] dark:text-[#a0a0b0] text-lg transition-colors duration-300">
            The solar industry in Nigeria is booming but there's a serious
            shortage of skilled installers.
          </p>
          <p className="text-[#737373] dark:text-[#a0a0b0] text-lg transition-colors duration-300">
            Shiny Power Solution Academy bridges that gap with intensive,
            practical training built around real-world projects. Whether you're
            starting from scratch or want to formalise your skills, our program
            gives you everything you need: technical knowledge, hands-on
            practice, business fundamentals, and a certificate employers and
            clients trust.
          </p>

          <a
            href="https://shinypoweracademy.com/" target="_blank" rel="noopener noreferrer"
            className="bg-[#00A859] text-white py-2 px-4 rounded-full hover:bg-[#008c4a] transition duration-300"
          >
            Explore the Curriculum
          </a>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex-1 h-[600px] w-full"
        >
          <img
            src={AboutImg}
            alt="About Us"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </motion.figure>
      </section>
  )
}

export default ShinyAcademy