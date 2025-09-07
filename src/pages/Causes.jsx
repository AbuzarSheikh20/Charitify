import React from "react";
import HeroSection from "../componenets/HeroSection";
import FreqAskedQues from "../componenets/FreqAskedQues";
import Providers from "../componenets/Providers";
import { assets } from "../assets/assets";
import { SectionHeader, MyButton } from "../componenets/MyButton";
import { NavLink } from "react-router-dom";

const Causes = () => {
  const recentCauses = [
    {
      title: "Education for Poor People",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      raised: 1200,
      goal: 1500,
      percent: 67,
      desc: "Experience help that feels effortless. We handle the complicated details, so you can enjoy more time, less stress, and the freedom to focus on what truly matters to you.",
    },
    {
      title: "Supply Water For Health",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      raised: 1200,
      goal: 1500,
      percent: 67,
      desc: "Experience help that feels effortless. We handle the complicated details, so you can enjoy more time, less stress, and the freedom to focus on what truly matters to you.",
    },
    {
      title: "Help For Homeless People",
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
      raised: 1200,
      goal: 1500,
      percent: 67,
      desc: "Experience help that feels effortless. We handle the complicated details, so you can enjoy more time, less stress, and the freedom to focus on what truly matters to you.",
    },
    {
      title: "Education for Poor People",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      raised: 1200,
      goal: 1500,
      percent: 67,
      desc: "Experience help that feels effortless. We handle the complicated details, so you can enjoy more time, less stress, and the freedom to focus on what truly matters to you.",
    },
    {
      title: "Supply Water For Health",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      raised: 1200,
      goal: 1500,
      percent: 67,
      desc: "Experience help that feels effortless. We handle the complicated details, so you can enjoy more time, less stress, and the freedom to focus on what truly matters to you.",
    },
    {
      title: "Help For Homeless People",
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
      raised: 1200,
      goal: 1500,
      percent: 67,
      desc: "Experience help that feels effortless. We handle the complicated details, so you can enjoy more time, less stress, and the freedom to focus on what truly matters to you.",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Explore Causes"
        breadcrumb="Causes"
        image={assets.project_1}
      />

      {/* Most recent Causes */}
      <section className="w-full bg-[#FEF4EB] px-[80px] py-[100px]">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-[50px]">
          <div className="">
            <SectionHeader
              topText1="Help Them Now"
              topText1Color="#00A676"
              mainHeading={
                <>
                  <span>Most Recent</span>
                  <br />
                  <span>Causes</span>
                </>
              }
              mainHeadingColor="#FF8363 "
              align="left"
              showLine={true}
            />
          </div>
          <NavLink to="/causes">
            <button className="uppercase border-2 border-[#FF8363] rounded-t-3xl rounded-bl-3xl text-[#FF8363] hover:bg-[#FF8363] hover:text-white px-12 py-2 transition-all duration-300">
              View All Causes
            </button>
          </NavLink>
        </div>

        {/* Causes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[526px] gap-[56px]">
          {recentCauses.map((cause, idx) => (
            <div
              key={idx}
              className="bg-white  rounded-tr-[50px] flex flex-col justify-between"
              style={{ minHeight: 526 }}
            >
              {/* Image at top */}
              <div className="relative w-full h-[258px]">
                <img
                  src={cause.img}
                  alt={cause.title}
                  className="object-cover rounded-tr-[50px] w-full h-full"
                  style={{ minHeight: 258, maxHeight: 258 }}
                />
                {/* Stats box overlays image, centered horizontally, slightly below top */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-[80%] w-[345px] h-[79px] flex flex-col justify-center bg-[#FEF4EB] rounded-lg shadow-md p-[14px]"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="medium-24 text-[#8D9099]">
                      ${cause.raised} raised of ${cause.goal}
                    </span>
                    <span className="medium-24 text-[#FF8363] font-bold">
                      {cause.percent}%
                    </span>
                  </div>
                  <div className="w-full h-1 bg-[#8D9099] rounded-full overflow-hidden">
                    <div
                      className="h-1 bg-[#00A676] rounded-full"
                      style={{ width: `${cause.percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* Text below image */}
              <div className="py-[20px] px-[20px] flex flex-col flex-1 justify-start mt-[40px]">
                <h3 className="medium-24 text-[#FF8363]">{cause.title}</h3>
                <p className="btn-text text-[#8D9099]">{cause.desc}</p>
              </div>
              {/* Donate button at bottom right, floating above card background */}
              <div className="relative z-10" style={{ minHeight: 60 }}>
                <div className="absolute right-0 -bottom-1/3">
                  <MyButton
                    style={{
                      backgroundColor: "#00A676",
                      color: "white",
                      width: 180,
                    }}
                    label={"DONATE NOW"}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Cause */}
      <div className="py-[100px] bg-white px-[80px] grid grid-cols-[1.5fr_2fr] gap-[40px]">
        <div>
          <img src={assets.featured} alt="" />
        </div>
        <div className="flex flex-col justify-center gap-[40px]">
          <div>
            <SectionHeader
              topText1="Featured Cause"
              topText1Color="text-[#00A676]"
              mainHeading={
                <>
                  <span>Emergency Relief Donations</span>
                  <br /> <span> for a Mighty Cause</span>
                </>
              }
              description="The secret to happiness lies in helping others. Never underestimate the difference You can make in the lives of the poor, the abused and the helpless. Spread sunshine in their lives no matter what the weather may be."
            />
          </div>
          <div className="flex items-center justify-between gap-[50px]">
            <NavLink to="/contact">
              <MyButton label="Join Us Now" />
            </NavLink>
            <div className="flex items-center">
              <img className="pr-[30px]" src={assets.phone} alt="" />
              <div className="flex flex-col">
                <p className="btn-heading uppercase">Contact Us</p>
                <p className="btn-heading ">+92 370 1543571</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FreqAskedQues />
      <Providers />
    </div>
  );
};

export default Causes;
