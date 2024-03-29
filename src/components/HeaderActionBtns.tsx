import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
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
