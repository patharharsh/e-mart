import { Typography } from "@mui/material";
import React from "react";
import BaseButton from "../BaseButton";

interface HeroBannerProps {
    title: string
    subtitle?: string
    img: string
}

const HeroBanner = ({title, subtitle, img}: HeroBannerProps) => {
  return (
    <div className="">
      <div className="max-w-[85%] min-h-[75vh] justify-center items-center mx-auto flex">
        <div className="w-1/2">
          <Typography variant="h2" component="h1" className="font-bold mb-5">
           {title}
          </Typography>
          {subtitle && <Typography variant="h4" component="p" className="font-light mb-5">
            {subtitle}
          </Typography>}
          <BaseButton>Shop Now</BaseButton>
        </div>
        <div className="w-1/2">
          <img src={img} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
