"use client";
import React, { useState } from "react";
import CounterButton from "./CounterButton";
import IconBtn from "./IconBtn";
import { IoMdClose } from "react-icons/io";
import { cartItem } from "@/types/cart.type";

const CartItem = ({data}:{data: cartItem}) => {

  const {product, quntity} = data
  const [count, setCount] = useState(quntity)

  return (
    <>
      <div className="flex items-center border md:border-0 md:border-t flex-wrap md:flex-nowrap sm:w-1/2 md:w-full md:p-0 p-3" >
        <div className="md:w-5/12 w-full flex items-center flex-wrap md:flex-nowrap gap-2 ">
          <div className="md:w-4/12 w-full ">
            <img src={product?.imgPath} className="w-full" alt="product image" />
          </div>
          <div className="md:w-8/12 w-full text-lg md:text-md">{product?.name}</div>
        </div>
        <div className="md:w-2/12 w-1/2"><span className="md:hidden">price:</span> $ {product?.spPrize}</div>
        <div className="md:w-2/12 w-1/2 text-right md:text-left">
          <CounterButton onChange={(x: number) => setCount(x)} value={count} />
        </div>
        <div className="md:w-3/12 w-full mt-3 md:mt-0 flex md:pe-6 items-center justify-between">
          <span> <span className="md:hidden">total:</span> $ {count * product?.spPrize} </span>
          <IconBtn Icon={IoMdClose} size="extra-small" />
        </div>
      </div>
    </>
  );
};

export default CartItem;
