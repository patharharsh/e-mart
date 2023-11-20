"use client";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TbGardenCart } from "react-icons/tb";
import { GoHeart } from "react-icons/go";

export const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="bg-white max-w-7xl mx-auto shadow-lg mt-5 rounded-lg sticky top-3">
      <div className=" px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center md:justify-between sm:items-stretch sm:justify-start">
            <div className="">
              <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
            </div>
            <div className="hidden sm:block">
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
              </div>
            </div>
            <div className="hidden sm:block ">
              <div className="flex justify-center space-x-4">
                <div className="flex">
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-900 px-1 py-2 text-xl font-medium"
                  >
                    <GoHeart />
                  </a>
                </div>
                <div className="flex">
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-900 px-1 py-2 text-xl font-medium"
                  >
                    <TbGardenCart />
                  </a>
                </div>
                <div  className="flex relative">
                  <span
                    className="text-gray-800 hover:text-gray-900 px-1 py-2 text-xl font-medium cursor-pointer"
                    onClick={toggleProfileDropdown}
                  >
                    <CgProfile />
                  </span>
                  {isProfileOpen && <div className="absolute min-w-[200px] flex flex-col gap-3 p-4 bg-white shadow-lg top-[130%] rounded right-0">
                    <a href="#"> Profile </a>
                    <a href="#"> login </a>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
