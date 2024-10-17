"use client"
import Image from "next/image";
import React from "react";
import AOS from "aos"
import { useEffect } from "react";
import 'aos/dist/aos.css';

const Onsale = () => {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  },[]);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Summer Collection
            </p>
            <h1 className="text-3xl font-bold title-font -mb-8 text-black">
            On Sale T-Shirts
              <div className="h-2 w-32 bg-[#FAEDEB] m-auto mt-2"></div>
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center text-center">
                  <div className="relative w-full h-96"> {/* Increased height */}
                    <Image
                      src={require(`../../../public/summer-${item}.jpg`)}
                      alt="Shirts"
                      layout="fill"
                      className="object-cover rounded-md"
                      data-aos="zoom-in-up"
                    />
                  </div>
                  <div className="w-full mt-4">
                    <h3 className="text-gray-500">{item % 2 === 0 ? "MEN" : "WOMEN"}</h3>
                    <h2 className="title-font font-medium text-lg -mt-2 text-gray-900">
                      T-Shirt Name {item + 6}
                    </h2>
                    <span className="inline-flex mt-2">
                    <div className="w-6 h-6 border-2 border-solid text-[13px] flex items-center justify-center ml-2 hover:bg-black hover:text-white hover:font-bold">
                          XS
                        </div>
                        <div className="w-6 h-6 border-2 border-solid text-[13px] flex items-center justify-center ml-2 hover:bg-black hover:text-white hover:font-bold">
                          S
                        </div>
                        <div className="w-6 h-6 border-2 border-solid text-[13px] flex items-center justify-center ml-2 hover:bg-black hover:text-white hover:font-bold">
                          M
                        </div>
                        <div className="w-6 h-6 border-2 border-solid text-[13px] flex items-center justify-center ml-2 hover:bg-black hover:text-white hover:font-bold">
                          L
                        </div>
                        <div className="w-6 h-6 border-2 border-solid text-[13px] flex items-center justify-center ml-2 hover:bg-black hover:text-white hover:font-bold">
                          XL
                        </div>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Onsale;
