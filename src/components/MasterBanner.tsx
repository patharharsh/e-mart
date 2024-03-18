import React from "react";
import { GoArrowRight } from "react-icons/go";

const MasterBanner = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden relative">
      <div className=" absolute z-1  top-3 md:top-[20%] left-10 ">
        <h1 className="md:text-[36px] text-[22px] lg:text-[56px] leading-[120%] font-semibold w-2/3 text-white ">Fresh & Healthy Organic Food</h1>
        <div className="border-l-2 py-2 pl-5 text-white my-5">
          <h5 className="lg:text-2xl">Sale up to <span>30% OFF</span></h5>
          <h6 className="lg:text-base">Free shiping on all yoor order.</h6>
        </div>
        <button className="flex items-center text-[#00B207] bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2">Shop Now <GoArrowRight size={20} /></button>
      </div>
      <img src="/Bannar1.png" className="w-full" />
    </div>
  );
};

export default MasterBanner;
