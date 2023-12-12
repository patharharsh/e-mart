import { Box, Typography } from '@mui/material'
import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BaseButton from '../BaseButton';

interface ProductCardPropsType {
    title: string,
    image: string,
    price: number,
    specialPrice: number,
}

const ProductCard = ({image, title, price, specialPrice}: ProductCardPropsType) => {
  return (
    <div>
      <Box sx={{
        "& .floting_btn" : {
            display: 'none'
        },
        ":hover":{
            "& .floting_btn" : {
                display: 'flex'
            }
        }
      }}>
        <div className='relative'> 
        <img src={image} />
        <div className='justify-center absolute bottom-8 w-full floting_btn'>
            <BaseButton><ShoppingBagIcon /></BaseButton>
            <BaseButton><FavoriteBorderIcon /></BaseButton>
        </div>
        </div>
        <div className='px-2 text-center'>
        <Typography variant="h5" className='mb-2'>{title}</Typography>
        <Typography variant="h6"><span className='text-gray-400 text-md line-through'>${price}</span> ${specialPrice}</Typography>
        </div>
      </Box>
    </div>
  )
}

export default ProductCard
