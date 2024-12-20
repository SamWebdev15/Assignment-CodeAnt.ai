import React, { useState } from 'react';
import { GiPieChart } from "react-icons/gi";
import { FaArrowUpLong } from "react-icons/fa6";
import gitlabIcon from '../assets/gitlab.png';
import bucketIcon from "../assets/bitbucket.png";
import azureIcon from '../assets/azure.png';
import githubIcon from '../assets/github.png';
import ssoIcon from '../assets/key.png';

const Login = () => {
  const [selectedOption, setSelectedOption] = useState('sass');

  const handleSwitch = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Left Section */}
      <div className="flex-1 hidden md:flex bg-white border-r-2 flex-col justify-center items-center p-8 relative">
        <div className="text-center mb-2 bg-white shadow-xl border rounded-2xl px-8 py-6 hover:shadow-2xl cursor-pointer">
          {/* Header Section */}
          <div className="flex items-center gap-2 justify-center border-b pb-3 mb-4">
            <img src="logo.png" alt="CodeAnt AI Logo" className="w-6 h-6" />
            <h3 className="text-xl font-bold">AI to Detect & Autofix Bad Code</h3>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-around text-gray-600">
            <div className="flex flex-col items-center">
              <strong className="text-gray-900 text-xl">30+</strong>
              <span className="text-sm">Language Support</span>
            </div>
            <div className="flex flex-col items-center">
              <strong className="text-gray-900 text-xl">10K+</strong>
              <span className="text-sm">Developers</span>
            </div>
            <div className="flex flex-col items-center">
              <strong className="text-gray-900 text-xl">100K+</strong>
              <span className="text-sm">Hours Saved</span>
            </div>
          </div>
        </div>

        <div className="flex gap-8 ml-44 text-center mb-8 bg-white shadow-xl border rounded-2xl px-8 py-6 hover:shadow-2xl cursor-pointer">
          <div className="flex flex-col">
            <div className="bg-[#d0cbf8] w-10 h-10 rounded-full flex items-center justify-center">
              <GiPieChart className="text-[#9D90FA]" />
            </div>
            <div className="flex flex-col text-left font-semibold mt-2">
              <h1>Issues Fixed</h1>
              <p className="text-2xl">500K+</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex text-blue-700 font-semibold items-center">
              <FaArrowUpLong />
              <p>14%</p>
            </div>
            <h1 className="text-black">This week</h1>
          </div>
        </div>

        <img
          src="/logo2.jpg"
          alt="Logo"
          className="h-64 absolute bottom-2 left-0 transform translate-x-0 translate-y-0"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 px-1 flex flex-col justify-center items-center">
        <div className="bg-white py-8 shadow-md rounded-lg px-10 w-full max-w-md">
          <div className="flex flex-col space-x-4 mb-8  border-b items-center">
            <div className="flex items-center justify-center mb-4">
              <img src="logo.png" alt="CodeAnt AI Logo" className="w-10 h-10 mr-2" />
              <h1 className="text-xl font-bold">CodeAnt AI</h1>
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center">Welcome to CodeAnt AI</h2>
          </div>

          {/* Switch Option */}
          <div className="flex justify-between  mb-6 w-full">
            <button
              className={`px-4 py-2 border border-gray-300  rounded-md text-black hover:bg-blue-500 hover:text-white w-full ${selectedOption === 'sass' ? 'bg-blue-500 text-white' : ''
                }`}
              onClick={() => handleSwitch('sass')}
            >
              SASS
            </button>
            <button
              className={`px-4 py-2 border border-gray-300 rounded-md text-black hover:bg-blue-500 hover:text-white w-full ${selectedOption === 'selfHosted' ? 'bg-blue-500 text-white' : ''
                }`}
              onClick={() => handleSwitch('selfHosted')}
            >
              Self Hosted
            </button>
          </div>

          <hr className="mb-5" />

          {/* Sign-In Buttons */}
          <div className="space-y-4 w-full">
            {selectedOption === 'sass' ? (
              <>
                <button className="flex items-center pl-20 w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                  <img src={githubIcon} alt="GitHub Icon" className="w-6 h-6 mr-2" />
                  Sign in with GitHub
                </button>
                <button className="flex items-center pl-20 w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                  <img src={bucketIcon} alt="Bitbucket Icon" className="w-6 h-6 mr-2" />
                  Sign in with Bitbucket
                </button>
                <button className="flex items-center pl-20 w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                  <img src={azureIcon} alt="Azure Icon" className="w-6 h-6 mr-2" />
                  Sign in with Azure DevOps
                </button>
                <button className="flex items-center pl-20 w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                  <img src={gitlabIcon} alt="Self Hosted GitLab" className="w-6 h-6 mr-2" />
                  Self Hosted GitLab
                </button>
              </>
            ) : (
              <>
                <button className="flex items-center pl-20 w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                  <img src={gitlabIcon} alt="Self Hosted GitLab" className="w-6 h-6 mr-2" />
                  Self Hosted GitLab
                </button>
                <button className="flex items-center pl-20 w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                  <img src={ssoIcon} alt="SSO Icon" className="w-6 h-6 mr-2" />
                  Sign in with SSO
                </button>
              </>
            )}
          </div>
        </div>

        <p className="text-sm text-black mt-4 text-center">
          By signing up you agree to the <span className="font-semibold">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Login;
