'use client';

import React, { useState, useEffect } from 'react'
import { AdminSidebarProps, SidebarProps } from '@/Interfaces';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
import { RiComputerLine } from 'react-icons/ri';

const AdminSidebar = ({ activeOption, onOptionSelect }: AdminSidebarProps,) => {

  // UseStates
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [filter, setFilter] = useState("");
  const [activeFilter, setActiveFilter] = useState(0);
  
  // For Window Width
  useEffect(() => {
    function handleScreenChange() {
      const isSmall = window.innerWidth <= 768;
      setIsSmallScreen(isSmall);
    }

    handleScreenChange();

    window.addEventListener('resize', handleScreenChange);

    return () => {
      window.removeEventListener('resize', handleScreenChange);
    };
  }, []);

  return (
    <>
      {/* <div className={`h-screen w-full absolute bg-black z-[99] ${isOpen ? 'opacity-20' : 'hidden'}`} /> */}
      <div className='w-8 h-8 flex-center rounded-full fixed top-3 left-3 z-50 cursor-pointer md:hidden'>
        {isOpen ? <AiOutlineClose size={30}  onClick={() => setIsOpen(false)}/> : <BiMenuAltLeft size={30}  onClick={() => setIsOpen(true)}/>}
      </div>
      <div className={`z-[100] fixed left-0 top-14 w-48 bg-slate-200 text-gray-700 h-full p-4 rounded-tr-2xl transition-all duration-300 shadow-lg ${isOpen || !isSmallScreen ? 'translate-x-0' : '-translate-x-[100%]'}`}>
        <div className="flex-center justify-start gap-2 md:hidden border-b-[1px] border-b-[#1f1f1f55] pb-2">
          <RiComputerLine size={25} className="relative" />
          <h1 className='text-xl font-bold'>MilliPixels</h1>
        </div>

        {/* Filter Section */}
        <div className=''>
          <button 
            onClick={() => onOptionSelect("Dashboard")} 
            className={`sidebar-list-item hover:active border-b-[1px] border-b-[#1f1f1f55] ${activeOption === "Dashboard" ? 'active' : ''}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => onOptionSelect("Score Distribution")} 
            className={`sidebar-list-item hover:active ${activeOption === "Score Distribution" ? 'active' : ''}`}
          >
            Scores
          </button>
          <button 
            onClick={() => onOptionSelect("Top Scorers")} 
            className={`sidebar-list-item hover:active ${activeOption === "Top Scorers" ? 'active' : ''}`}
          >
            Top Scorers
          </button>
          <button 
            onClick={() => onOptionSelect("Distribution")} 
            className={`sidebar-list-item hover:active ${activeOption === "Distribution" ? 'active' : ''}`}
          >
            Distribution
          </button>
        </div>

        {/* Questions Buttons */}
        <section className='flex-center flex-wrap gap-2 mt-4'>
          
        </section>

      </div>
    </>
  )
}

export default AdminSidebar
