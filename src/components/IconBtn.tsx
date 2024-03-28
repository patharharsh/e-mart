import classNames from "classnames";
import React from "react";

interface IconBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: React.ElementType;
  size?: "extra-small" | "small" | "large";
  varient?: "bordered" | "borderless";
}

const IconBtn = ({
  Icon,
  size = "small",
  varient = "bordered",
  ...props
}: IconBtnProps) => {
  const BtnClasses = classNames(
    {
      "text-black bg-gray-100 hover:bg-[#00B207] hover:text-[#ffffff] font-medium rounded-full text-sm p-5 text-center":
        size === "large",
    },
    {
      "text-black bg-white hover:bg-[#00B207] hover:text-[#ffffff] font-medium rounded-full text-sm p-4 text-center border border-1 ":
        size === "small",
    },
    {
      "text-black bg-white hover:bg-[#00B207] hover:text-[#ffffff] font-medium rounded-full text-sm p-2 text-center  border border-1 ":
        size === "extra-small",
    },
    {
      "border-0 ": varient === "borderless",
    }
  );

  return (
    <>
      <button className={BtnClasses} {...props}>
        <Icon size={size === "large" ? 28 : 22} />
      </button>
    </>
  );
};

export default IconBtn;
