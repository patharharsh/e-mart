"use client";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import React from "react";

const CouponCodeSection = () => {
  return (
    <div className="border p-6 rounded-lg flex gap-3 items-center">
      <Input type="text" placeholder="Enter Coupon Code" />{" "}
      <div>
        <Button>Apply Coupon</Button>
      </div>
    </div>
  );
};

export default CouponCodeSection;
