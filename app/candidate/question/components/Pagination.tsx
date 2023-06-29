import { PaginationProps } from '@/Interfaces'
import React from 'react'
import { BsChevronDoubleLeft, BsChevronLeft, BsChevronRight, BsChevronDoubleRight } from 'react-icons/bs'

const Pagination = ({ questionNo, totalQuestions }: PaginationProps) => {

  return (
    <div className='w-[80%] mx-auto mt-8 md:mt-6 flex flex-row justify-evenly items-center'>
      <button className='flex flex-row justify-center items-center gap-2 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-150 hover:shadow-xl hover:shadow-green-400/40 bg-green-400'>
        Save Answer
      </button>
      <div className="pagination flex-center gap-2">
        <button className='pagination-button transition-150'>
          <BsChevronLeft size={15} className='relative' /> Prev
        </button>
        <button className='pagination-button transition-150'>
          <BsChevronDoubleLeft size={15} className='relative' />
        </button>

        {questionNo >= 3 ? (
          <button className='pagination-button transition-150'>
            {questionNo - 2}
          </button>
        ) : ''}
        {questionNo >= 2 ? (
          <button className='pagination-button transition-150'>
            {questionNo - 1}
          </button>
        ) : ''}
        <button className='pagination-button pagination-button-active  transition-150'>
          {questionNo}
        </button>
        {questionNo <= totalQuestions - 2 ? (
          <button className='pagination-button transition-150'>
            {questionNo + 1}
          </button>
        ) : ''}
        {questionNo <= totalQuestions - 1 ? (
          <button className='pagination-button transition-150'>
            {questionNo + 2}
          </button>
        ) : ''}

        <button className='pagination-button transition-150'>
          <BsChevronDoubleRight size={15} className='relative' />
        </button>
        <button className='pagination-button transition-150'>
          <BsChevronRight size={15} className='relative' /> Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
