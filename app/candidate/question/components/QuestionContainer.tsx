"use client"

import React, { useState } from 'react'
import Sidebar from '../sidebar'
import Pagination from './Pagination'
import LiveStats from './LiveStats'
import McqQuestion from './McqQuestion'
import { QuizLiveStats } from '@/constants/data'
import { QuizDatabaseProps } from '@/Interfaces'
import TextQuestion from './TextQuestion'
import DraggableQuestion from './DraggableQuestion'

const QuestionContainer = ({ data }: { data: QuizDatabaseProps }) => {

  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <>
      <Sidebar questions={data.questions} questionNumber={questionNumber} onQuestionSelect={(questionNo) => setQuestionNumber(questionNo)} />
      <div className='lg:ml-48 mt-10 py-10 px-16 flex flex-col bg-gray-100 p-6 rounded-2xl shadow-xl'>
        <div className='flex flex-col md:flex-row gap-6 pb-6 border-b-[1px] border-b-[#1f1f1f55]'>
          <div className='flex-center flex-col gap-4 w-full md:w-3/4 h-full'>

            {data.questions[questionNumber - 1].type === "MCQ" ? (
              <McqQuestion data={data.questions[questionNumber - 1]} />
            ) : data.questions[questionNumber - 1].type === "Textbox" ? (
              <TextQuestion data={data.questions[questionNumber - 1]} />
            ) : data.questions[questionNumber - 1].type === "Draggable" ? (
              <DraggableQuestion data={data.questions[questionNumber - 1]} />
            ) : "Error"}

            <div className='w-full flex-center gap-4'>
              <button className='flex flex-row justify-center items-center gap-2 text-white text-sm font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-150 hover:shadow-xl hover:shadow-green-400/40 bg-green-400'>
                Save Answer
              </button>
              <button className='flex flex-row justify-center items-center gap-2 text-white text-sm font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-150 hover:shadow-xl hover:shadow-red-500/40 bg-red-500'>
                Mark for Review
              </button>
            </div>

          </div>
          <LiveStats data={QuizLiveStats} />
        </div>

        <Pagination questionNo={questionNumber} totalQuestions={data.totalQuestions} onQuestionSelect={(questionNo) => setQuestionNumber(questionNo)} />
      </div>
    </>
  )
}

export default QuestionContainer
