import React from 'react'

const Banner = () => {
  return (
    <div className='relative w-full'>
      <div className='absolute top-10 left-5'>
        <p className='text-lg'>SUMMER SALE</p>
        <h1 className='text-3xl font-bold leading-[120%]'>
           75% OFF
        </h1>
        <p className='text-base font-light'>
            Only Frurits & Vegies
        </p>
      </div>  
      <img src="/Bannar2.png" alt="banner 2" className='w-full' />
      
    </div>
  )
}

export default Banner