import React, { useState } from "react";
import HeroSection from "../componenets/HeroSection";
import Providers from "../componenets/Providers";
import { SectionHeader, MyButton } from "../componenets/MyButton";
import { assets } from "../assets/assets";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState("10");
  const [customAmount, setCustomAmount] = useState("");

  const recentCauses = [
    {
      title: "Supply Water For Good",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      raised: 1200,
      goal: 1500,
      percent: 67,
    },
    {
      title: "Supply Water For Good",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      raised: 1200,
      goal: 1500,
      percent: 67,
    },
  ];

  const featuredGoal = {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    pledged: 75864,
    goal: 100000,
    percent: 75,
  };

  return (
    <div className="w-full bg-[#f9f6f2] min-h-screen">
      <HeroSection
        title="Donation"
        breadcrumb="Donation"
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="w-full px-[80px] py-[100px]">
        <div className="flex gap-8">
          {/* Main Content - Donation Form */}
          <div className="flex-1">
            {/* Header Section */}
            <SectionHeader
              topText1="Make A"
              topText2="Donation"
              topText2Color="text-[#00A676]"
              mainHeading="Don’t Let Poverty To Destroy Someone’s Dreams"
              description="The secret to happiness lies in helping others. Never underestimate the difference You can make in the lives of the poor, the abused and the helpless. Spread sunshine in their lives no matter what the weather may be."
              align="left"
              showLine={true}
              className="mb-6"
            />

            {/* Donation Form Card */}
            <div className="bg-white rounded-tr-[50px] p-8">
              {/* Select Donation Amount */}
              <div className="mb-8">
                <h3 className="medium-24 mb-4">Select Your Donation Amount</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  {[10, 20, 50, 100, 500].map((amount) => (
                    <label
                      key={amount}
                      className="flex medium items-center cursor-pointer w-24"
                    >
                      <input
                        type="radio"
                        name="amount"
                        value={amount}
                        checked={selectedAmount === amount.toString()}
                        onChange={(e) => setSelectedAmount(e.target.value)}
                        className="mr-2 accent-[#000000]"
                      />
                      <span className="medium">${amount}</span>
                    </label>
                  ))}
                </div>

                <div className="flex items-center mb-4 grid grid-cols-[2fr_1fr]">
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount("");
                    }}
                    className="flex-1 px-4 py-3 bg-[#EBEBEB] rounded-lg h-[64px] placeholder:text-black border-none outline-none"
                  />
                  <div className="ml-4 flex items-center justify-center">
                    <button className="bg-[#EBEBEB] hover:bg-gray-300 transition-colors duration-300 rounded-lg h-[64px]">
                      <img className="h-[54px]" src={assets.paypal} alt="" />
                    </button>
                  </div>
                </div>

                <p className="text-[#00A0FF] btn-heading">
                  This is simple a note to the donators regarding our services
                  and policy
                </p>
              </div>

              {/* Personal Details */}
              <div className="mb-8">
                <h3 className="medium-24 mb-4">Personal Details</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-3 bg-[#EBEBEB] h-[64px] placeholder:text-black rounded-lg border-none outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 bg-[#EBEBEB] h-[64px] placeholder:text-black rounded-lg border-none outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3 bg-[#EBEBEB] h-[64px] placeholder:text-black rounded-lg border-none outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="px-4 py-3 bg-[#EBEBEB] h-[64px] placeholder:text-black rounded-lg border-none outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Enter Your Country"
                    className="px-4 py-3 bg-[#EBEBEB] col-span-2 h-[64px] placeholder:text-black rounded-lg border-none outline-none"
                  />
                </div>
              </div>

              {/* Payment Details */}
              <div className="mb-8">
                <h3 className="medium-24">Payment Details</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="Enter Your Card Number"
                    className="px-4 py-3 bg-[#EBEBEB] col-span-2 h-[64px] placeholder:text-black rounded-lg border-none outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Name On Your Card"
                    className="px-4 py-3 bg-[#EBEBEB] col-span-2 h-[64px] placeholder:text-black rounded-lg border-none outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="px-4 py-3 bg-[#EBEBEB] h-[64px] placeholder:text-black rounded-lg border-none outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Security Code"
                    className="px-4 py-3 bg-[#EBEBEB] h-[64px] placeholder:text-black rounded-lg border-none outline-none"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <MyButton className="w-full" label={"Donate"} />
            </div>
          </div>

          {/* Sidebar - Recent Cases */}
          <div className="w-96">
            {/* Featured Donation Goal */}
            <div className="">
              <div className="relative rounded-tr-[50px] shadow-lg">
                <img
                  src={featuredGoal.img}
                  alt="Featured Goal"
                  className="w-full h-64 object-cover rounded-tr-[50px] "
                />
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-[80%] w-[345px] h-[79px] flex flex-col justify-center bg-[#FEF4EB] rounded-lg shadow-md p-[14px]">
                  <div className="flex  justify-between items-center mb-2">

                    <span className="text-[#F0785A] font-bold text-lg">
                      {featuredGoal.pledged.toLocaleString()}
                    </span>
                    <span className="font-medium text-[#8D9099]">
                      pledged of {featuredGoal.goal.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-[#44B48C] h-1 rounded-full"
                      style={{ width: `${featuredGoal.percent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Cases Section */}
            <div className="mt-[120px]">
              <SectionHeader
                topText1="Recent Cases"
                showLine={true}
                className="mb-6"
              />

              <div className="space-y-6">
                {recentCauses.map((cause, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-tr-[50px] flex flex-col justify-between"
                    style={{ minHeight: 400 }}
                  >
                    {/* Image at top */}
                    <div className="relative w-full h-[200px]">
                      <img
                        src={cause.img}
                        alt={cause.title}
                        className="object-cover rounded-tr-[50px] w-full h-full"
                        style={{ minHeight: 200, maxHeight: 200 }}
                      />
                      {/* Stats box overlays image, centered horizontally, slightly below top */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 top-[80%] w-[345px] h-[79px] flex flex-col justify-center bg-[#FEF4EB] rounded-lg shadow-md p-[14px] shadow-lg"

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
                      <h3 className="medium-24 text-[#FF8363]">
                        {cause.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Providers />
    </div>
  );
};

export default Donate;
