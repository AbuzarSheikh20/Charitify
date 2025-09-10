import React from "react";
import HeroSection from "../componenets/HeroSection";
import { assets } from "../assets/assets";
import { SectionHeader, MyButton } from "../componenets/MyButton";

const Contact = () => {
  return (
    <div>
      <HeroSection
        title="Get in Touch"
        breadcrumb="Contact"
        image={assets.project_1}
      />

      <section className="px-[80px] py-[100px] bg-[#FEF4EB] flex flex-col items-start">
        <div className="flex w-full justify-between">
          <div>
            <SectionHeader
              topText1="Get in Touch"
              topText1Color="text-[#00A676]"
              mainHeading={
                <>
                  <span>Contact With Us</span>
                </>
              }
              description="The secret to happiness lies in helping others. Never underestimate the difference You can make in the lives of the poor, the abused and the helpless. Spread sunshine in their lives no matter what the weather may be."
              showLine={true}
              lineColor="#00A676"
            />
          </div>
          <div>
            <img src={assets.shakeHand} alt="" />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_2fr] gap-[50px] mt-[50px] ml-16">
          {/* Left Side - Contact Information */}
          <div className="grid grid-rows-3 gap-[30px] w-[391px]">
            {/* Our Address */}
            <div className="py-[50px] px-[30px] bg-[#FFE7DD] rounded-lg flex items-start gap-[30px]">
              <img
                src={assets.location}
                alt="Location"
                className="w-[50px] mt-1"
              />
              <div>
                <h3 className="medium-24 mb-2">Our Address</h3>
                <p className="medium">Bahawalpur, Punjab, Pakistan</p>
              </div>
            </div>

            {/* Phone  */}
            <div className="py-[50px] px-[30px] bg-[#B0E3D5] rounded-lg flex items-start gap-[30px]">
              <img src={assets.call} alt="Location" className="w-[50px] mt-1" />
              <div>
                <h3 className="medium-24 mb-2">Phone Number</h3>
                <p className="medium">+92 370 1543571</p>
              </div>
            </div>

            {/* Mail */}
            <div className="py-[50px] px-[30px] bg-[#E7ECE9] rounded-lg flex items-start gap-[30px]">
              <img src={assets.mail} alt="Location" className="w-[50px] mt-1" />
              <div>
                <h3 className="medium-24 mb-2"> Email Address</h3>
                <p className="medium">altaqwaonlineacademy@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white w-full rounded-tr-[50px] flex justify-center items-center">
            <form className="space-y-6 w-full py-[70px] px-[50px]">
              {/* First Row - Full Name and Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-[80px] p-[20px] bg-[#EBEBEB] border-0 rounded-lg placeholder:text-[20px] placeholder:text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full h-[80px] p-[20px] bg-[#EBEBEB] border-0 rounded-lg placeholder:text-[20px] placeholder:text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Second Row - Email and Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-[80px] p-[20px] bg-[#EBEBEB] border-0 rounded-lg placeholder:text-[20px] placeholder:text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full h-[80px] p-[20px] bg-[#EBEBEB] border-0 rounded-lg placeholder:text-[20px] placeholder:text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full p-[20px] bg-[#EBEBEB] border-0 rounded-lg placeholder:text-[20px] placeholder:text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              {/* Send Message Button */}
              <div>
                <MyButton label={"Send Message"} />
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="px-[80px] py-[100px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.6516173181003!2d71.69066247523573!3d29.399374575254686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9094d780d731%3A0x613ff962a44a90f2!2sSt%205%2C%20Bahawalpur%2C%20Pakistan!5e1!3m2!1sen!2sin!4v1757390314789!5m2!1sen!2sin" style={{ border: 0, width: "100%", height: "600px" }}
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  );
};

export default Contact;
