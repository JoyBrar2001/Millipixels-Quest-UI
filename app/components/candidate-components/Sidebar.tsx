'use client';

import React, { useState } from 'react'
import { SidebarProps } from '@/Interfaces';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';

const Sidebar = ({ questions, questionNumber, onQuestionSelect }: SidebarProps) => {

  const [open, setOpen] = useState(true)

  const questionFilters = ["All Questions", "Answered", "Visited", "Marked", "Unvisited"];

  const [filter, setFilter] = useState("");
  const [activeFilter, setActiveFilter] = useState(0);

  const GenerateColor = (status: string) => {
    const color = status === "Answered" ? "#4ade80" : status === "Visited" ? "#f59e0b" : status === "Marked" ? "#ef4444" : "#fff"
    return color;
  }

  return (
    <>
      <div className='w-8 h-8 flex-center bg-black/10 rounded-full absolute top-16 left-2 z-50 cursor-pointer lg:hidden' onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={30}/> : <BiMenuAltLeft size={30}/>}</div>
      <div className={`-mt-10 fixed left-0 w-48 bg-slate-200 text-gray-700 h-full p-4 rounded-tr-2xl ${open ? 'block' : 'hidden'}`}>


        <div className='border-b-[1px] border-b-[#1f1f1f55]'>
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

          {/* <button className={`sidebar-list-item hover:active`} onClick={() => setFilter("")}>
            <AiOutlineQuestion className="relative" /> All Questions
          </button> */}
        </div>

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
                onClick={() => onQuestionSelect(item.questionNo)}
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
