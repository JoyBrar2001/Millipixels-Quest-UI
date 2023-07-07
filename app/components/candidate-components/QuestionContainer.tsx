"use client"

import React, { useState } from 'react'
import { Sidebar, Pagination, LiveStats, McqQuestion, TextQuestion, DraggableQuestion } from '@/app/components/candidate-components'
import { QuizLiveStats } from '@/constants/data'
import { QuizDatabaseProps } from '@/Interfaces'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './notify'

const QuestionContainer = ({ data }: { data: QuizDatabaseProps }) => {

  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <>
      <ToastContainer />
      <Sidebar questions={data.questions} questionNumber={questionNumber} onQuestionSelect={(questionNo) => setQuestionNumber(questionNo)} />
      <div className='md:ml-48 mt-10 py-6 md:py-10 px-6 md:px-16 flex flex-col bg-gray-100 p-6 rounded-2xl shadow-xl'>
        <div className='flex flex-col md:flex-row gap-6 pb-6 border-b-[1px] border-b-[#1f1f1f55]'>
          <div className='flex-center flex-col gap-4 w-full md:w-3/4 h-full'>

            {data.questions[questionNumber - 1].type === "MCQ" ? (
              <McqQuestion data={data.questions[questionNumber - 1]} />
            ) : data.questions[questionNumber - 1].type === "Textbox" ? (
              <TextQuestion data={data.questions[questionNumber - 1]} />
            ) : data.questions[questionNumber - 1].type === "Draggable" ? (
              <DraggableQuestion data={data.questions[questionNumber - 1]} />
            ) : "Error"}

            <div className='w-full flex-center max-md:flex-col gap-4'>
              <button onClick={() => notify("Answer Saved", "success")} className='flex flex-row justify-center items-center w-40 gap-2 text-white text-sm font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-150 hover:shadow-xl hover:shadow-green-400/40 bg-green-400'>
                Save Answer
              </button>
              <button onClick={() => notify("Marked for Review", "error")} className='flex flex-row justify-center items-center w-40 gap-2 text-white text-sm font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-150 hover:shadow-xl hover:shadow-red-500/40 bg-red-500'>
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
