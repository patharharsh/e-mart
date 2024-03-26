import React from 'react'
import IconBtn from './IconBtn'
import { MdDelete } from "react-icons/md";

const DrawerItem = () => {
  return (
    <div className='flex items-center gap-5 border-b pb-2 mb-2'>
      <div className='w-1/4'>
        <img src='/product.png' />
      </div>
      <div className='w-3/4 flex justify-between items-center'>
        <div>
            <h5 className='text-base'>Green Apple</h5>
            <h6 className='text-sm font-light'>1 kg x <b className='font-bold'>12.0</b></h6>
        </div>
        <IconBtn Icon={MdDelete} size='extra-small' varient='borderless' />
      </div>
    </div>
  )
}

export default DrawerItem
