"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={require("../../../public/logo.png")} alt='Store' width={100} height={100}/> 
          </a>

          {/* Toggle Button */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <nav className={`md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ${isOpen ? "block" : "hidden"} lg:flex`}>
            <Link href={"#"} className="mr-7 text-black font-bold hover:underline decoration-black decoration-4">MEN</Link>
            <Link href={"#"} className="mr-7 text-black font-bold hover:underline decoration-black decoration-4">WOMEN</Link>
            <Link href={"#"} className="mr-7 text-black font-bold hover:underline decoration-black decoration-4">BUY T-SHIRT</Link>
            <Link href={"#"} className="mr-7 text-black font-bold hover:underline decoration-black decoration-4">ABOUT</Link>
            <Link href={"#"} className="mr-7 text-black font-bold hover:underline decoration-black decoration-4">CONTACT</Link>
          </nav>

          <button className='border-2 border-transparent bg-black text-white font-bold px-3 py-1 rounded-full hover:text-black hover:bg-transparent hover:border-solid hover:border-black transition duration-300'>
            Search Collection
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
