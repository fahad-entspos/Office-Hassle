"use client";

import { FcList } from "react-icons/fc";
import { IoMenuOutline } from "react-icons/io5";
// components/Navbar.js

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#F4F8FE] p-4">
      <div className=" px-0 lg:px-12 mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-1">
            <img className="w-10 h-10" src="/office.png" alt="Error" />
            <div className="text-black items-center text-lg flex flex-col  ">
              <h1 className=" text-base font-extrabold  font-serif">OFFICE</h1>
              <h1 className="text-sm text-[#366bff] font-black">HASSLE</h1>
            </div>
          </div>
          <button
            onClick={toggleNavbar}
            className="lg:hidden text-[#4a5252] focus:outline-none"
          >
            {isOpen ? (
              <IoMenuOutline className="h-8 w-8  rounded-sm text-white bg-[#366bff]" />
            ) : (
              <IoMenuOutline className="h-8 w-8 text-black" />
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center w-full lg:w-auto`}
        >
          <ul className=" flex flex-col gap-4 lg:gap-8  mt-3 lg:mt-0 items-start lg:items-center lg:flex-row ">
            <li>
            <Link href="/pages/home">
              <h1
          
                className="text-[#0383f3] font-axiforma font-semibold tracking-wide hover:text-[#366bff]"
              >
                Features
              </h1>
              </Link>
            </li>
            <li>
              <h1
                className="text-[#25334d] font-axiforma text-lg   tracking-wide hover:text-[#366bff]"
              >
                Pricing
              </h1>
            </li>
            <li>
              <h1
                className="text-[#25334d] font-axiforma text-lg   tracking-wide hover:text-[#366bff]"
              >
                Blog
              </h1>
            </li>
            <li>
              <h1
                className="text-[#25334d] font-axiforma text-lg   tracking-wide hover:text-[#366bff]"
              >
                Demo
              </h1>
            </li>
            <li className="text-black bg-white  py-[6px] px-5 shadow-xl text-lg font-semibold rounded-lg hover:text-white hover:bg-[#366bff]">
              <div>
                <button>Login</button>
              </div>
            </li>
            <li className="text-white bg-black py-[6px] px-5 shadow-xl text-lg font-semibold rounded-lg hover:bg-[#366bff]">
  <div>
    <Link href="/pages/signup">
      <h1>
        <button>Sign Up</button>
      </h1>
    </Link>
  </div>
</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
