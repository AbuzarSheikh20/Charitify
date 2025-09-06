import React from 'react';
import { MyButton, SectionHeader } from '../componenets/MyButton';
import { assets } from '../assets/assets.js';
import { NavLink } from 'react-router-dom';
import DonateSection from '../componenets/DonateSection.jsx';
import AboutCharitify from '../componenets/AboutCharitify.jsx';
import Providers from '../componenets/Providers.jsx';

const cardData = [
  {
    title: 'Help For Food',
    desc: 'A wonderful serenity has taken possession of my entire soul.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Help For Water',
    desc: 'A wonderful serenity has taken possession of my entire soul.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Help For Education',
    desc: 'A wonderful serenity has taken possession of my entire soul.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Help For Health',
    desc: 'A wonderful serenity has taken possession of my entire soul.',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
];

const recentCauses = [
  {
    title: 'Education for Poor People',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    raised: 1200,
    goal: 1500,
    percent: 67,
    desc: 'Experience help that feels effortless. We handle the complicated details, so you can enjoy more time, less stress, and the freedom to focus on what truly matters to you.',
  },
  {
    title: 'Supply Water For Health',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    raised: 1200,
    goal: 1500,
    percent: 67,
    desc: 'Experience help that feels effortless. We handle the complicated details, so you can enjoy more time, less stress, and the freedom to focus on what truly matters to you.',
  },
  {
    title: 'Help For Homeless People',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
    raised: 1200,
    goal: 1500,
    percent: 67,
    desc: 'Experience help that feels effortless. We handle the complicated details, so you can enjoy more time, less stress, and the freedom to focus on what truly matters to you.',
  },
];

const projects = [
  {
    img: assets.project_2,
    title: "Food Distribution",
    link: "#"
  },
  {
    img: assets.project_1,
    title: "School Development",
    link: "#"
  },
  {
    img: assets.project_3,
    title: "Child Care",
    link: "#"
  },
  {
    img: assets.project_4,
    title: "Elderly Care",
    link: "#"
  },
  {
    img: assets.project_5,
    title: "Community Service",
    link: "#"
  },
  {
    img: assets.project_6,
    title: "Medical Aid",
    link: "#"
  },
  {
    img: assets.project_7,
    title: "Clothes Donation",
    link: "#"
  },
  {
    img: assets.project_8,
    title: "Clothes Donation",
    link: "#"
  },
];

const eventsData = [
  {
    date: '05 AUG',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: "Everyone, Let’s Run For The Humanity This Time",
    time: "Two days ago",
    location: "Bwp, Pak"
  },
  {
    date: '05 AUG',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: "Everyone, Let’s Run For The Humanity This Time",
    time: "Two days ago",
    location: "Bwp, Pak"
  },
  {
    date: '05 AUG',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: "Everyone, Let’s Run For The Humanity This Time",
    time: "Two days ago",
    location: "Bwp, Pak"
  },
  {
    date: '05 AUG',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: "Everyone, Let’s Run For The Humanity This Time",
    time: "Two days ago",
    location: "Bwp, Pak"
  }
];

const Home = () => {
  return (
    <div className="w-full bg-[#f9f6f2] min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-[885px] pt-0 mt-0 flex flex-col justify-center items-center relative" style={{ background: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat" }}>
        <div className="w-full px-[80px] py-[200px] flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 flex flex-col gap-6 text-left text-white">
            <span className="medium text-[#FEF4EB]">Rising Hope</span>
            <h1 className="main-heading leading-[100%] tracking-0 text-[#FEF4EB]">To The<br />Homeless<br />People</h1>
            <div className="flex gap-10 mt-[50px]">
              <NavLink to='/contact'>

                <MyButton width='150px' label="Join Us Now" />
              </NavLink>
              <button className="medium bg-transparent uppercase flex items-center">
                Watch The Video <span className="ml-2 border flex items-center justify-center text-[#FF8363] border-[#FF8363] rounded-full w-8 h-8">▶</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Info + Donation Section */}
      <section className="w-full flex justify-between h-[772px] px-[80px] items-center bg-[#f9f6f2]">
        <div className='flex flex-col justify-center items-center pr-10 self-center'>
          <SectionHeader
            topText1="Welcome to"
            topText2="Charitify"
            topText2Color="text-green-600"
            mainHeading={<><span>Small Actions Lead</span><br /><span>To Big Changes</span></>}
            description="That's 14% of the world's population. Put another way, that's 1 in 8 people alive today living without hope amongst trash, sewage, drugs, and abuse in unimaginable conditions. Life without secure housing is a life without basic need being met."
            align="left"
            showLine={true}
            className='pb-[50px]'
          />

          <div className='flex justify-between w-[550px] pb-[60px] ml-16'>
            <div className='flex items-center'>
              <img src={assets.trustedHandSvg} alt="Volunteers" className='w-[50px] mr-4' />
              <div className='flex flex-col'>
                <span className='medium text-[#FF8363] leading-none'>3,750</span>
                <span className='medium text-black leading-none'>Volunteers</span>
              </div>
            </div>
            <div className='flex items-center'>
              <img src={assets.trustedHandSvg} alt="Trusted Funds" className='w-[50px] mr-4' />
              <div className='flex flex-col'>
                <span className='medium text-[#FF8363] leading-none'>14,800</span>
                <span className='medium text-black leading-none'>Trusted Funds</span>
              </div>
            </div>
          </div>
          <div className='flex justify-start w-full ml-28'>

            <button className='mt-4  border-2 border-[#FF8363] rounded-t-3xl rounded-bl-3xl text-[#FF8363] hover:bg-[#FF8363] hover:text-white px-12 py-2 transition-all duration-300' >Become a Volunteer</button>
          </div>
        </div>


        {/* Right Donation Card */}
        <div className="flex-1 max-w-lg relative -top-[45px] bg-transparent rounded-bl-[50px] overflow-hidden">
          <div className="w-full bg-[#FF8363] py-[30px] px-[50px] relative rounded-t-[50px] flex items-center justify-between">
            <div className="flex items-center gap-[50px]">
              <img src={assets.Gift} alt="" />
              <span className="medium text-white leading-[100%]">Total Funds Committed</span>
            </div>
            <span className="heading-2 text-white">$14,000</span>
          </div>

          <form className="bg-[#104221] flex flex-col shadow-lg p-[50px]">
            <h3 className="medium-28 text-[#FF8C6A] mb-6">Easy Donation</h3>

            <label className='btn-text text-[#E9EBF8]/65 mb-2' htmlFor="fullName">Full name</label>
            <input name='fullName' type="text" className="rounded-md px-4 py-2 mb-6 bg-[#E9EBF8]/65 outline-none" />

            <label className='btn-text text-[#E9EBF8]/65 mb-2' htmlFor="email">Email address</label>
            <input name='email' type="email" className="rounded-md px-4 py-2 mb-6 bg-[#E9EBF8]/65 outline-none" />

            <label className='btn-text text-[#E9EBF8]/65 mb-2' htmlFor="causes">Select Causes</label>
            <input name='causes' type="text" className="rounded-md px-4 py-2 mb-6 bg-[#E9EBF8]/65 outline-none" />
            <label className='btn-text text-[#E9EBF8]/65 mb-2' htmlFor="amount">Amount</label>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4 mb-2">
                {[10, 20, 50, 100, 500].map((amt) => (
                  <label key={amt} className="flex items-center gap-1 cursor-pointer ">
                    <input type="radio" name="amount" value={amt} className="accent-[#E9EBF8]/65" />
                    <span className="text-white">${amt}</span>
                  </label>
                ))}
              </div>
              <label htmlFor="customAmount" className='btn-text text-[#E9EBF8]/65 mb-2'>Custom Amount</label>
              <input type="number" className="rounded-md px-4 py-2 mb-6 bg-[#E9EBF8]/65 appearance-none outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <span className="btn-text text-[#E9EBF8]/65 mb-1">Payment Method</span>
              <div className="flex flex-wrap gap-4 btn-text mb-6 w-[70%]">
                {['Test Donation', 'Offline Donation', 'Credit Card'].map((method) => (
                  <label key={method} className="flex items-center gap-1 cursor-pointer text-white">
                    <input type="radio" name="payment" value={method} className="accent-[#E9EBF8]/65" />
                    {method}
                  </label>
                ))}
              </div>
            </div>
            <MyButton className='mb-[30px]' label={'Donate Now'} />
          </form>
        </div>
      </section>

      {/* Cards Section */}
      <section className="w-full bg-[#00A676] px-[80px] flex flex-col justify-center items-start">
        <div className='pt-[120px] pb-[100px]'>
          <SectionHeader
            topText1="Help Them Now"
            mainHeading={<><span>We Provide Effortless</span><br /><span>Help To People</span></>}
            mainHeadingColor="text-white"
            descriptionColor="text-white"
            description="We offer seamless, integrated support that just works. Our goal is to lighten needy people’s life with their basic needs, making every day easier for them."
            align="left"
            showLine={true}
          />
        </div>

        <div className="w-full flex gap-[24px] pb-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FEF4EB] rounded-tr-[50px] flex flex-col overflow-hidden"
              style={{ minHeight: 480 }}
            >

              <div className="flex flex-col flex-1 p-6">
                <h3 className="medium-28 mb-2 text-[#00A676]" style={{ fontWeight: 700 }}>{card.title}</h3>
                <p className="text-[22px] text-[#8D9099] mb-4 flex-1 font-itim">{card.desc}</p>
                <a
                  href={card.link}
                  className="text-[#FF8363] text-right heading-3 mt-auto underline"
                >
                  Read More
                </a>
              </div>
              <div className="h-[280px] w-full overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Most recent Causes */}
      <section className="w-full bg-[#FEF4EB] px-[80px] py-[100px]">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-[90px] justify-between mb-[100px]">
          <div className="flex items-center gap-[25px]">
            <span className="heading-1 text-[#FF8363] font-bold">180+</span>
            <span className="medium-28" style={{ fontWeight: '700' }}>Featured Campaign</span>
          </div>
          <div className="flex items-center gap-[25px]">
            <span className="heading-1 text-[#FF8363] font-bold">280+</span>
            <span className="medium-28" style={{ fontWeight: '700' }}>Dedicated Volunteers</span>
          </div>
          <div className="flex items-center gap-[25px]">
            <span className="heading-1 text-[#FF8363] font-bold">1560+</span>
            <span className="medium-28" style={{ fontWeight: '700' }}>People Helped Happily</span>
          </div>
        </div>

        {/* Section Header */}
        <div className='flex justify-between items-end mb-[50px]'>
          <div className=''>
            <SectionHeader
              topText1="Help Them Now"
              topText1Color='#00A676'
              mainHeading={<><span>Most Recent</span><br /><span>Causes</span></>}
              mainHeadingColor="#FF8363 "
              align="left"
              showLine={true}
            />
          </div>
          <NavLink to='/causes'>
            <button className='uppercase border-2 border-[#FF8363] rounded-t-3xl rounded-bl-3xl text-[#FF8363] hover:bg-[#FF8363] hover:text-white px-12 py-2 transition-all duration-300' >View All Causes</button>
          </NavLink>
        </div>

        {/* Causes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[526px] gap-[56px]">
          {recentCauses.map((cause, idx) => (
            <div key={idx} className="bg-white  rounded-tr-[50px] flex flex-col justify-between" style={{ minHeight: 526 }}>
              {/* Image at top */}
              <div className="relative w-full h-[258px]">
                <img src={cause.img} alt={cause.title} className="object-cover rounded-tr-[50px] w-full h-full" style={{ minHeight: 258, maxHeight: 258 }} />
                {/* Stats box overlays image, centered horizontally, slightly below top */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[80%] w-[345px] h-[79px] flex flex-col justify-center bg-[#FEF4EB] rounded-lg shadow-md p-[14px]" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="medium-24 text-[#8D9099]">${cause.raised} raised of ${cause.goal}</span>
                    <span className="medium-24 text-[#FF8363] font-bold">{cause.percent}%</span>
                  </div>
                  <div className="w-full h-1 bg-[#8D9099] rounded-full overflow-hidden">
                    <div className="h-1 bg-[#00A676] rounded-full" style={{ width: `${cause.percent}%` }}></div>
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
                  <MyButton style={{ backgroundColor: '#00A676', color: 'white', width: 180, }} label={'DONATE NOW'} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DonateSection />

      {/* Projects Section */}
      <section className="px-[80px] py-[100px]">
        <div className="grid grid-cols-3 gap-[40px] rounded-[50px] overflow-hidden">
          {/* First Div - Texts only */}
          <div className="flex flex-col justify-center">
            <h3 className="text-[#00A676] medium-24">
              Image Gallery
            </h3>
            <h2 className="text-[#FF8363] h2 leading-snug">
              Projects We <br /> Have Done
            </h2>
          </div>

          {/* Rest of Images */}
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="relative overflow-hidden block"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay text */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-xl font-semibold text-center px-2">
                  {project.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About Charitify Section */}
      <AboutCharitify />

      {/* Events Section */}
      <section className="w-full bg-[#FEF4EB] gap-[50px] px-[80px] py-[100px] flex flex-col items-start">
        <div className='flex flex-col justify-center items-start pr-10'>
          <SectionHeader
            topText1="Join Us"
            mainHeading={<><span>Reach Out & Help In</span><br /><span>Our Latest Events</span></>}
            mainHeadingColor="text-[#FF8363]"
            description=""
            align="left"
            showLine={true}
          />
        </div>
        <div className="w-full flex gap-8 justify-start mb-12">
          {eventsData.map((event, idx) => (
            <div key={idx} className="relative rounded-tr-[40px] h-[350px]">
              {/* Date Badge */}
              <div className="absolute left-6 -top-4 z-10">
                <MyButton
                  label={event.date}
                  style={{
                    backgroundColor: "#00A676",
                    color: "white",
                    cursor: "default"
                  }}
                  className="pointer-events-none"
                />
              </div>
              {/* Image */}
              <img src={event.img} alt={event.title} className="h-full w-full object-cover rounded-tr-[40px]" />
              {/* Overlay for dark effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 pointer-events-none rounded-tr-[40px]" />
              {/* Card Content - overlayed */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end z-20">
                <h3 className="text-white text-[20px] font-semibold mb-2 font-inria-serif" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>{event.title}</h3>
                <div className="flex items-center gap-4 text-white text-sm opacity-90">
                  <span className="flex items-center gap-1">
                    <span role="img" aria-label="calendar">📅</span> {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <span role="img" aria-label="location">📍</span> {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center w-full'>
          <MyButton
            label="VIEW ALL EVENTS"
            style={{
              width: "200px",
            }}
          />
        </div>
      </section>

      {/* Providers */}
      <Providers />

    </div>
  );
};

export default Home;
