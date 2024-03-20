import React from "react";
import IconBtn from "../IconBtn";

import NewsLetterInput from "../NewsLetterInput";
import NewsLetter from "./NewsLetter";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <NewsLetter />
      <div className="bg-black text-white py-12 px-4 md:px-0">
        <div className="container mx-auto flex flex-wrap">
          <div className="md:w-4/12 w-full md:mb-0 mb-5 pr-16">
            <h1 className="text-3xl font-bold">E-mart</h1>
            <p className="text-base font-light opacity-75">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
          </div>
          <div className="w-6/12 mb-5 md:mb-0 md:w-2/12">
            <h4 className="text-md font-semibold mb-2">My Account</h4>
            <div className="flex flex-col">
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
            </div>
          </div>
          <div className="w-6/12 mb-5 md:mb-0 md:w-2/12">
            <h4 className="text-md font-semibold mb-2">My Account</h4>
            <div className="flex flex-col">
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
            </div>
          </div>
          <div className="w-6/12 mb-5 md:mb-0 md:w-2/12">
            <h4 className="text-md font-semibold mb-2">My Account</h4>
            <div className="flex flex-col">
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
            </div>
          </div>
          <div className="w-6/12 mb-5 md:mb-0 md:w-2/12">
            <h4 className="text-md font-semibold mb-2">My Account</h4>
            <div className="flex flex-col">
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
              <Link href={"/"} className="opacity-75 hover:opacity-100 text-sm">
                My Account
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-3 text-center border-t-2 border-t-[#bbbbbb] text-[#bbbbbb]">
      Emart eCommerce © 2024. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
