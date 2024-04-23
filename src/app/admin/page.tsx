import Button from '@/components/shared/Button'
import Checkbox from '@/components/shared/Checkbox'
import Input from '@/components/shared/Input'
import Link from 'next/link'
import React from 'react'

const AdminLogin = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='w-1/3'>

    <h1 className="text-3xl font-semibold text-center mb-5">Admin Login</h1>
      <div className="flex flex-col gap-3">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
        </div>
        </div>
    </div>
  )
}

export default AdminLogin
