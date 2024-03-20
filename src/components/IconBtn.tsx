import classNames from 'classnames';
import React from 'react'

interface IconBtnProps {
    Icon: React.ElementType;
    size: "small" | "large"
}

const IconBtn = ({Icon, size}:IconBtnProps) => {

   const BtnClasses = classNames({"text-black bg-gray-100 hover:bg-[#00B207] hover:text-[#ffffff] font-medium rounded-full text-sm p-5 text-center me-2 mb-2 " : size === "large"},
   {"text-black bg-white hover:bg-[#00B207] hover:text-[#ffffff] font-medium rounded-full text-sm p-4 text-center me-2 mb-2 border border-1 " : size === "small"})

  return (
    <>
        <button className={BtnClasses}><Icon size={size === "large" ? 28 : 22} /></button>
    </>
  )
}

export default IconBtn
