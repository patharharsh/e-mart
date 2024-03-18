import React from "react";
import { RiH1 } from "react-icons/ri";

interface FeatureItemProps {
  Icon: React.ElementType;
  name: string;
  description: string;
}

const FeatureItem = ({ Icon, name, description }: FeatureItemProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
      {Icon && <Icon size={40} className="text-[#00B207] mx-auto" />}
      <div>
        {name && <h1 className="text-base font-semibold ">{name}</h1>}
        {description && <p className="text-sm font-normal">{description}</p>}
      </div>
    </div>
  );
};

export default FeatureItem;
