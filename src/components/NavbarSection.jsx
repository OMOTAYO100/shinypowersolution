import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/shiny-logo.jpg";
import { GoArrowUpRight } from "react-icons/go";


const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="  bg-black text-white relative p-8 md:p-6 flex flex-col gap-4 lg:gap-y-12 font-lato">
        <nav className="md:p-2 flex justify-between items-center">
          <div className=" flex items-center space-x-1 cursor-pointer">
            <img className="h-8 w-8 rounded-full" src={logo} alt="shiny logo" />
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
            <li className="m-2 hover:scale-110 transition-transform duration-300 sm:hidden">
              <Link 
                to="/contact"
                className="py-2 text-sm md:text-md lg:text-lg hover:text-md transition-all duration-300 hover:text-green-500"
              >
                Get Quote
              </Link>
            </li>
            <li className="m-2 hover:scale-110 transition-transform duration-300">
              <Link 
                to="/contact"
                className="py-2 text-sm md:text-md lg:text-lg hover:text-md transition-all duration-300 hover:text-green-500"
              >
                Contact
              </Link>
            </li>
           
          </ul>

          <div className="hidden md:block space-x-2 space-y-2">
             
              <ul className="flex space-x-2">
                <li className="hover:scale-110 transition-transform duration-300"><Link
                className="py-2 md:px-4 rounded-2xl bg-green-500 text-black text-sm md:text-md lg:text-lg border hover:bg-green-600 hover:text-black transition-all duration-300"
                href="#"
              >
                Get Quote {<GoArrowUpRight className="inline-block" />}
              </Link></li>

              <li className="hover:scale-110 transition-transform duration-300"><Link
                className=" py-2 md:px-4 rounded-2xl border-2 border-green-500 text-green-500 text-sm md:text-md lg:text-lg hover:bg-green-600 hover:text-black transition-all duration-300 "
                href="#"
              >
                Contact {<GoArrowUpRight className="inline-block font-bold" />}
              </Link></li>
              </ul>
              
              
            
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
