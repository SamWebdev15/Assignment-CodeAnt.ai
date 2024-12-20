import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";

const repoData = [
  {
    repoName: 'design-system',
    visibility: 'Public',
    language: 'React',
    storage: '7320',
    updateTime: '1'
  },
  {
    repoName: 'codeant-ci-app',
    visibility: 'Private',
    language: 'Javascript',
    storage: '5871',
    updateTime: '2'
  },
  {
    repoName: 'analytics-dashboard',
    visibility: 'Private',
    language: 'Python',
    storage: '4521',
    updateTime: '5'
  },
  {
    repoName: 'mobile-app',
    visibility: 'Public',
    language: 'Swift',
    storage: '3096',
    updateTime: '3'
  },
  {
    repoName: 'e-commerce-platform',
    visibility: 'Public',
    language: 'Java',
    storage: '6210',
    updateTime: '6'
  },
  {
    repoName: 'blog-website',
    visibility: 'Public',
    language: 'HTML/CSS',
    storage: '1876',
    updateTime: '6'
  },
  {
    repoName: 'social-network',
    visibility: 'Private',
    language: 'PHP',
    storage: '5432',
    updateTime: '7'
  },
];

const Repositories = () => {
  // for searching functionality 
  const [searchTerm, setSearchTerm] = useState('');
  // function for filter repositories
  const filteredRepos = repoData.filter(repo =>
    repo.repoName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="md:flex flex-col md:justify-between pb-4 mb-4 border-b p-6 gap-4">
        {/* top side Side */}
        <div className="space-y-1 flex md:items-center justify-between flex-col md:flex-row mb-5">
          <div>
            <h1 className="text-2xl font-semibold">Repositories</h1>
            <p className="text-gray-500">{repoData.length} total repositories</p>
          </div>
          <div className="flex  gap-4 pt-2 text-xs flex-row md:items-center mt-4 md:mt-0">
            {/* Refresh Button */}
            <button
              className="flex gap-2  items-center justify-center px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-100"
              aria-label="Refresh"
            >
              <FiRefreshCw size={20} />
              <span >Refresh All</span>
            </button>
            {/* Add Repository Button */}
            <button
              className="flex gap-2 items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              aria-label="Add Repository"
            >
              <IoAddOutline size={20} />
              <span>Add Repository</span>
            </button>
          </div>
        </div>
        {/* bottom side  */}
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search Repositories"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}

            className="border border-gray-300 shadow-sm py-2 pl-10 pr-4 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
          />
          <IoMdSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
      </div>


      {/* Repository List with Scroll */}
      <div className=" max-h-screen overflow-y-auto ">
        {filteredRepos.map((repo, index) => (
          <div key={index} className="border-b border-gray-300 pt-2 pb-5 hover:bg-gray-100 cursor-pointer">
            {/* Repository Info */}
            <div className="flex pl-3 md:pl-6 pt-2 gap-2">
              <h1 className="text-xl font-medium">{repo.repoName}</h1>
              <div className="border border-blue-300 rounded-full px-3 bg-blue-50 text-blue-500 text-sm flex items-center">
                {repo.visibility}
              </div>
            </div>
            {/* Details */}
            <div className="flex  pl-3 md:pl-6 gap-6 pt-2 text-gray-600 text-[14px]">
              <div className="flex items-center gap-2">
                <span>{repo.language}</span>
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              <div className="flex items-center gap-2">
                <GoDatabase />
                <span>{repo.storage} KB</span>
              </div>
              <div className="flex items-center gap-2 ">
                <span>Updated {repo.updateTime} days ago</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
