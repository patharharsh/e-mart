import React from 'react'

const NewsLetterInput = () => {
  return (
    <div className='relative w-4/5 border rounded-full overflow-hidden '>
      <input className='w-full outline-none h-[48px] border-0 px-5' />
      <button className="absolute top-0 right-0  text-white bg-[#00B207] hover:bg-[#1a9c1f] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xl px-5 py-2.5 text-center">SUBMIT</button>
    </div>
  )
}

export default NewsLetterInput
