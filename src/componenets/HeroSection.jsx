// HeroSection.jsx
import React from "react";

const HeroSection = ({ title, breadcrumb, image }) => {
  return (
    <section className="relative w-full pt-[80px] className='h-[573px] justify-center items-center flex px-[80px] py-[80px] bg-[#FEF4EB]">
      {/* Background Image */}
      <div className="absolute bg-[#FF8363] w-full h-[40%]">
      </div>
      <div className="relative pt-[50px] w-full rounded-br-[50px]">
        <div className="h-[400px] overflow-hidden">
          <img
            src={image} // yaha se dynamic image aayegi
            alt={title}
            className="w-full object-cover"
          />
        </div>

        {/* Overlay Text */}
        <div className="absolute top-[80px] text-white">
          <h1 className="main-heading px-[35px]">{title}</h1>
        </div>

        {/* Breadcrumb */}
        <div className="absolute -bottom-5 left-10 bg-[#0F4221] text-white p-[20px] rounded-lg flex items-center gap-[20px]">
          <span className=" medium-24">Home</span>
          <span className="text-[#FF8363] medium-24">❯</span>
          <span className="medium-24">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
