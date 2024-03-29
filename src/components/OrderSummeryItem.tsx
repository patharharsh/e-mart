import React from 'react'

const OrderSummeryItem = () => {
  return (
    <>
       <div className="flex justify-between border-b py-3 items-center">
            <div className="flex items-center gap-2">
                <div className="w-2/12">
                    <img src="/product.png" alt="product" className="w-full" />
                </div>
                <span className="w-9/12">Green Capsicum x 5</span>
            </div>
              <span className="text-sm font-medium">$84.00</span>
            </div>
    </>
  )
}

export default OrderSummeryItem
