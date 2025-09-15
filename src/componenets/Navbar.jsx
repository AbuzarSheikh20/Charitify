import React from "react";
import { MyButton } from "./MyButton";
import { useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();
  return (
    <div className="bg-black/50 text-white px-[80px] flex h-[80px] backdrop-blur justify-between items-center fixed top-0 left-0 w-full z-50">
      <a href='/' className="cursor-pointer">
        <h1 className="text-[28px] font-bold">Charitify</h1>
      </a>
      <nav className="flex items-center gap-[18px] uppercase">
        <ul className="flex space-x-4 gap-[18px]">
          <a
            href="/"
            className={`medium cursor-pointer transition-all duration-300 ${location.pathname === "/"
              ? "border-b-2 border-[#FF8363]"
              : "hover:border-b-2 hover:border-gray-400"
              }`}
          >
            Home
          </a>

          <a
            href="/about"
            className={`medium cursor-pointer transition-all duration-300 ${location.pathname === "/about"
              ? "border-b-2 border-[#FF8363]"
              : "hover:border-b-2 hover:border-gray-400"
              }`}
          >
            About
          </a>

          <a
            href="/causes"
            className={`medium cursor-pointer transition-all duration-300 ${location.pathname === "/causes"
              ? "border-b-2 border-[#FF8363]"
              : "hover:border-b-2 hover:border-gray-400"
              }`}
          >
            Causes
          </a>

          <a
            href="/blog"
            className={`medium cursor-pointer transition-all duration-300 ${location.pathname === "/blog"
              ? "border-b-2 border-[#FF8363]"
              : "hover:border-b-2 hover:border-gray-400"
              }`}
          >
            Blog
          </a>

          <a
            href="/contact"
            className={`medium cursor-pointer transition-all duration-300 ${location.pathname === "/contact"
              ? "border-b-2 border-[#FF8363]"
              : "hover:border-b-2 hover:border-gray-400"
              }`}
          >
            Contact
          </a>
        </ul>

        <a href={'/donate'}>
          <MyButton label={"Donate Now"} />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;