import React from "react";

function FirstquoteSection() {
  return (
    <section className="p-6 md:p-16 lg:p-20 bg-gradient-to-t from-yellow-100 via-yellow-300 to-yellow-100 ">
      <div className="px-2 py-8 bg-slate-100 rounded space-y-6">
         <h2 className="text-2xl font-bold text-center">
            Secure Your Future Today
          </h2>
        <blockquote>

          <p className=" text-center text-xl sm:w-[55%] mx-auto ">
            Solar energy is the only permanent, Inexhaustible fuel source for
            our civilization.
          </p>
        </blockquote>
        <div className="justify-self-center">
             <a
        class="border-2 border-black px-6 py-2 mt-2 rounded"
        href="#"
      >
        Get Started
      </a>
        </div>
      </div>
   
    </section>
  );
}

export default FirstquoteSection;
