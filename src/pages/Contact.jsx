import React from 'react'
import HeroSection from '../componenets/HeroSection'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <HeroSection
        title="Get in Touch"
        breadcrumb="Contact"
        image={assets.project_1}
      />

    </div>
  )
}

export default Contact
