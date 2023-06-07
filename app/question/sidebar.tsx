'use client';

import React, { useState } from 'react'
import { IoLogoBuffer } from 'react-icons/io'
import { AiOutlineMenu, AiOutlineClose, AiOutlineCheck, AiOutlineQuestion } from 'react-icons/ai'

const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <div className='lg:invisible bg-slate-200 absolute top-0 left-0 h-16 w-16 shadow-xl rounded-br-[100%] pt-3 pl-3'>
        <AiOutlineMenu size={25} onClick={() => setSidebar(!sidebar)} />
      </div>

      <div className={`fixed top-0 left-0 w-48 h-full bg-slate-100 p-4 shadow-lg z-10 transition-all duration-300 ${sidebar ? '' : 'translate-x-[-200px]'}`}>
        <div className='flex justify-between items-center gap-1'>
          <div className='flex justify-start items-center gap-1'>
            <IoLogoBuffer size={20} />
            <h1 className='font-bold uppercase text-lg'>Company</h1>
          </div>
          <AiOutlineClose size={20} onClick={() => setSidebar(!sidebar)} />
        </div>

        <ul className='mt-7 text-base'>
          <li className='sidebar-list-item acitve'><AiOutlineQuestion /> My Questions</li>
          <li className='sidebar-list-item'><AiOutlineCheck /> Attempted</li>
          <li className='sidebar-list-item'><AiOutlineClose /> Unattempted</li>
        </ul>
      </div>

      <div className='invisible lg:visible fixed left-0 w-48 bg-slate-200 text-gray-700 h-full p-4 rounded-tr-2xl'>
        <div className='flex justify-start items-center gap-1'>
          <IoLogoBuffer size={25} />
          <h1 className='font-bold uppercase text-xl'>Company</h1>
        </div>

        <ul className='mt-7 text-base'>
          <li className='sidebar-list-item acitve'><AiOutlineQuestion /> My Questions</li>
          <li className='sidebar-list-item'><AiOutlineCheck /> Attempted</li>
          <li className='sidebar-list-item'><AiOutlineClose /> Unattempted</li>
        </ul>
      </div>
    </>



  )
}

export default Sidebar
