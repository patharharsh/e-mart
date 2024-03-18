import FeatureItem from "@/components/FeatureItem";
import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";

interface feacDatatype {
  Icon: React.ElementType;
  name: string;
  description: string;
}

const feacData: feacDatatype[] = [
  {
    Icon: LiaShippingFastSolid,
    name: "Free Shipping",
    description: "Free shipping on all your order",
  },
  {
    Icon: LiaShippingFastSolid,
    name: "Free Shipping",
    description: "Free shipping on all your order",
  },
  {
    Icon: LiaShippingFastSolid,
    name: "Free Shipping",
    description: "Free shipping on all your order",
  },
  {
    Icon: LiaShippingFastSolid,
    name: "Free Shipping",
    description: "Free shipping on all your order",
  },
];

const FeatureSection = () => {
  return (
    <div className="shadow-2xl my-8 p-5 rounded-lg container mx-auto grid grid-cols-2 md:grid-cols-4 justify-between gap-5 ">
      {feacData?.map((item: feacDatatype, index: number) => (
        <FeatureItem
          Icon={item?.Icon}
          name={item?.name}
          description={item?.description}
          key={index}
        />
      ))}
    </div>
  );
};

export default FeatureSection;
