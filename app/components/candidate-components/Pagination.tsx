import { PaginationProps } from '@/Interfaces'
import React from 'react'
import { BsChevronDoubleLeft, BsChevronLeft, BsChevronRight, BsChevronDoubleRight } from 'react-icons/bs'

const Pagination = ({ questionNo, totalQuestions, onQuestionSelect }: PaginationProps) => {

  return (
    <div className='w-[80%] mx-auto mt-8 md:mt-6 flex flex-row justify-evenly items-center'>
      
      <div className="pagination flex-center gap-2">
        <button 
          className='pagination-button w-20 transition-150'
          onClick={() => onQuestionSelect(questionNo-1)}
        >
          <BsChevronLeft size={15} className='relative' /> Prev
        </button>
        <button 
          className='pagination-button transition-150 max-md:hidden'
          onClick={() => onQuestionSelect(1)}
        >
          <BsChevronDoubleLeft size={15} className='relative' />
        </button>

        {questionNo >= 3 ? (
          <button 
            className='pagination-button transition-150 max-md:hidden'
            onClick={() => onQuestionSelect(questionNo-2)}
          >
            {questionNo - 2}
          </button>
        ) : ''}
        {questionNo >= 2 ? (
          <button 
            className='pagination-button transition-150'
            onClick={() => onQuestionSelect(questionNo-1)}
          >
            {questionNo - 1}
          </button>
        ) : ''}
        <button className='pagination-button pagination-button-active  transition-150'>
          {questionNo}
        </button>
        {questionNo <= totalQuestions - 1 ? (
          <button 
            className='pagination-button transition-150'
            onClick={() => onQuestionSelect(questionNo+1)}
          >
            {questionNo + 1}
          </button>
        ) : ''}
        {questionNo <= totalQuestions - 2 ? (
          <button 
            className='pagination-button transition-150 max-md:hidden'
            onClick={() => onQuestionSelect(questionNo+2)}
          >
            {questionNo + 2}
          </button>
        ) : ''}

        <button 
          className='pagination-button transition-150 max-md:hidden'
          onClick={() => onQuestionSelect(totalQuestions)}
        >
          <BsChevronDoubleRight size={15} className='relative' />
        </button>
        <button 
          className='pagination-button w-20 transition-150'
          onClick={() => onQuestionSelect(questionNo+1)}
        >
          Next <BsChevronRight size={15} className='relative' />
        </button>
      </div>
    </div>
  )
}

export default Pagination
