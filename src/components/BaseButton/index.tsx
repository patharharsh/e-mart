import { Button } from '@mui/material'
import React from 'react'

const BaseButton = (props: any) => {
  return (
    <Button variant="contained" className='rounded-none bg-black hover:bg-white border text-xl px-10 py-4 border-red-700 hover:text-black hover:shadow-none' {...props}>{props.children}</Button>
  )
}

export default BaseButton
