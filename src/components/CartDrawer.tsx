"use client";
import classNames from "classnames";
import React, { useState } from "react";
import { IoBagHandleOutline, IoClose } from "react-icons/io5";
import IconBtn from "./IconBtn";
import DrawerItem from "./DrawerItem";
import Button from "./shared/Button";
import { cartItem } from "@/types/cart.type";
import { useRouter } from "next/navigation";

const cartData: cartItem[] = [
  {
    product: {
      sku: "sku",
      name: "Green Apple",
      spPrize: 14.0,
      prize: 20.0,
      rating: 4,
      imgPath: "/product.png",
    },
    quntity: 1,
  },
];

const CartDrawer = () => {
  const [show, setShow] = useState(false);

  const router = useRouter();

  const drwerClasses = classNames(
    "fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 shadow-xl text-black",
    {
      "translate-x-full ": !show,
    },
    {
      "translate-x-0": show,
    }
  );

  return (
    <div>
      <div
        className="border-l-2 pl-3 flex gap-2 cursor-pointer"
        onClick={() => setShow(true)}
      >
        <div className="relative">
          <IoBagHandleOutline />
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#00B207] border-2 border-white rounded-full -top-2 -end-2">
            2
          </div>
        </div>
        <div className="hidden md:block">
          <h6 className="text-xs font-light">Shopping cart:</h6>
          <h3 className="text-sm font-semibold">$ 50.00</h3>
        </div>
      </div>

      <div
        className={drwerClasses}
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-lg">Shoping Cart</h1>{" "}
          <IconBtn
            Icon={IoClose}
            onClick={() => setShow(false)}
            size="extra-small"
          />
        </div>
        <div className="flex flex-col justify-between h-[calc(100vh-100px)]">
          <div>
            {cartData?.map((item, index) => (
              <DrawerItem
                product={item?.product}
                quntity={item?.quntity}
                key={index}
              />
            ))}
          </div>
          <div>
            <div className="text-base flex justify-between">
              <span>{cartData?.length} Product</span> <b>$ 29.00</b>
            </div>
            <div className="flex flex-col border-t-2 pt-5">
              <Button
                varient="secondary"
                onClick={() => {
                  router.push("/cart");
                  setShow(false);
                }}
              >
                Go To Cart
              </Button>
              <Button
                onClick={() => {
                  router.push("/checkout");
                  setShow(false);
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
