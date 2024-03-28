"use client";
import React, { useEffect, useState } from "react";
import IconBtn from "./IconBtn";
import { FiMinus, FiPlus } from "react-icons/fi";


interface CounterButtonProp  {
    onChange: Function
    value?: number
  };

const CounterButton = ({onChange, value=1}: CounterButtonProp) => {
  const [count, setCount] = useState(value);


  const handleMinus = () => {
    if (count > 1) {
        setCount((prev) => prev-1)
    }
  }

  const handlePlus = () => {
    setCount((prev) => prev+1)
  }


  useEffect(() => {
    onChange(count)
  },[count])

  return (
    <div className="inline-flex items-center gap-2 border border-1 p-1 rounded-full justify-between ">
      <IconBtn Icon={FiMinus} onClick={handleMinus} size="extra-small" />
      <span className="text-xl">{count}</span>
      <IconBtn Icon={FiPlus} onClick={handlePlus} size="extra-small" />
    </div>
  );
};

export default CounterButton;
