import React from 'react'
import NewsLetterInput from '../NewsLetterInput'
import IconBtn from '../IconBtn'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className='bg-[#F7F7F7] py-10'>
      <div className="flex justify-between container mx-auto flex-wrap gap-4">
        <div className="lg:w-3/12 w-full">
          <h1 className="text-2xl font-semibold">Subcribe our Newsletter</h1>
          <p className="text-sm font-light">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <div className="lg:w-5/12 w-full">
          <NewsLetterInput />    
        </div>
        <div className="lg:w-2/12  w-full">
          <IconBtn size="small" Icon={FaFacebookF} />
          <IconBtn size="small" Icon={FaXTwitter} />
          <IconBtn size="small" Icon={FaInstagram} />
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
