import React from "react";

interface CategoryItemProps {
  imgPath: string;
  label: string;
}

const CategoryItem = ({ imgPath, label }: CategoryItemProps) => {
  return (
    <div className="border border-1 hover:border-[#00B207] rounded-lg w-full text-center p-5 hover:shadow-lg hover:shadow-[#c8f6c9] hover:p-3 hover:transition-all transition-all">
      <img src={imgPath} className="w-full" />
      <h1 className="text-lg font-medium my-4">{label}</h1>
    </div>
  );
};

export default CategoryItem;
