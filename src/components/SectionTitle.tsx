import Link from 'next/link'
import React from 'react'

interface SectionTitleProps {
    title : string
    isViewAll?: boolean
    viewAllPath?: string
    align?: "left"| "center" | "right"
}

const SectionTitle = ({title, isViewAll=false, viewAllPath, align="left"}:SectionTitleProps) => {
  return (
    <div className='flex items-center justify-between mb-8'>
      <h1 className={`text-3xl font-semibold leading-9 text-${align}`}>{title}</h1>
      {isViewAll && <Link className='text-[#00B207]' href={viewAllPath ?? '/'}>View All</Link>}
    </div>
  )
}

export default SectionTitle