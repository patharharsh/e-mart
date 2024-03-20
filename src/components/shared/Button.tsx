import classNames from "classnames";
import React, { Children } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: "primary" | "secondary";
}

const Button = ({ children, varient = "primary", ...props }: ButtonProps) => {
  const btnClasses = classNames(
    "flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2",
    { "text-[#00B207] bg-white hover:bg-gray-100": varient === "secondary" },
    {"bg-[#00B207] text-white hover:bg-[#00B207]" : varient === "primary"}
  );

  return (
    <>
      <button className={btnClasses}>{children}</button>
    </>
  );
};

export default Button;
