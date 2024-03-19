import Link from 'next/link'
import React from 'react'

const NewsCard = () => {
  return (
    <div className='hover:shadow-xl border border-1 rounded-xl group'>
      <div>
        <img src="/bannar2.png" className='w-full' alt="news img" />
      </div>
      <div className='p-5'>
        <h1 className='group-hover:text-[#00B207] text-xl mb-4'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</h1>
        <Link className='text-[#00B207]' href={'/'}>Read More </Link>
      </div>
    </div>
  )
}

export default NewsCard
