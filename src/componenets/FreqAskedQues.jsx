import React, { useState } from "react";
import { MyButton, SectionHeader } from "./MyButton";
import { assets } from "../assets/assets";

const FreqAskedQues = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How can I donate to Charitify?",
      answer:
        "You can donate to Charitify through our secure online platform, bank transfer, or by visiting our office. We accept various payment methods including credit cards, PayPal, and direct bank transfers.",
    },
    {
      question: "Can I sponsor a child or a family?",
      answer:
        "Yes, we offer child and family sponsorship programs. You can choose to sponsor a specific child's education, provide monthly support for a family, or contribute to specific needs like healthcare and food.",
    },
    {
      question: "Can I volunteer with Charitify?",
      answer:
        "Absolutely! We welcome volunteers from all backgrounds. You can volunteer for events, administrative work, field activities, or contribute your professional skills. Contact us to learn about current opportunities.",
    },
    {
      question: "How do you ensure transparency?",
      answer:
        "We maintain complete transparency through regular financial reports, impact assessments, and detailed project updates. All donations are tracked and reported quarterly, and we provide receipts for all contributions.",
    },
  ];

  const statsData = [
    {
      number: "7120+",
      label: "Money Raised",
    },
    {
      number: "250+",
      label: "Dedicated Volunteers",
    },
    {
      number: "180+",
      label: "Featured Campaign",
    },
    {
      number: "1530+",
      label: "People Helped Happily",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-[100px] px-[80px] bg-[#00A676]">
      {/* FAQ Section */}
      <section className="relative w-full overflow-hidden h-[675px] flex justify-between  gap-[20px]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src={assets.project_3}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 grid grid-cols-[3fr_2fr] gap-[80px] flex  items-center px-[80px] justify-between">
          {/* Left Panel - Text Content */}
          <div className="flex flex-col gap-[40px]">
            <SectionHeader
              topText1="Have Questions"
              topText1Color="text-[#00A676]"
              mainHeading="Frequently Asked Questions"
              mainHeadingColor="text-white"
              description="Our mission is to support underprivileged communities by providing education, healthcare, and essential resources to improve their quality of life."
              descriptionColor="text-white"
              align="left"
              showLine={true}
              lineColor="#00A676"
            />
            <div>
              <MyButton
                label="ASK IT NOW"
                className="uppercase ml-16"
                style={{
                  backgroundColor: "#FF8363",
                  color: "white",
                  padding: "16px 32px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              />
            </div>
          </div>

          {/* Right Panel - FAQ List */}
          <div className="flex flex-col gap-[50px]">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#00A676] rounded-tl-[20px] flex items-center justify-center flex-shrink-0 transition-transform duration-300">
                    <span
                      className={`text-white font-bold text-lg transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  <h3 className="medium-24 text-white flex-1">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-4 ml-12">
                    <p className="medium text-white/90 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full pt-[50px] bg-[#00A676]">
        <div className="grid grid-cols-4 gap-[40px]">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-tr-[50px] p-4 py-6 leading-none flex flex-col justify-center items-center"
            >
              <div className="main-heading text-center">{stat.number}</div>
              <div className="medium-24 text-[#000000]/50 text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FreqAskedQues;
