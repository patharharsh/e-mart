"use client";
import Button from '@/components/shared/Button'
import Input from '@/components/shared/Input'
import RadioGroup from '@/components/shared/RadioGroup'
import React, { useState } from 'react'

const BillingInfoSection = () => {
    const [selectedPayment, setSelectedPayment] = useState("");

    const handlePaymentRadio = (value: string) => {
      setSelectedPayment(value);
    };
  return (
    <div className='sticky top-1'>
      <div className="border-b pb-5">
            <h1 className="text-2xl font-medium my-5">Billing Information</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Your first name" type="text" />
              <Input placeholder="Your last name" type="text" />
              <Input placeholder="Company Name (optional)" type="text" />
              <div className="md:col-span-3">
                <Input placeholder="Street Address" type="text" />
              </div>
              <Input placeholder="Country / Region" type="text" />
              <Input placeholder="States" type="text" />
              <Input placeholder="Zip Code" type="text" />
              <div className="md:col-span-3 grid md:grid-cols-2 gap-4">
                <Input placeholder="Email" type="email" />
                <Input placeholder="Phone Number" type="text" />
              </div>
            </div>
          </div>
          <div className=" border-b pb-5">
            <h1 className="text-2xl font-medium my-5">Payment Method</h1>
            <RadioGroup
              name="payment"
              values={["Cash on Delivery", "Paypal", "Amazon Pay"]}
              handleChange={(selected: string) => handlePaymentRadio(selected)}
              seletedValue={selectedPayment}
            />
          </div>
          <div className="py-5">
            <Button >Place Order</Button>
          </div>
    </div>
  )
}

export default BillingInfoSection
