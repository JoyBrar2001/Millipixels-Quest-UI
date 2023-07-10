'use client';

import React, { useState, useEffect } from 'react'
import { SidebarProps } from '@/Interfaces';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
import { RiComputerLine } from 'react-icons/ri';

const Sidebar = ({ questions, questionNumber, onQuestionSelect }: SidebarProps) => {
  
  const questionFilters = ["All Questions", "Answered", "Visited", "Marked", "Unvisited"];

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

  // Handling click on question button
  const handleQuestionButtonClick = (questionNo: number) => {
    onQuestionSelect(questionNo);
    setIsOpen(false);
  }

  // Generating Color for the question button
  const GenerateColor = (status: string) => {
    const color = status === "Answered" ? "#4ade80" : status === "Visited" ? "#f59e0b" : status === "Marked" ? "#ef4444" : "#fff"
    return color;
  }

  return (
    <>
      {/* <div className={`h-screen w-full absolute bg-black z-[99] ${isOpen ? 'opacity-20' : 'hidden'}`} /> */}
      <div className='w-8 h-8 flex-center rounded-full fixed top-3 left-3 z-50 cursor-pointer md:hidden'>
        {isOpen ? <AiOutlineClose size={30}  onClick={() => setIsOpen(false)}/> : <BiMenuAltLeft size={30}  onClick={() => setIsOpen(true)}/>}
      </div>
      <div className={`z-[100] fixed left-0 top-14 w-48 bg-slate-200 text-gray-700 h-full p-4 rounded-tr-2xl transition-all duration-300 shadow-lg ${isOpen || !isSmallScreen ? 'translate-x-0' : '-translate-x-[100%]'}`}>
        <div className="flex-center justify-start gap-2 md:hidden">
          <RiComputerLine size={25} className="relative" />
          <h1 className='text-xl font-bold'>MilliPixels</h1>
        </div>

        {/* Filter Section */}
        <div className='max-md:mt-4 border-b-[1px] border-b-[#1f1f1f55]'>
          {questionFilters.map((item, index) => (
            <button
              key={index}
              className={`sidebar-list-item hover:active ${activeFilter === index ? 'active' : ''}`}
              onClick={() => {
                setFilter(item === "All Questions" ? "" : item)
                setActiveFilter(index)
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Questions Buttons */}
        <section className='flex-center flex-wrap gap-2 mt-4'>
          {questions
            .filter((item) => {
              return filter === "" ? item :
                item.status === filter ? item : ""
            })
            .map((item, index) => (
              <div
                key={index}
                style={{ backgroundColor: GenerateColor(item.status) }}
                className={`${item.status === "Unvisited" ? "text-black" : "text-white"} rounded-full p-2 h-8 w-8 flex-center cursor-pointer shadow-md`}
                onClick={() => handleQuestionButtonClick(item.questionNo)}
              >
                {item.questionNo}
              </div>
            ))}
        </section>

      </div>
    </>
  )
}

export default Sidebar
