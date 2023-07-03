import React from 'react'

import { FaRegUserCircle, FaListUl } from "react-icons/fa"
import { BiUserCircle } from "react-icons/bi"
import { BsQuestionCircle, BsFillFileBarGraphFill } from 'react-icons/bs'

export default function AdminSidebar() {
  return (
    <>
      <div className="flex-center h-full w-full lg:border-b-[1px] border-[#1f1f1f] lg:pb-4">
        <FaRegUserCircle size={120} className="relative" />
      </div>
      <h1 className="text-3xl font-bold">Joy Brar</h1>
      <p className="text-xs font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum cum laudantium saepe commodi dolore officia quisquam itaque eos a!</p>
      <div className="flex-center flex-wrap lg:flex-col w-full gap-2">
        <button className="transition-150 stats__button hover:stats__button__hover hover:blue__gradient">
          <FaListUl className="relative" size={20} />
          All Stats
        </button>
        <button className="transition-150 stats__button hover:stats__button__hover hover:blue__gradient">
          <BiUserCircle className="relative" size={20} />
          Candidate Stats
        </button>
        <button className="transition-150 stats__button hover:stats__button__hover hover:blue__gradient">
          <BsQuestionCircle className="relative" size={20} />
          Question Stats
        </button>
        <button className="transition-150 stats__button hover:stats__button__hover hover:blue__gradient">
          <BsFillFileBarGraphFill className="relative" size={20} />
          Position Stats
        </button>
      </div>
    </>
  )
}