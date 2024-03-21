"use client";
import ProductCard from "@/components/ProductCard";
import Checkbox from "@/components/shared/Checkbox";
import MultiRangeSlider from "@/components/shared/MultiRangeSlider/MultiRangeSlider";
import RadioGroup from "@/components/shared/RadioGroup";
import { ProductsDataType } from "@/types/product.type";
import React, { useState } from "react";

const ProductsData: ProductsDataType[] = [
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
];

const CategoryPage = () => {
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<any>([]);
  const [price, setPrice] = useState<any>({});

  const handleRatingRadio = (val: string) => {
    setSelectedRating(val);
  };

  const handleCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedCategories((prevState: any) => [e.target.value, ...prevState]);
    } else {
      setSelectedCategories((prevState: any) =>
        prevState?.filter((item: string) => item !== e.target.value)
      );
    }
  };

  const handlePrice = (value: number) => {
    setPrice(value);
  };

  return (
    <div className="container mx-auto flex py-8">
      <div className="w-2/12 sticky top-0 h-screen">
        <div className="bodrer-b border-b-2 pb-5">
          <h1 className="text-2xl font-medium mb-4">Categories</h1>
          <div className="ml-2">
            {[
              "Fresh Fruit",
              "Vegetables",
              "Cooking",
              "Snacks",
              "Beverages",
              "Beauty & Health",
              "Bread & Bakery",
            ].map((item: string, index: number) => (
              <Checkbox
                label={item}
                value={item}
                onChange={handleCategories}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="bodrer-b border-b-2 py-5">
          <h1 className="text-2xl font-medium mb-4">Price</h1>
          <div className="ml-2 mb-5">
            <MultiRangeSlider min={0} max={1000} onChange={handlePrice} />
          </div>
          <p className="mt-5">
            Price : <b>{price?.min}</b> ₹ - <b> {price?.max}</b> ₹
          </p>
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-medium mb-4">Rating</h1>
          <div className="ml-2">
            <RadioGroup
              name="categories"
              values={["5.0", "4.0 & up", "3.0 & up", "2.0 & up", "1.0 & up"]}
              seletedValue={selectedRating}
              handleChange={handleRatingRadio}
            />
          </div>
        </div>
      </div>
      <div className="w-10/12 p-8">
        <h1 className="text-right mb-8">
          <b>52</b> Results found
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-2">
          {ProductsData?.map((item: ProductsDataType, index: number) => (
            <ProductCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
