import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

const TopNav = () => {
  return (
    <>
      <div className="py-3 border border-b-2">
        <div className="container mx-auto flex justify-between md:flex-row flex-col gap-4 md:gap-0 items-center">
          <div className="flex items-center gap-2 text-sm">
            <CiLocationOn />
            <span className="font-light text-xs">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </span>
          </div>
          <div className="flex gap-4">
            <div className="flex border-r-2 pr-4">
              <select className="bg-transparent text-xs mr-4">
                <option value="eng">Eng</option>
                <option value="hindi">Hindi</option>
              </select>
              <select className="bg-transparent text-xs">
                <option value="usd">USD</option>
                <option value="inr">INR</option>
              </select>
            </div>
            <Link href={'/login'}  className="font-light text-xs">
                sign up / sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
