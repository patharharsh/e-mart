"use client";
import React, { useEffect, useState } from "react";
import IconBtn from "./IconBtn";
import { FiMinus, FiPlus } from "react-icons/fi";


interface CounterButtonProp  {
    onChange: Function
  };

const CounterButton = ({onChange}: CounterButtonProp) => {
  const [count, setCount] = useState(1);


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
    <div className="inline-flex items-center gap-5 border border-1 p-1 rounded-full justify-between ">
      <IconBtn Icon={FiMinus} onClick={handleMinus} />
      <span className="text-2xl">{count}</span>
      <IconBtn Icon={FiPlus} onClick={handlePlus} />
    </div>
  );
};

export default CounterButton;
