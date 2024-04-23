'use client';
import OrderSummeryItem from "@/components/OrderSummeryItem";
import Button from "@/components/shared/Button";
import BillingInfoSection from "@/sections/checkout/BillingInfoSection";
import React from "react";

const page = () => {


  return (
    <div className="container py-8 mx-auto">
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="lg:w-7/12 w-full">
        <BillingInfoSection />
        </div>
        <div className="lg:w-5/12 w-full">
        <div className="border p-6 rounded-lg">
            <h1 className="text-xl font-medium">Order Summery</h1>
            <OrderSummeryItem />
            <OrderSummeryItem />
            <OrderSummeryItem />
            <div className="flex justify-between border-b py-3">
              <span className="text-sm">Subtotal:</span>
              <span className="text-sm font-medium">$84.00</span>
            </div>
            <div className="flex justify-between border-b py-3">
              <span className="text-sm">Shipping:</span>
              <span className="text-sm font-medium">Free</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-base">Total:</span>
              <span className="text-base font-medium">$84.00</span>
            </div>
            <div className="flex flex-col">
              <Button>Proceed to checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
