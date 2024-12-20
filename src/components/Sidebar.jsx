import React from "react";
import { BiHome } from "react-icons/bi";
import { IoCodeSlash } from "react-icons/io5";
import { IoIosCloudOutline } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav
      className="h-screen w-60 bg-white px-2 border-r border-gray-200 flex flex-col"
      aria-label="Sidebar Navigation"
    >
      {/* Logo and Company Name */}
      <div className="flex items-center gap-1 pt-6 pl-5">
        <img src="logo.png" alt="CodeAnt AI Logo" className="w-10 h-10" />
        <p className="text-xl font-semibold">CodeAnt AI</p>
      </div>

      {/* User Selection */}
      <div className="flex items-center justify-center mt-5">
        <select
          className="border w-56 border-gray-200 p-2 px-4 rounded-md shadow focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option value="UtkarshDhariyaPa">UtkarshDhariyaPawar</option>
        </select>
      </div>

      {/* Navigation Links */}
      <ul className="mt-8 space-y-2 px-4 flex-grow">
        <li>
          <Link
            to="/"
            className="flex items-center gap-3 p-2 py-3 text-gray-600 font-semibold hover:bg-blue-600 hover:text-white rounded-md"
          >
            <BiHome size={20} />
            <span>Repositories</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center gap-3 p-2 py-3 text-gray-600 font-semibold hover:bg-blue-600 hover:text-white rounded-md"
          >
            <IoCodeSlash size={20} />
            <span>AI Code Review</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center gap-3 p-2 py-3 text-gray-600 font-semibold hover:bg-blue-600 hover:text-white rounded-md"
          >
            <IoIosCloudOutline size={20} />
            <span>Cloud Security</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center gap-3 p-2 py-3 text-gray-600 font-semibold hover:bg-blue-600 hover:text-white rounded-md"
          >
            <LuBookText size={20} />
            <span>How To Use</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="flex items-center gap-3 p-2 py-3 text-gray-600 font-semibold hover:bg-blue-600 hover:text-white rounded-md"
          >
            <IoSettingsOutline size={20} />
            <span>Settings</span>
          </Link>
        </li>
      </ul>

      {/* Footer Links */}
      <ul className="space-y-2 px-4 mb-6">
        <li>
          <Link
            to="/"
            className="flex items-center gap-3 p-3 text-gray-600 font-semibold hover:bg-blue-600 hover:text-white rounded-md"
          >
            <FiPhone size={20} />
            <span>Support</span>
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="flex items-center gap-3 p-3 text-gray-600 font-semibold hover:bg-blue-600 hover:text-white rounded-md"
          >
            <RxExit size={20} />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;