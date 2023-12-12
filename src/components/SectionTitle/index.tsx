import { Typography } from "@mui/material";
import React from "react";

const SectionTitle = () => {
  return (
    <div className="text-center w-full relative">
      <Typography variant="h2" component="h1" className="bg-white inline-block px-8">Title</Typography>
      <span className="h-[2px] w-[50%] block mx-auto bg-black absolute z-[-111] top-[50%] left-[25%] origin-center"></span>
    </div>
  );
};

export default SectionTitle;
