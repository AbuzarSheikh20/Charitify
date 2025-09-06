import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-transparent pb-0 flex flex-col items-center relative overflow-hidden" style={{ background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat" }}>
      <div className="w-full flex px-[80px] gap-[80px] pt-[100px]">
        {/* Left Section */}
        <div className="flex flex-col  max-w-md">
          <h2 className="medium-28 text-[#FF8363] pb-[30px]">Charitify</h2>
          <p className="btn-heading text-white pb-[50px]">Discover the hidden gem of Punjab, where nature meets heritage in perfect harmony.</p>
          <div className="flex gap-4 pb-[30px]">
            <a href="*" className="bg-white rounded-full w-[38px] h-[38px]"><i className="fab fa-twitter text-black text-xl"></i></a>
            <a href="*" className="bg-white rounded-full w-[38px] h-[38px]"><i className="fab fa-facebook-f text-black text-xl"></i></a>
            <a href="*" className="bg-white rounded-full w-[38px] h-[38px]"><i className="fab fa-instagram text-black text-xl"></i></a>
            <a href="*" className="bg-white rounded-full w-[38px] h-[38px]"><i className="fab fa-github text-black text-xl"></i></a>
          </div>
          <h3 className="medium-24 text-white pb-[50px]">Get Update Every Week</h3>
          <form className="flex gap-0 w-full h-[64px]">
            <input type="email" placeholder="Enter email address" className="rounded-l-lg px-4 w-full" />
            <button className="bg-[#FF8363] text-white px-8 rounded-r-lg button-text">Submit</button>
          </form>
        </div>
        {/* Center Section */}
        <div className="flex btn-heading flex-col min-w-[180px]">
          <h4 className=" text-[#00A676] mb-[30px]">Explore Us</h4>
          <ul className="flex flex-col gap-6 text-white">
            <li><span className="mr-2">&gt;</span> Home</li>
            <li><span className="mr-2">&gt;</span> About</li>
            <li><span className="mr-2">&gt;</span> Causes</li>
            <li><span className="mr-2">&gt;</span> Blog</li>
            <li><span className="mr-2">&gt;</span> Contact</li>
          </ul>
        </div>
        {/* Right Section */}
        <div className="flex flex-col gap-2 min-w-[220px]">
          <h4 className="btn-heading text-[#00A676] mb-[30px]">Contact Info</h4>
          <ul className="flex flex-col space-y-10 text-white btn-heading">
            <li><span className="mr-2"><i className="fas fa-map-marker-alt"></i></span> Bahawalpur 632100, Punjab, Pakistan</li>
            <li><span className="mr-2"><i className="fas fa-phone"></i></span> Call/WhatsApp : +92 370 1543571</li>
            <li><span className="mr-2"><i className="fas fa-envelope"></i></span> altaqwaonlineacademy@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="w-full bg-[#FF8363] rounded-t-[50px] mt-[50px] py-[50px] flex flex-col items-center">
        <div className="flex justify-between w-full px-[232px] mb-[20px]">
          <span className="btn-heading text-white">Privacy Policy</span>
          <span className="btn-heading text-white">Terms of Use</span>
          <span className="btn-heading text-white">Causes</span>
          <span className="btn-heading text-white">Legal</span>
          <span className="btn-heading text-white">Site Map</span>
        </div>
        <div className="flex justify-center w-full ">
          <span className="text-[#8E98A8] btn-heading">© Copyright <span className='text-white btn-heading'>Charitify</span> Reserved</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
