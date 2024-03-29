"use client";
import CartItem from "@/components/CartItem";
import Button from "@/components/shared/Button";
import { cartItem } from "@/types/cart.type";
import React from "react";

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
    quntity: 5,
  },
  {
    product: {
      sku: "sku",
      name: "Green Apple",
      spPrize: 4.0,
      prize: 200.0,
      rating: 4,
      imgPath: "/product.png",
    },
    quntity: 2,
  },
];

const CartListSection = () => {
  return (
    <div>
      <div className=" border p-1 rounded-lg mb-5">
        {cartData?.length ? (
          <>
            <div className="md:flex hidden px-5 text-lg font-medium py-3">
              <div className="w-5/12">Product</div>
              <div className="w-2/12">Price</div>
              <div className="w-2/12">Quaintity</div>
              <div className="w-3/12">Subtotal</div>
            </div>

            <div className="flex md:flex-col flex-row flex-wrap md:flex-nowrap">
              {cartData?.map((item, index) => (
                <CartItem key={index} data={item} />
              ))}
            </div>

            <div className="flex justify-between p-5 border-t">
              <Button>Go to Shop</Button>
              <Button>Update Cart</Button>
            </div>
          </>
        ) : (
          <h1 className="text-center p-5 text-lg font-medium">Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};

export default CartListSection;
