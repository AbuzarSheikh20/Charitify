import React from "react";
import { SectionHeader } from "./MyButton";

const TeamMembers = () => {
  const teamData = [
    {
      name: "Adam Yahya",
      role: "Volunteer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      description:
        "Dedicated volunteer with years of experience in community service.",
    },
    {
      name: "Dafina Ahmed",
      role: "Volunteer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      description:
        "Passionate about helping others and making a positive impact in the community.",
    },
    {
      name: "Melanie Elturk",
      role: "Volunteer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      description:
        "Committed to creating meaningful change through volunteer work and community engagement.",
    },
  ];

  return (
    <section className="w-full py-[100px] px-[80px] bg-[#FEF4EB] relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative flex items-start flex-col z-10">
        {/* Section Header */}
        <div className="mb-[50px]">
          <SectionHeader
            topText1="Team Member"
            topText1Color="text-[#00A676]"
            mainHeading={
              <>
                <span>Our Expert</span> <br /> <span>Volunteer</span>
              </>
            }
            mainHeadingColor="text-[#FF8363]"
            align="left"
            showLine={true}
            lineColor="#00A676"
          />
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-3 gap-[120px] w-full">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-tr-[50px] px-[20px] py-[50px] text-center shadow-lg flex flex-col items-center"
            >
              {/* Profile Picture */}
              <div className="flex justify-center p-[25px] bg-[#FEF4EB] rounded-full">
                <div className="w-[250px] h-[250px] rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-[#FF8363] heading-3 mt-[10px]">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[#8D9099] medium mb-6">{member.role}</p>

              {/* Read More Link */}
              <a
                href="*"
                className="text-[#00A676] medium text-right underline hover:text-[#0F4221] transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
