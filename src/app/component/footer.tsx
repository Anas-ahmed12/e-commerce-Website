import Link from "next/link";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-[#FAEDEB] h-auto">
      <footer className="text-gray-600 body-font">
        <div className="border-t border-gray-200">
          <div className="container py-6 flex flex-col md:flex-row mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start mb-4 md:mb-0">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Search
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Search
              </button>
            </div>
            <h2 className="text-black font-bold text-center md:text-left mb-4 md:mb-">Subscribe to get offers in your inbox</h2>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-4 w-full justify-center md:justify-start md:w-auto">
              <a className="text-gray-500">
                <FaMagnifyingGlass className='text-2xl text-black hover:text-orange-400' />
              </a>
              <a className="ml-3 text-gray-500">
                <FaInstagram className='text-2xl text-black hover:text-red-700 hover:font-bold'  />
              </a>
              <a className="ml-3 text-gray-500">
                <TiSocialFacebookCircular className='text-2xl text-black hover:text-blue-600' />
              </a>
              <a className="ml-3 text-gray-500">
                <CiLinkedin className="text-2xl text-black hover:text-blue-600" />
              </a>
            </span>
          </div>
          <p className="text-center -mt-4 mb-4">Feel free to contact</p>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center -mt-2 mb-5 ">
            <Link href={"#"} className="mr-5 text-black text-xs mt-2">MEN</Link>
            <Link href={"#"} className="mr-5 text-black text-xs mt-2">WOMEN</Link>
            <Link href={"#"} className="mr-5 text-black text-xs mt-2">BUY T-SHIRT</Link>
            <Link href={"#"} className="mr-5 text-black text-xs mt-2">ABOUT</Link>
            <Link href={"#"} className="mr-5 text-black text-xs mt-2">CONTACT</Link>
          </nav>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 Anas Store — @ T-SHIRTS
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              YOUR TRUST OUR SUCCESSES
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
