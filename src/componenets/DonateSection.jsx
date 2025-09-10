import React from 'react'
import { SectionHeader, MyButton } from './MyButton'
import { NavLink } from 'react-router-dom'

const DonateSection = () => {
  return (
    <div className="w-full min-h-[692px] px-[80px] flex flex-col justify-center items-start relative space-y-[50px]" style={{ background: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat" }}>
      <div className='flex'>
        <SectionHeader
          topText1="Help Other People"
          topText1Color="text-[#FF8363]"
          mainHeading={<><span>We Dream to Create A</span><br /><span> Bright Future Of The</span><br /><span> Underprivileged Children</span></>}
          mainHeadingColor="text-white"
          align="left"
          showLine={true}
          lineColor='#FF8363'
        />
      </div>
      <NavLink to="/donate">
        <MyButton className='ml-16' label={'Donate Now'} />
      </NavLink>
    </div>
  )
}

export default DonateSection
