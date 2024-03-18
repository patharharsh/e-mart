import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

interface PopularProductsDataType {
  name: string;
  spPrize: number;
  prize: number;
  rating: number;
  imgPath: string;
}

const popularProductsData: PopularProductsDataType[] = [
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

const PopularProducts = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle title="Popular Products" isViewAll={true} />

      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
        {popularProductsData?.map(
          (item: PopularProductsDataType, index: number) => (
            <ProductCard data={item} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
