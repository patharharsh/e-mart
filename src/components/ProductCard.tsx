import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

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
        <button className="text-black bg-white hover:bg-[#00B207] hover:text-[#ffffff] font-medium rounded-full text-sm p-4 text-center me-2 mb-2 border border-1 "><IoIosHeartEmpty size={22} /></button>
        <button className="text-black bg-white hover:bg-[#00B207] hover:text-[#ffffff] font-medium rounded-full text-sm p-4 text-center me-2 mb-2 border border-1 "><IoEyeOutline size={22} /></button>
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
            <button className="text-black bg-gray-100 hover:bg-[#00B207] hover:text-[#ffffff] font-medium rounded-full text-sm p-5 text-center me-2 mb-2 "><IoBagHandleOutline size={28} /></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
