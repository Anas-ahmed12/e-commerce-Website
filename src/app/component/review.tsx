"use client"
import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
import AOS from "aos"
import { useEffect } from "react";
import 'aos/dist/aos.css';

const Review = () => {
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
        <h2 className="title-font text-4xl text-gray-900 mt-2 text-center font-bold">
          Reviews
        </h2>
        <p className="text-base text-center font-bold leading-6 mt-4">
          "Shopping here was a breeze! The website is user-friendly, and my
          T-shirts arrived promptly. <br />I love how they fit and feel. The quality
          is impressive for the price, <br />and I appreciate the eco-friendly options
          available. Will be spreading the word!"
        </p>
        <div className="flex justify-center items-center">
          <IoStar className="text-[#F0AD4E] text-xl font-bold flex mt-6" />
          <IoStar className="text-[#F0AD4E] text-xl font-bold flex mt-6" />
          <IoStar className="text-[#F0AD4E] text-xl font-bold flex mt-6" />
          <IoStar className="text-[#F0AD4E] text-xl font-bold flex mt-6" />
          <IoStar className="text-[#F0AD4E] text-xl font-bold flex mt-6" />
        </div>
        <p className="text-center text-sm"> Jane Oliver</p>
        <div className=" pt-20 flex justify-center">
          <div className="flex flex-wrap -mx-4 -mb-32 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-[700px] overflow-hidden"> {/* Height increased */}
                <Image 
                  src={require("../../../public/review-1.jpg")} 
                  alt="T-Shirt" 
                  width={500}  // Set your desired width
                  height={800} // Height corresponding to increased size
                  data-aos="fade-right"
                />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-[700px] overflow-hidden"> {/* Height increased */}
                <Image 
                  src={require("../../../public/review-2.jpg")} 
                  alt="T-Shirt" 
                  width={500}  // Set your desired width
                  height={800} // Height corresponding to increased size
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;

