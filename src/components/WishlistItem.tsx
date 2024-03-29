import { ProductsDataType } from '@/types/product.type'
import { IoMdClose } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import React from 'react'
import IconBtn from './IconBtn';
import Button from './shared/Button';
import Badge from './shared/Badge';

const WishlistItem = ({product} : {product: ProductsDataType}) => {
  return (
    <>
      <div className="flex items-center border md:border-0 md:border-t flex-wrap md:flex-nowrap sm:w-1/2 md:w-full md:p-0 p-3" >
        <div className="md:w-5/12 w-full flex items-center flex-wrap md:flex-nowrap gap-2 ">
          <div className="md:w-2/12 w-full ">
            <img src={product?.imgPath} className="w-full" alt="product image" />
          </div>
          <div className="md:w-8/12 w-full text-lg md:text-md">{product?.name}</div>
        </div>
        <div className="md:w-2/12 w-1/2"><span className="md:hidden">price:</span> $ {product?.spPrize}</div>
        <div className="md:w-2/12 w-1/2"> <Badge>In Stock</Badge> </div>
        <div className="md:w-3/12 w-full mt-3 md:mt-0 flex md:pe-6 items-center justify-end gap-2 lg:justify-between">
          <span className='hidden lg:inline-block'> <Button>Add to cart</Button> </span>
          <span className='lg:hidden'>
          <IconBtn Icon={IoBagHandleOutline} size="extra-small" />
          </span>
          <IconBtn Icon={IoMdClose} size="extra-small" />
        </div>
      </div>
    </>
  )
}

export default WishlistItem
