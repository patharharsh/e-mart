import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { ProductsDataType } from "@/types/product.type";
import React from "react";


const popularProductsData: ProductsDataType[] = [
  {
    sku: 'sku',
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    sku: 'sku',
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    sku: 'sku',
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },
  {
    sku: 'sku',
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  }
];

const RelatedProducts = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle title="Related Products" align="center" />

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2">
        {popularProductsData?.map(
          (item: ProductsDataType, index: number) => (
            <ProductCard data={item} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
