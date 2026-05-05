import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/SHINY FLYER.png";
import { GoArrowUpRight } from "react-icons/go";
import { FaUserShield, FaShoppingCart } from "react-icons/fa";
import PopupModal from "./PopupModal";
import { useCart } from "../context/CartContext";
import emailjs from '@emailjs/browser';


const NavbarSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, toggleCart } = useCart();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="  bg-black text-white relative p-8 md:p-6 flex flex-col gap-4 lg:gap-y-12 font-lato">
        <nav className="md:p-2 flex justify-between items-center">
          <div className=" flex items-center space-x-1 cursor-pointer" onClick={() => navigate("/")}>
            <img className="h-8 w-12 rounded-full" src={logo} alt="shiny logo"  />
            <p className="text-lg font-semibold">SHIN<span className="text-green-500">Y</span></p>
          </div>
          <ul
            className={` flex flex-col md:gap-2  bg-green-500/60 fixed rounded top-0 right-0 backdrop-blur-lg p-24 gap-4 ${
              isOpen ? "scale-y-100" : "scale-y-0 "
            } origin-top z-30 transition-transform duration-300 md:flex-row md:scale-y-100 md:backdrop-blur-0 md:static md:p-2 md:bg-transparent`}
          >
            <li className="m-2 hover:scale-110 transition-transform duration-300">
              <Link to="/"
                className="py-2 text-sm md:text-md lg:text-lg hover:text-md transition-all duration-300 hover:text-green-500"
              >
                Home
              </Link>
            </li>
            <li className="m-2 hover:scale-110 transition-transform duration-300">
              <Link to="/about"
                className="py-2 text-sm md:text-md hover:text-md lg:text-lg transition-all duration-300 hover:text-green-500"
              >
                About Us
              </Link>
            </li>
            <li className="m-2 hover:scale-110 transition-transform duration-300">
              <Link
                to="/projects"
                className="py-2 text-sm md:text-md lg:text-lg hover:text-md transition-all duration-300 hover:text-green-500"
              >
                Projects
              </Link>
            </li>
           
            <li className="m-2 hover:scale-110 transition-transform duration-300">
              <Link 
                to="/services"
                className="py-2 text-sm md:text-md lg:text-lg hover:text-md transition-all duration-300 hover:text-green-500"
              >
                Services
              </Link>
            </li>
            <li className="m-2 hover:scale-110 transition-transform duration-300">
              <Link 
                to="/store"
                className="py-2 text-sm md:text-md lg:text-lg hover:text-md transition-all duration-300 hover:text-green-500"
              >
                Our Store
              </Link>
            </li>
            {/* <li className="m-2 hover:scale-110 transition-transform duration-300">
              <Link 
                to="/store"
                className="py-2 text-sm md:text-md lg:text-lg hover:text-md transition-all duration-300 hover:text-green-500"
              >
                Our Store
              </Link>
            </li> */}
            <li className="m-2 hover:scale-110 transition-transform duration-300 sm:hidden">
              <Link 
                className="py-2 text-sm md:text-md lg:text-lg hover:text-md transition-all duration-300 hover:text-green-500"
                onClick={()=> setIsModalOpen(true)}
              >
                Get Quote
              </Link>
            </li>
            <li className="sm:hidden m-2 hover:scale-110 transition-transform duration-300">
              <Link 
                to="/contact"
                className="py-2 text-sm md:text-md lg:text-lg hover:text-md transition-all duration-300 hover:text-green-500"
              >
                Contact
              </Link>
            </li>
           
          </ul>

          <div className="hidden md:block space-x-2 space-y-2">
             
              <ul className="flex space-x-4 items-center">
                <li className="hover:scale-110 transition-transform duration-300 flex items-center">
                  <Link to="/admin" className="text-green-500 hover:text-green-600 transition" title="Admin Login">
                    <FaUserShield size={22} />
                  </Link>
                </li>
                
                {location.pathname === "/store" && (
                  <li className="hover:scale-110 transition-transform duration-300 flex items-center">
                    <div onClick={toggleCart} className="text-green-500 hover:text-green-600 transition relative cursor-pointer" title="Shopping Cart">
                      <FaShoppingCart size={22} />
                      {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                          {cartItems.length}
                        </span>
                      )}
                    </div>
                  </li>
                )}

                <li className="hover:scale-110 transition-transform duration-300"><Link
                className="py-2 md:px-4 rounded-2xl bg-green-500 text-black text-sm md:text-md lg:text-lg border hover:bg-green-600 hover:text-black transition-all duration-300"
                href="#" onClick={()=> setIsModalOpen(true)}
              >
                Get Quote {<GoArrowUpRight className="inline-block" />}
              </Link></li>

              <li className="hover:scale-110 transition-transform duration-300"><Link
              to="/contact"
                className=" py-2 md:px-4 rounded-2xl border-2 border-green-500 text-green-500 text-sm md:text-md lg:text-lg hover:bg-green-600 hover:text-black transition-all duration-300 "
                href="#"
              >
                Contact {<GoArrowUpRight className="inline-block font-bold" />}
              </Link></li>
              </ul>
            
          </div>
            <PopupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get a Quote"
      >
        <p className="text-white">
          Fill out your details below and we will get back to you with a quote.
        </p>
        <form 
          className="flex flex-col gap-4 mt-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = {
              name: e.target.name.value,
              email: e.target.email.value,
              phone: e.target.phone.value,
              projectType: e.target.projectType.value,
              message: e.target.details.value,
              type: "quote"
            };

            try {
              // 1. Save to Database
              const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
              const response = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              });

              if (response.ok) {
                // 2. Send Auto-Reply via EmailJS
                emailjs.send(
                  'service_qd7dh3w', 
                  'template_26xj4fm', 
                  {
                    name: formData.name,
                    email: formData.email,
                    title: `Quote Request for ${formData.projectType}`,
                  },
                  '0vc5ZYvFCXzuVjVeH'
                );

                alert("Quote request sent! We will contact you shortly.");
                setIsModalOpen(false);
              } else {
                alert("Failed to send request. Please try again.");
              }
            } catch (error) {
              console.error("Error:", error);
              alert("Something went wrong.");
            }
          }}
        >
          <input name="name" type="text" placeholder="Full Name" required className="border px-3 py-2 rounded text-black" />
          <input name="email" type="email" placeholder="Email Address" required className="border px-3 py-2 rounded text-black" />
          <input name="phone" type="tel" placeholder="Phone Number" className="border px-3 py-2 rounded text-black" />
          
          <select name="projectType" className="border px-3 py-2 rounded text-black">
            <option value="" className="text-gray-500">Select Project Type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>

          <textarea name="details" placeholder="Project Details / Notes" className="border px-3 py-2 rounded text-black"></textarea>

          <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
            Get My Quote
          </button>
        </form>

      </PopupModal>

          {/* Mobile Admin/Cart Icons before Hamburger */}
          <div className="md:hidden absolute top-[30px] right-24 flex items-center space-x-4 z-30">
            <Link to="/admin" className="text-green-500 hover:text-green-600 transition" title="Admin Login">
              <FaUserShield size={35} />
            </Link>
            {location.pathname === "/store" && (
              <div onClick={toggleCart} className="text-green-500 hover:text-green-600 transition relative cursor-pointer" title="Shopping Cart">
                <FaShoppingCart size={35} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
            )}
          </div>

          <div
            onClick={toggleMenu}
            className={`hamburger md:hidden fixed bg-green-500 py-5 top-[30px] right-8 
                  h-8 w-12 z-30 rounded cursor-pointer before:content-[''] before:h-0.5 before:w-2/3 before:bg-white before:absolute before:top-4 before:left-2 before:transition before:duration-300 before:rounded-full after:content-[''] after:h-0.5 after:w-2/3 after:bg-black after:absolute after:top-6 after:left-2 after:rounded-full after:transition after:duration-300 ${
                    isOpen
                      ? "before:rotate-45 before:translate-y-1 after:-rotate-45 after:-translate-y-1 after:bg-white"
                      : ""
                  } `}
          ></div>
        </nav>
      </header>
    </>
  );
};

export default NavbarSection;
