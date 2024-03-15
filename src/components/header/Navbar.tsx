"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar = ({toggleDrawer}: any) => {
  const navbar = [
    {
      lable: "Home",
      path: "/",
    },
    {
      lable: "Shop",
      path: "/shop",
    },
    {
      lable: "Blog",
      path: "/blog",
    },
    {
      lable: "About Us",
      path: "/about-us",
    },
    {
      lable: "Contact Us",
      path: "/contact-us",
    },
  ];

  const pathname = usePathname();

  const isActive  = (href: string) => pathname === href

  return (
    <>
      <div className="md:bg-[#1A1A1A] py-3 md:text-white">
        <div className="container mx-auto flex justify-between flex-col md:flex-row">
          <div>
            <ul className="flex px-6 md:p-0 md:items-center gap-8 flex-col md:flex-row">
              {navbar?.map((item) => (
                <li className=""> <Link href={item?.path} onClick={toggleDrawer}  className={`hover:text-[#00B207] ${isActive(item?.path) ? "text-[#00B207]" : ""} `}> {item?.lable} </Link></li>
              ))}
            </ul> 
          </div>
          <div className="flex gap-2 items-center justify-center">
            <BiSolidPhoneCall size={20} />{" "}
            <span className="text-xs">(123) 456-7897</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
