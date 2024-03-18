import Banner from "@/components/Banner";
import MasterBanner from "@/components/MasterBanner";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="container mx-auto py-2 px-2 md:px-0 gap-4 flex flex-col md:flex-row items-center">
        <div className="md:w-8/12 w-full">
          <MasterBanner />
        </div>
        <div className="md:w-4/12 w-full flex flex-col gap-4">
          <Banner />
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
