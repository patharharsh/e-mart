import classNames from 'classnames';
import React from 'react'

interface IconBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    Icon: React.ElementType;
    size?: "small" | "large"
}

const IconBtn = ({Icon, size = 'small', ...props}:IconBtnProps) => {

   const BtnClasses = classNames({"text-black bg-gray-100 hover:bg-[#00B207] hover:text-[#ffffff] font-medium rounded-full text-sm p-5 text-center" : size === "large"},
   {"text-black bg-white hover:bg-[#00B207] hover:text-[#ffffff] font-medium rounded-full text-sm p-4 text-center border border-1 " : size === "small"})

  return (
    <>
        <button className={BtnClasses} {...props}><Icon size={size === "large" ? 28 : 22} /></button>
    </>
  )
}

export default IconBtn
