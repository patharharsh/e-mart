import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";

const HeaderActionBtns = () => {
  return (
    <div>
      <div className="text-3xl flex gap-3">
        <IoIosHeartEmpty />
        <div className="border-l-2 pl-3 flex gap-2">
          <div className="relative">
            <IoBagHandleOutline />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#00B207] border-2 border-white rounded-full -top-2 -end-2">2</div>
          </div>
          <div className="hidden md:block">
            <h6 className="text-xs font-light">Shopping cart:</h6>
            <h3 className="text-sm font-semibold">$ 50.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderActionBtns;
