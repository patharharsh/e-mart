import SectionTitle from "@/components/SectionTitle";
import React from "react";
import CartTotalSection from "@/sections/cart/CartTotalSextion";
import CartListSection from "@/sections/cart/CartListSection";
import CouponCodeSection from "@/sections/cart/CouponCodeSection";

const CartPage = () => {
  return (
    <div className="container py-8 mx-auto">
      <SectionTitle title="My Shopping Cart" align="center" />
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="lg:w-7/12 w-full">
          <CartListSection />
          <CouponCodeSection />
        </div>
        <div className="lg:w-5/12 w-full">
          <CartTotalSection />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
