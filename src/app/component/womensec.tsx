"use client"
import Image from "next/image";
import React from "react";
import AOS from "aos"
import { useEffect } from "react";
import 'aos/dist/aos.css';

const Womensec = () => {
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
        <div className="container py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden justify-end flex">
            <Image
              src={require("../../../public/collection-03.jpg")}
              alt="T-SHIRTS"
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center justify-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <p className="leading-relaxed text-base">Women</p>
                <h1 className="text-black text-4xl font-bold title-font mb-3" data-aos="flip-right">
                  Spring Summer Collection
                </h1>
                <p className="leading-relaxed text-sm">
                  Discover Your Style with T-SHIRTS STORE! We specialize in chic
                  and comfortable women’s t-shirts that effortlessly blend
                  fashion with function. Our collection offers something for
                  everyone, featuring unique prints, vibrant colors, and
                  high-quality fabrics. Whether you’re dressing up for a night
                  out or keeping it casual, our t-shirts are designed to make
                  you feel confident and stylish. Shop now and elevate your
                  wardrobe with our trendy pieces!
                </p>
                <button className="bg-black hover:bg-[#FAEDEB] hover:text-black text-white font-bold py-2 mt-4 px-4 rounded">
                  See Whole Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Womensec;
