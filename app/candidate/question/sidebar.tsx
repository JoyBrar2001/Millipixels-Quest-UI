'use client';

import React, { useState } from 'react'
import { IoLogoBuffer } from 'react-icons/io'
import { AiOutlineMenu, AiOutlineClose, AiOutlineCheck, AiOutlineQuestion } from 'react-icons/ai'
import { QuizSidebarQuestionsProps } from '@/Interfaces';

const Sidebar = ({ data }: QuizSidebarQuestionsProps) => {

  const questionFilters = ["All Questions", "Answered", "Visited", "Marked", "Unvisited"];

  const [sidebar, setSidebar] = useState(false);

  const [filter, setFilter] = useState("");
  const [activeFilter, setActiveFilter] = useState(0);

  const GenerateColor = (status: string) => {
    const color = status === "Answered" ? "#4ade80" : status === "Visited" ? "#f59e0b" : status === "Marked" ? "#ef4444" : "#fff"
    return color;
  }

  return (
    <>
      <div className='lg:invisible bg-slate-200 absolute top-0 left-0 h-16 w-16 shadow-xl rounded-br-[100%] pt-3 pl-3'>
        <AiOutlineMenu className="relative" size={25} onClick={() => setSidebar(!sidebar)} />
      </div>

      <div className={`fixed top-0 left-0 w-48 h-full bg-slate-100 p-4 shadow-lg z-10 transition-all duration-300 ${sidebar ? '' : 'translate-x-[-200px]'}`}>
        <div className='flex justify-between items-center gap-1'>
          <div className='flex justify-start items-center gap-1'>
            <IoLogoBuffer className="relative" size={20} />
            <h1 className='font-bold uppercase text-lg'>Company</h1>
          </div>
          <AiOutlineClose className="relative" size={20} onClick={() => setSidebar(!sidebar)} />
        </div>

        <ul className='mt-7 text-base'>
          <li className='sidebar-list-item acitve'>
            <AiOutlineQuestion /> My Questions
          </li>
          <li className='sidebar-list-item'>
            <AiOutlineCheck /> Attempted
          </li>
          <li className='sidebar-list-item'>
            <AiOutlineClose /> Unattempted
          </li>
        </ul>
      </div>

      {/* Desktop */}
      <div className='invisible lg:visible fixed left-0 w-48 bg-slate-200 text-gray-700 h-full p-4 rounded-tr-2xl'>

        <div className='border-b-[1px] border-b-[#1f1f1f55]'>
          {questionFilters.map((item, index) => (
            <button 
              className={`sidebar-list-item hover:active ${activeFilter === index ? 'active' : ''}`} 
              onClick={() => {
                setFilter(item === "All Questions" ? "" : item)
                setActiveFilter(index)
              }}
            >
              {item}
            </button>
          ))}

          <button className={`sidebar-list-item hover:active`} onClick={() => setFilter("")}>
            <AiOutlineQuestion className="relative" /> All Questions
          </button>
        </div>

        <section className='flex-center flex-wrap gap-2 mt-4'>
          {data
            .filter((item) => {
              return filter === "" ? item :
                item.status === filter ? item : ""
            })
            .map((item) => (
              <div style={{ backgroundColor: GenerateColor(item.status) }} className={`${item.status === "Unvisited" ? "text-black" : "text-white"} rounded-full p-2 h-8 w-8 flex-center cursor-pointer shadow-md`}>{item.questionNumber}</div>
            ))}
        </section>

      </div>
    </>
  )
}

export default Sidebar