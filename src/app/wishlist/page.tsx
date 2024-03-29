import SectionTitle from "@/components/SectionTitle";
import WishlistItem from "@/components/WishlistItem";
import React from "react";

const wishlistData = [{
    sku: "sku",
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },{
    sku: "sku",
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  },{
    sku: "sku",
    name: "Green Apple",
    spPrize: 14.0,
    prize: 20.0,
    rating: 4,
    imgPath: "/product.png",
  }]

const WishList = () => {
  return (
    <div className="container py-8 mx-auto">
      <SectionTitle title="My Wishlist" align="center" />
      <div className=" border p-1 rounded-lg mb-5">
        <div className="md:flex hidden px-5 text-lg font-medium py-3">
          <div className="w-5/12">Product</div>
          <div className="w-2/12">Price</div>
          <div className="w-2/12">Stock Status</div>
          <div className="w-3/12"></div>
        </div>
        <div className="flex md:flex-col flex-row flex-wrap md:flex-nowrap">
            {wishlistData?.map((item, index) => <WishlistItem product={item} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default WishList;
