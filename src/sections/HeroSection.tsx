import Banner from "@/components/Banner";
import MasterBanner from "@/components/MasterBanner";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="container mx-auto py-2 gap-4 flex items-center">
        <div className="w-8/12">
          <MasterBanner />
        </div>
        <div className="w-4/12 flex flex-col gap-4">
          <Banner />
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
