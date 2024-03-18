import CategoryItem from '@/components/CategoryItem'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'

interface catDataType {
    imgPath : string
    label: string
}

const catData: catDataType[] = [
    {
        imgPath : '/fruites.png',
        label : 'Fresh Fruites'
    },{
        imgPath : '/fruites.png',
        label : 'Fresh Fruites'
    },{
        imgPath : '/fruites.png',
        label : 'Fresh Fruites'
    },{
        imgPath : '/fruites.png',
        label : 'Fresh Fruites'
    },{
        imgPath : '/fruites.png',
        label : 'Fresh Fruites'
    },{
        imgPath : '/fruites.png',
        label : 'Fresh Fruites'
    },{
        imgPath : '/fruites.png',
        label : 'Fresh Fruites'
    },{
        imgPath : '/fruites.png',
        label : 'Fresh Fruites'
    },{
        imgPath : '/fruites.png',
        label : 'Fresh Fruites'
    },{
        imgPath : '/fruites.png',
        label : 'Fresh Fruites'
    },{
        imgPath : '/fruites.png',
        label : 'Fresh Fruites'
    },{
        imgPath : '/fruites.png',
        label : 'Fresh Fruites'
    }
]


const PopularCategories = () => {
  return (
    <div className='container mx-auto my-8 px-4'>
      <SectionTitle title='Popular Categories' isViewAll={true} />
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-5'>
        {catData?.map((item: catDataType, index: number) => <CategoryItem imgPath={item?.imgPath} label={item?.label} key={index} />)}
      </div>
    </div>
  )
}

export default PopularCategories
