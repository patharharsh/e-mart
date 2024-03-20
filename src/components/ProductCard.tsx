import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import IconBtn from "./IconBtn";

interface PopularProductsDataType {
  name: string;
  spPrize: number;
  prize: number;
  rating: number;
  imgPath: string;
}

interface ProductCardProps {
  data: PopularProductsDataType
}



const ProductCard = ({data}: ProductCardProps) => {

  const {name, spPrize, prize, imgPath} = data

  return (
    <div className="border group border-1 py-5 hover:shadow-lg hover:shadow-[#c8f6c9] hover:border-[#00B207]">
      <div className="relative">
        <div className="group-hover:flex hidden  flex-col absolute right-0">
          <IconBtn Icon={IoIosHeartEmpty} size="small" />
          <IconBtn Icon={IoEyeOutline} size="small" />
        </div>
        <img src={imgPath} className="w-full" />
      </div>
      <div className="flex items-center justify-between px-5">
        <div>
          <h6 className="text-base font-normal leading-6">{name}</h6>
          <h4 className="text-base font-medium leading-6">
            $ {spPrize}
            <span className="ml-2 font-light text-[#7A997C] line-through">
              $ {prize}
            </span>
          </h4>
          <div className="flex my-2">
          <FaStar className="text-[#FF8A00]" /><FaStar className="text-[#FF8A00]"  /><FaStar className="text-[#FF8A00]"  /><FaStar className="text-[#FF8A00]"  /><FaStar className="text-[#CCCCCC]"  />
          </div>
        </div>
        <div>
          <IconBtn size="large" Icon={IoBagHandleOutline} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
