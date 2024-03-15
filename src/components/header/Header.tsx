import React from 'react'
import TopNav from './TopNav'
import MiddleNav from './MiddleNav'
import MobileNav from '../MobileNav'

const Header = () => {
  return (
    <div>
        <div className='hidden md:block'>
            <TopNav />
        </div>
        <MobileNav />
        <MiddleNav />
    </div>
  )
}

export default Header
