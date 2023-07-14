'use client';

import React, { useState, useEffect, useContext } from 'react'
import { AdminSidebarProps, SidebarProps } from '@/Interfaces';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
import { RiComputerLine } from 'react-icons/ri';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { DashboardContext } from '@/app/admin/page';
import Link from 'next/link';

const AdminSidebar = () => {

  const context = useContext(DashboardContext);
  if (!context) {
    return null;
  }
  const { section, handleSectionSelect } = context;

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
        {isOpen ? <AiOutlineClose size={30} onClick={() => setIsOpen(false)} /> : <BiMenuAltLeft size={30} onClick={() => setIsOpen(true)} />}
      </div>
      <div className={`z-[100] fixed left-0 top-14 w-48 bg-slate-200 text-gray-700 h-full p-4 rounded-tr-2xl transition-all duration-300 shadow-lg ${isOpen || !isSmallScreen ? 'translate-x-0' : '-translate-x-[100%]'}`}>
        <div className="flex-center justify-start gap-2 md:hidden border-b-[1px] border-b-[#1f1f1f55] pb-2">
          <RiComputerLine size={25} className="relative" />
          <h1 className='text-xl font-bold'>MilliPixels</h1>
        </div>

        <div className='flex-center flex-col pb-2 border-b-[1px] border-b-[#1f1f1f55]'>
          <HiOutlineUserCircle size={50} className='relative' />
          <h2 className='text-2xl font-semibold'>Joy Brar</h2>
        </div>

        {/* Filter Section */}
        <div className=''>
          <button
            onClick={() => handleSectionSelect("Dashboard")}
            className={`sidebar-list-item hover:active border-b-[1px] border-b-[#1f1f1f55] ${section === "Dashboard" ? 'active' : ''}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => handleSectionSelect("Score Distribution")}
            className={`sidebar-list-item hover:active ${section === "Score Distribution" ? 'active' : ''}`}
          >
            Scores
          </button>
          <button
            onClick={() => handleSectionSelect("Top Scorers")}
            className={`sidebar-list-item hover:active ${section === "Top Scorers" ? 'active' : ''}`}
          >
            Top Scorers
          </button>
          <button
            onClick={() => handleSectionSelect("Distribution")}
            className={`sidebar-list-item hover:active ${section === "Distribution" ? 'active' : ''}`}
          >
            Distribution
          </button>
        </div>
        
        <Link href="/admin/questionForm">
          <button className={`sidebar-list-item hover:active ${section === "Distribution" ? 'active' : ''}`}>
            Add Question
          </button>
        </Link>
      </div>
    </>
  )
}

export default AdminSidebar
