"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-[#FAEDEB]">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-40 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h4 className="text-xl">
              <Typewriter
                options={{
                  strings: ["Mens / Womens"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <h1
              className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900"
              data-aos="flip-right"
            >
              Your Style, Your Statement: Explore Our Collection for All."
            </h1>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#000000] border-0 py-2 px-8 mt-2 focus:outline-none rounded text-lg hover:text-black hover:font-bold hover:bg-transparent hover:border-2 hover:border-solid hover:border-black transition duration-300">
                Shop Collection
              </button>
            </div>
          </div>
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-white border-solid border-2 border-black"
            data-aos="fade-left"
          >
            <Image
              src={require("../../../public/hero.png")}
              alt="T-Shirts"
              className=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
