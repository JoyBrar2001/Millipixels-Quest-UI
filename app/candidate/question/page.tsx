import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
import McqQuestion from './components/McqQuestion'
import { McqQuestionData, QuizLiveStats, TextQuestionData } from '@/constants/data'
import LiveStats from './components/LiveStats'
import TextQuestion from './components/TextQuestion'

export default function Page() {
  return (
    <div className='py-10 px-16'>
      <h1 className='text-3xl md:text-4xl font-bold mb-6'>Interview Questions</h1>
      <div className='flex flex-col bg-gray-100 p-6 rounded-2xl shadow-xl'>
        <div className='flex flex-col md:flex-row gap-6 pb-6 border-b-[1px] border-b-[#1f1f1f55]'>
          <div className='flex-center flex-col gap-4 w-full md:w-3/4 h-full'>
            {/* <McqQuestion data = { McqQuestionData } /> */}
            <TextQuestion data={ TextQuestionData } />
            <button className='navigation-btn pr-5'><BsCaretLeftFill size={18} />Save Answer</button>
          </div>

          <LiveStats data={ QuizLiveStats } />
        </div>

        <div className='w-[80%] mx-auto mt-8 md:mt-6 flex flex-row justify-evenly items-center'>
          <button className='navigation-btn pr-5'><BsCaretLeftFill className='relative' size={18} /> Prev</button>
          <p>12/30</p>
          <button className='navigation-btn pl-5'>Next <BsCaretRightFill className='relative' size={18} /></button>
        </div>
      </div>


    </div>
  )
}