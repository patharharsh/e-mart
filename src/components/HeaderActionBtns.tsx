import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import CartDrawer from "./CartDrawer";

const HeaderActionBtns = () => {
  return (
    <div>
      <div className="text-3xl flex gap-3">
        <IoIosHeartEmpty />
       <CartDrawer />
      </div>
    </div>
  );
};

export default HeaderActionBtns;
