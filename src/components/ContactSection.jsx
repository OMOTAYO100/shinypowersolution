import React from "react";
import ContactImage from "../assets/contact-image.jpg";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function ContactSection({ title, description }) {
  const [message, setMessage] = useState(
    "Hi, I’d like to know more about your services."
  );
  return (
    // <section className="p-6 md:p-16 lg:p-20 bg-white font-Figtree">
    //   <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-6 items-stretch justify-center">
    //     <div className="flex-1 w-full min-h-[500px] flex items-center justify-center ">
    //       <figure className=" relative w-full shadow-lg rounded-lg overflow-hidden border-2 border-gray-200 ">
    //         <img
    //           className="w-full h-[500px] object-cover shadow-lg rounded-lg"
    //           src={ContactImage}
    //           alt="contact-image"
    //           loading="lazy"
    //         />

    //         <h2 className="absolute inset-0 flex items-start justify-center p-6 text-green-500 text-5xl md:text-4xl lg:text-5xl font-bold">
    //           <TypeAnimation
    //             sequence={[
    //               "Need energy solution? Call us today!", // text
    //               2000,
    //               "",
    //               "Go green with Shiny Power Solution ⚡",
    //               1000,
    //             ]}
    //             speed={1}
    //             repeat={Infinity}
    //           />
    //         </h2>

    //         <div className="absolute bottom-4 md:bottom-8 left-4 flex gap-4 text-white text-xl">
    //            <div className="">
    //     <div className="flex flex-col gap-4 ">
    //       <h2 className="text-2xl font-bold" data-aos="fade-up" data-aos-delay="300">
    //         SHIN<span className="text-green-500">Y</span>
    //       </h2>
    //       <p className="w-82 text-gray-100" data-aos="fade-up" data-aos-delay="400">
    //         Explore the latest advancements in renewable energy, sustainable
    //         living practices, and cutting-edge.
    //       </p>
    //       <h4 className="text-2xl font-semibold text-green-500" data-aos="fade-up" data-aos-delay="500">Follow Us</h4>
    //       <div className="flex gap-4">
    //         <FaFacebookF className="text-3xl hover:text-green-500 cursor-pointer bg-blue-500 p-1 rounded-full" data-aos="fade-up" data-aos-delay="600" />
    //           <FaInstagram className="text-3xl hover:text-green-500 cursor-pointer bg-gradient-to-b from-purple-500 via-red-500 to-yellow-400 p-1 rounded-full" data-aos="fade-up" data-aos-delay="700" />
    //           <FaTwitter className="text-3xl hover:text-green-500 cursor-pointer bg-blue-400 p-1 rounded-full" data-aos="fade-up" data-aos-delay="800" />
    //           <FaLinkedin className="text-3xl hover:text-green-500 cursor-pointer bg-blue-400 p-1 rounded-full" data-aos="fade-up" data-aos-delay="900" />
    //       </div>
    //     </div>
    //   </div>
    //         </div>
    //       </figure>
    //     </div>

    //     <div className="flex-1 w-full min-h-[500px] flex flex-col justify-center shadow-lg p-6 rounded-lg border-2 border-gray-200" data-aos="fade-up" data-aos-delay="400">
    //       <h2 className="text-3xl font-bold mb-4 text-center text-green-500" data-aos="fade-up" data-aos-delay="200">
    //         {title}
    //       </h2>
    //       <p className="text-center text-gray-600" data-aos="fade-up" data-aos-delay="300">{description}</p>

    //       <form className="space-y-4" data-aos="fade-up" data-aos-delay="400">
    //         <div>
    //           <label
    //             htmlFor="name"
    //             className="block text-sm font-medium text-gray-700"
    //             data-aos="fade-up" data-aos-delay="500"
    //           >
    //             Name
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Shiny"
    //             id="name"
    //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" 
    //             data-aos="fade-up" data-aos-delay="600"
    //           />
    //         </div>

    //         <div>
    //           <label
    //             htmlFor="email"
    //             className="block text-sm font-medium text-gray-700"
    //             data-aos="fade-up" data-aos-delay="700"
    //           >
    //             Email
    //           </label>
    //           <input
    //             type="email"
    //             placeholder="@Shiny.com"
    //             id="email"
    //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
    //             data-aos="fade-up" data-aos-delay="800"
    //           />
    //         </div>

    //         <div>
    //           <label
    //             htmlFor="message"
    //             className="block text-sm font-medium text-gray-700"
    //             data-aos="fade-up" data-aos-delay="900"
    //           >
    //             Message
    //           </label>
    //           <textarea
    //             id="message"
    //             rows="4"
    //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
    //             data-aos="fade-up" data-aos-delay="900"
    //             value={message}
    //             onChange={(e) => setMessage(e.target.value)}
    //           ></textarea>
    //         </div>

    //         <button
    //           type="submit"
    //           className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
    //           data-aos="fade-up" data-aos-delay="1000"
    //         >
    //           Send Message
    //         </button>
    //       </form>
    //     </div>
    //   </div>

    
    // </section>

    <section className="p-6 md:p-16 lg:p-20 bg-white font-Figtree">
  <div className="flex flex-col-reverse md:flex-row gap-6 items-stretch justify-center">
    {/* Left Side - Image and Overlay */}
    <div className="flex-1 w-full min-h-[500px] flex items-center justify-center">
      <figure className="relative w-full h-full shadow-lg rounded-lg overflow-hidden border-2 border-gray-200">
        <img
          className="w-full h-full object-cover shadow-lg rounded-lg"
          src={ContactImage}
          alt="contact-image"
          loading="lazy"
        />

        <h2 className="absolute inset-0 flex items-start justify-center p-6 text-green-500 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          <TypeAnimation
            sequence={[
              "Need energy solution? Call us today and go sustainable!", // text
              2000,
              "",
              "Go green with Shiny Power Solution ⚡",
              1000,
            ]}
            speed={1}
            repeat={Infinity}
          />
        </h2>

        {/* Overlay content (bottom left) */}
        <div className="absolute bottom-4 md:bottom-8 left-4 flex gap-4 text-white text-xl">
          <div>
            <div className="flex flex-col gap-4">
              <h2
                className="text-2xl font-bold"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                SHIN<span className="text-green-500">Y</span>
              </h2>
              <p
                className="w-82 text-gray-100"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Explore the latest advancements in renewable energy, sustainable
                living practices, and cutting-edge.
              </p>
              <h4
                className="text-2xl font-semibold text-green-500"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Follow Us
              </h4>
              <div className="flex gap-4">
                <FaFacebookF
                  className="text-3xl hover:text-green-500 cursor-pointer bg-blue-500 p-1 rounded-full"
                  data-aos="fade-up"
                  data-aos-delay="600"
                />
                <FaInstagram
                  className="text-3xl hover:text-green-500 cursor-pointer bg-gradient-to-b from-purple-500 via-red-500 to-yellow-400 p-1 rounded-full"
                  data-aos="fade-up"
                  data-aos-delay="700"
                />
                <FaTwitter
                  className="text-3xl hover:text-green-500 cursor-pointer bg-blue-400 p-1 rounded-full"
                  data-aos="fade-up"
                  data-aos-delay="800"
                />
                <FaLinkedin
                  className="text-3xl hover:text-green-500 cursor-pointer bg-blue-400 p-1 rounded-full"
                  data-aos="fade-up"
                  data-aos-delay="900"
                />
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>

    {/* Right Side - Contact Form */}
    <div
      className="flex-1 w-full min-h-[500px] flex flex-col justify-center shadow-lg p-6 rounded-lg border-2 border-gray-200"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h2
        className="text-3xl font-bold mb-4 text-center text-green-500"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {title}
      </h2>
      <p
        className="text-center text-gray-600 mb-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {description}
      </p>

      <form className="space-y-4" data-aos="fade-up" data-aos-delay="400">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Shiny"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="@Shiny.com"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            data-aos="fade-up"
            data-aos-delay="800"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            data-aos="fade-up"
            data-aos-delay="900"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

  );
}

export default ContactSection;
