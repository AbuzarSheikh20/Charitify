import React from "react";
import HeroSection from "../componenets/HeroSection";
import { assets } from "../assets/assets";
import { MyButton, SectionHeader } from "../componenets/MyButton";
import Providers from "../componenets/Providers";
import DonateSection from "../componenets/DonateSection";
import FreqAskedQues from "../componenets/FreqAskedQues";
import AboutCharitify from "../componenets/AboutCharitify";
import TeamMembers from "../componenets/TeamMembers";

const About = () => {
  return (
    <div>
      <HeroSection
        title="About Us"
        breadcrumb="About"
        image={assets.project_1}
      />

      <AboutCharitify />

      {/* Get to Know */}
      <section className="px-[80px] py-[100px] flex justify-between items-center gap-[40px]">
        <div className="flex flex-col justify-center items-start">
          <SectionHeader
            topText1="Get To Know US"
            topText1Color="text-[#00A676]"
            mainHeading={
              <>
                <span>Let Us Come</span>
                <br />
                <span>Together To Make</span> <br /> <span>a Difference</span>
              </>
            }
            mainHeadingColor="text-[#FF8363]"
            description="Experience help that feels effortless. We handle the complicated details, so you can enjoy more time, less stress, and the freedom to focus on what truly matters to you."
            align="left"
            showLine={true}
          />

          <div className="mt-10 w-[80%] ml-16">
            {/* Food Help */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#8D9099] btn-heading">Food Help</span>
              <span className="text-[#FF8363] btn-heading">67%</span>
            </div>
            <div className="h-[5px] bg-gray-400 w-full relative mb-6">
              <div
                className="bg-[#00A676] h-[5px] absolute left-0 top-0"
                style={{ width: "67%" }}
              />
            </div>
            {/* Medical Help */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#8D9099] btn-heading">Medical Help</span>
              <span className="text-[#FF8363] btn-heading">85%</span>
            </div>
            <div className="h-[5px] bg-gray-400 w-full relative">
              <div
                className="bg-[#00A676] h-[5px] absolute left-0 top-0"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col">
          {/* Tabs */}
          <div className="flex gap-[30px]">
            <MyButton
              label={"Our Mission"}
              style={{ backgroundColor: "#FEF4EB", color: "#000000" }}
            />
            <MyButton
              label={"Our Vision"}
              style={{ backgroundColor: "#FEF4EB", color: "#000000" }}
            />
            <MyButton
              label={"Our History"}
              style={{ backgroundColor: "#FEF4EB", color: "#000000" }}
            />
          </div>

          {/* Content */}
          <div className="grid grid-cols-2 gap-[24px] items-center pt-[50px]">
            {/* Left Side (Image + Badge) */}
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/african-children-receiving-food-from-volunteer_23-2148764891.jpg"
                alt="Helping children"
                className="rounded-tr-[100px] w-[80%] h-[350px] object-cover"
              />

              {/* Badge */}
              <div className="absolute bottom-[100px] right-5 flex justify-center items-center flex-col bg-[#FF8363] text-black p-2 rounded-md w-[127px] h-[154px]">
                <p className="btn-heading text-left">Since</p>
                <p className="text-[80px] font-bold text-center text-white leading-none">
                  12
                </p>
                <p className="btn-heading text-right">Years</p>
              </div>
            </div>

            {/* Right Side (Points) */}
            <div className="space-y-4">
              <p className="flex items-center btn-heading">
                <span className="text-[#FF8363] mr-4">❯</span> Your Support,
                Their Hope
              </p>
              <p className="flex items-center btn-heading">
                <span className="text-[#FF8363] mr-4">❯</span> Together for a
                Better Tomorrow
              </p>
              <p className="flex items-center btn-heading">
                <span className="text-[#FF8363] mr-4">❯</span> Be the Reason
                Someone Smiles Today
              </p>
              <p className="flex items-center btn-heading">
                <span className="text-[#FF8363] mr-4">❯</span> Spreading
                Kindness, One Act at a Time
              </p>
              <p className="flex items-center btn-heading tracking-tight">
                <span className="text-[#FF8363] mr-4">❯</span> Empowering
                Communities, Changing Lives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experts */}
      <TeamMembers />

      {/* Frequently Asked Questions */}
      <FreqAskedQues />

      <DonateSection />
      <Providers />
    </div>
  );
};

export default About;
