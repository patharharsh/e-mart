"use client";
import CounterButton from "@/components/CounterButton";
import IconBtn from "@/components/IconBtn";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import FeaturedProducts from "@/sections/FeaturedProducts";
import RelatedProducts from "@/sections/RelatedProducts";

const page = () => {
  return (
    <>
      <div className="container mx-auto flex gap-8 flex-col md:flex-row p-2 md:p-0">
        <div className="md:w-1/2 w-full relative">
          <img className="w-full" src="/product.png" alt="Product Image" />

          <div className="absolute top-5 right-5">
            <IconBtn Icon={IoIosHeartEmpty} />
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="py-8">
            <h1 className="text-3xl font-bold mb-3">
              Chinese Cabbage <Badge>In Stock</Badge>{" "}
            </h1>

            <div className="flex items-center gap-10">
              <div className="flex my-2">
                <FaStar className="text-[#FF8A00]" />
                <FaStar className="text-[#FF8A00]" />
                <FaStar className="text-[#FF8A00]" />
                <FaStar className="text-[#FF8A00]" />
                <FaStar className="text-[#CCCCCC]" />
              </div>
              <div>
                <span className="font-semibold">SKU: </span> 123
              </div>
            </div>
            <div className="text-2xl text-[#00B207]">
              <span className="text-base line-through text-gray-400">
                $ 49.99
              </span>{" "}
              $ 19.99{" "}
              <Badge type="danger" varient="pill">
                64% off
              </Badge>
            </div>
            <div className="pt-8 border-t-2 mt-8">
              <div className="flex items-center mb-6 gap-4 justify-end">
                <span className="text-2xl">Share item:</span>
                <div className="flex gap-2">
                  <IconBtn size="small" Icon={FaFacebookF} />
                  <IconBtn size="small" Icon={FaXTwitter} />
                  <IconBtn size="small" Icon={FaInstagram} />
                </div>
              </div>
              <p className="font-light">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
                consequat nec, ultrices et ipsum. Nulla varius magna a consequat
                pulvinar.{" "}
              </p>
              <div className="mt-3 text-lg">
                <b>Category:</b> Vegetables
              </div>
            </div>
            <div className="py-8 border-t-2 mt-8 flex gap-8 flex-col lg:flex-row">
              <CounterButton onChange={(count: number) => console.log(count)} />
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </>
  );
};

export default page;
