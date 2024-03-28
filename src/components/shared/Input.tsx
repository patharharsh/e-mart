"use client";
import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Input = ({
  type,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative border border-1 px-4 py-2 rounded-md">
      <input
        type={type === "password" ? (show ? "text" : "password") : type}
        className="w-full focus:outline-none text-md border-0"
        {...props}
      />
      {type === "password" && (
        <button
          className="absolute right-4 top-3"
          onClick={() => {
            setShow(!show);
          }}
        >
          {" "}
          {show ? <IoEyeOff size={22} /> : <IoEye size={22} />}{" "}
        </button>
      )}
    </div>
  );
};

export default Input;
