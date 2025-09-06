import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-black/50 text-white px-[80px] flex h-[80px] backdrop-blur justify-between items-center fixed top-0 left-0 w-full z-50'>
      <h1 className='text-[28px] font-bold'>Charitify</h1>
      <nav className='flex items-center gap-[18px] uppercase'>
        <ul className='flex space-x-4 gap-[18px]'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `medium cursor-pointer transition-all duration-300 ${isActive ? "border-b-2 border-[#FF8363]" : "hover:border-b-2 hover:border-gray-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `medium cursor-pointer transition-all duration-300 ${isActive ? "border-b-2 border-[#FF8363]" : "hover:border-b-2 hover:border-gray-400"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/causes"
            className={({ isActive }) =>
              `medium cursor-pointer transition-all duration-300 ${isActive ? "border-b-2 border-[#FF8363]" : "hover:border-b-2 hover:border-gray-400"
              }`
            }
          >
            Causes
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `medium cursor-pointer transition-all duration-300 ${isActive ? "border-b-2 border-[#FF8363]" : "hover:border-b-2 hover:border-gray-400"
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `medium cursor-pointer transition-all duration-300 ${isActive ? "border-b-2 border-[#FF8363]" : "hover:border-b-2 hover:border-gray-400"
              }`
            }
          >
            Contact
          </NavLink>
        </ul>
        <button className='btn-text uppercase btn'>
          Donate
        </button>
      </nav>
    </div>
  )
}

export default Navbar
