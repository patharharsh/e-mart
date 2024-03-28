"use client";
import Button from '@/components/shared/Button'
import React from 'react'

const CartTotalSection = () => {
  return (
    <div>
       <div className="border p-6 rounded-lg">
            <h1 className="text-xl font-medium">Cart Total</h1>
            <div className="flex justify-between border-b py-3">
              <span className="text-sm">Subtotal:</span>
              <span className="text-sm font-medium">$84.00</span>
            </div>
            <div className="flex justify-between border-b py-3">
              <span className="text-sm">Shipping:</span>
              <span className="text-sm font-medium">Free</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-base">Total:</span>
              <span className="text-base font-medium">$84.00</span>
            </div>
            <div className="flex flex-col">
              <Button>Proceed to checkout</Button>
            </div>
          </div>
    </div>
  )
}

export default CartTotalSection
