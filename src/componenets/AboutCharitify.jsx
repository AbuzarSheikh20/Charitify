import React from 'react'
import { assets } from '../assets/assets'
import { SectionHeader, MyButton } from './MyButton'
import { NavLink } from 'react-router-dom'

const AboutCharitify = () => {
  return (
    <div className='py-[100px] bg-white px-[80px] grid grid-cols-2 gap-[70px]'>
      <div>
        <img src={assets.aboutCharitify} alt="" />
      </div>
      <div className='flex flex-col justify-center gap-[40px]'>
        <div>
          <SectionHeader
            topText1="About"
            topText2="Charitify"
            topText2Color='text-[#00A676]'
            mainHeading={<><span>Step Forward Serve</span><br /> <span> The Humanity</span><br /><span>Reach Out & Help</span></>}
            description="The secret to happiness lies in helping others. Never underestimate the difference You can make in the lives of the poor, the abused and the helpless. Spread sunshine in their lives no matter what the weather may be."
          />
        </div>
        <div className='flex items-center gap-[10px]'>
          <div>
            <img className='w-[100px]' src={assets.intern} alt="" />
          </div>
          <div>
            <h3 className='medium-24'>Work as Intern</h3>
            <p className='medium tracking-[0.04rem] max-w-3xl'>The secret to happiness lies in helping others. Spread sunshine in their lives no matter what the weather may be.</p>
          </div>
        </div>


        <div className='flex items-center gap-[50px]'>
          <NavLink to='/contact'>
            <MyButton label="Join Us Now" />
          </NavLink>
          <div className='flex items-center'>
            <img className='pr-[30px]' src={assets.phone} alt="" />
            <div className='flex flex-col'>
              <p className='btn-heading uppercase'>Contact Us</p>
              <p className='btn-heading '>+92 370 1543571</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCharitify
