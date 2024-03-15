import React from "react";
import SearchBar from "../SearchBar";
import HeaderActionBtns from "../HeaderActionBtns";

const MiddleNav = () => {
  return (
    <>
      <div className="">
        <div className="container mx-auto flex justify-between py-6 items-center">
          <div className="text-3xl font-extrabold md:block hidden">E-mart</div>
          <div className="w-full md:w-auto p-2">
            <SearchBar />
          </div>
         <div className="md:block hidden">
            <HeaderActionBtns />
         </div>
        </div>
      </div>
    </>
  );
};

export default MiddleNav;
