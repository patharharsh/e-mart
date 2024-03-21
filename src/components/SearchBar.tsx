import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="flex overflow-hidden rounded-md items-center border w-full">
      <div className="flex items-center ml-3 gap-3 w-full">
        <IoIosSearch size={22} />
        <input type="text" className="focus:outline-none focus:ring-0 border-0" />
      </div>
      <button className="bg-[#00B207] text-[#ffffff] px-6 py-4 text-sm">Search</button>
    </div>
  );
};

export default SearchBar;
