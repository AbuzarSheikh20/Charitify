import React from 'react'
import { SectionHeader } from './MyButton'
import { assets } from '../assets/assets'

const Providers = () => {
  return (
    <div className='w-full flex flex-col items-start justify-center py-[100px] px-[80px] gap-10'>
      <div className=''>
        <SectionHeader
          topText1='Global Providers'
          mainHeading='Our World Wide Partner'
          mainHeadingColor='text-[#00A676]'
          showLine={true}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
        <img src={assets.nescafe} alt="" />
        <img src={assets.jockey} alt="" />
        <img src={assets.puma} alt="" />
        <img src={assets.chanel} alt="" />
        <img src={assets.loreal} alt="" />
      </div>
    </div>
  )
}

export default Providers
