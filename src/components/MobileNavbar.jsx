import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { BiHome } from "react-icons/bi";
import { IoCodeSlash } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const MobileNavbar = ({ onToggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-md bg-white p-4 px-5 flex flex-col sticky top-0 md:hidden z-50">
      {/* Navbar Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center text-2xl">
          <img src="logo.png" alt="CodeAnt AI Logo" className="w-10 h-10" />
          <p className="ml-2 font-semibold">CodeAnt AI</p>
        </div>
        <button
          className="text-black focus:outline-none pr-2 "
          onClick={handleMenuClick}
        >
          {isMenuOpen ? <RxCross2 size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="mt-4 -left-px w-full bg-white shadow-lg  absolute top-[54px]">
          <div className="flex items-center pr-8 pl-4 mt-5">
            <select
              className="border w-56 border-gray-200 p-2 px-2 rounded-md shadow focus:outline-none focus:ring focus:ring-blue-200"
              style={{ width: '100%' }}
            >
              <option value="UtkarshDhariyaPa">UtkarshDhariyaPawar</option>
            </select>
          </div>
          <ul className="flex flex-col gap-2 p-4 text-gray-700 font-medium">

            <Link
              className="hover:bg-blue-500 hover:text-white p-2 rounded-md cursor-pointer flex items-center gap-2"
              onClick={() => {
                onToggleSidebar();
                setIsMenuOpen(false);
              }}
            ><BiHome />
              Repositories
            </Link>
            <Link className="hover:bg-blue-500 hover:text-white p-2 rounded-md cursor-pointer flex items-center gap-2">
              <IoCodeSlash /> AI Code Review
            </Link>
            <Link className="hover:bg-blue-500 hover:text-white p-2 rounded-md cursor-pointer flex items-center gap-2">
              <IoIosCloudOutline /> Cloud Security
            </Link>
            <Link className="hover:bg-blue-500 hover:text-white p-2 rounded-md cursor-pointer flex items-center gap-2">
              <LuBookText /> How to Use
            </Link>
            <Link className="hover:bg-blue-500 hover:text-white p-2 rounded-md cursor-pointer flex items-center gap-2">
              <IoSettingsOutline /> Settings
            </Link>
            <Link className="hover:bg-blue-500 hover:text-white p-2 rounded-md cursor-pointer flex items-center gap-2">
              <FiPhone /> Support
            </Link>
            <Link to='/login' className="hover:bg-blue-500 hover:text-white p-2 rounded-md cursor-pointer flex items-center gap-2">
              <RxExit /> Logout
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
