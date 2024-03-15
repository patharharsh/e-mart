"use client";
import { useState } from "react";
import TopNav from "./header/TopNav";
import HeaderActionBtns from "./HeaderActionBtns";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="md:hidden flex justify-between p-4 bg-[#00B207] text-white">
        <div className="flex items-center gap-2">
          <button onClick={toggleDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
          <div className="text-xl">E-mart</div>
        </div>
        <div>
          <HeaderActionBtns />
        </div>
      </div>
      <div
        className={`fixed md:hidden top-0 left-0 z-40 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          <TopNav />
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50 md:hidden"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default MobileNav;
