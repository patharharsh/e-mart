import React from 'react'
import TopNav from './TopNav'
import MiddleNav from './MiddleNav'
import MobileNav from '../MobileNav'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
        <div className='hidden md:block'>
            <TopNav />
        </div>
        <MobileNav />
        <MiddleNav />
        <div className='hidden md:block'>
        <Navbar />
        </div>
    </div>
  )
}

export default Header
