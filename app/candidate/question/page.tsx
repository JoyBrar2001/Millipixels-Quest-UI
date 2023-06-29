import { DraggableQuestionData, McqQuestionData, QuizLiveStats, TextQuestionData } from '@/constants/data'
import LiveStats from './components/LiveStats'
import TextQuestion from './components/TextQuestion'
import DraggableQuestion from './components/DraggableQuestion'
import McqQuestion from './components/McqQuestion'
import { BsChevronDoubleLeft, BsChevronLeft, BsChevronRight, BsChevronDoubleRight } from 'react-icons/bs'

export default function Page() {
  return (
    <div className='py-10 px-16'>
      <h1 className='text-3xl md:text-4xl font-bold mb-6'>Interview Questions</h1>
      <div className='flex flex-col bg-gray-100 p-6 rounded-2xl shadow-xl'>
        <div className='flex flex-col md:flex-row gap-6 pb-6 border-b-[1px] border-b-[#1f1f1f55]'>
          <div className='flex-center flex-col gap-4 w-full md:w-3/4 h-full'>
            <McqQuestion data = { McqQuestionData } />
            {/* <TextQuestion data={ TextQuestionData } /> */}
            {/* <DraggableQuestion data={DraggableQuestionData} /> */}
          </div>
          <LiveStats data={ QuizLiveStats } />
        </div>

        <div className='w-[80%] mx-auto mt-8 md:mt-6 flex flex-row justify-evenly items-center'>
          <button className='flex flex-row justify-center items-center gap-2 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-150 hover:shadow-xl hover:shadow-green-400/40 bg-green-400'>
            Save Answer
          </button>
          <div className="pagination flex-center gap-2">
            <button className='bg-white hover:bg-gradient-to-br from-[#34BDDF] to-[#00A4CD] hover:text-white rounded-full p-2'>
              <BsChevronDoubleLeft size={15} className='relative' />
            </button>
            <button className='bg-white hover:bg-gradient-to-br from-[#34BDDF] to-[#00A4CD] hover:text-white rounded-full p-2'>
              <BsChevronLeft size={15} className='relative' />
            </button>

            <button className='bg-white hover:bg-gradient-to-br from-[#34BDDF] to-[#00A4CD] hover:text-white rounded-full p-2 text-sm'>
              10
            </button>
            <button className='bg-white hover:bg-gradient-to-br from-[#34BDDF] to-[#00A4CD] hover:text-white rounded-full p-2 text-sm'>
              11
            </button>
            <button className='bg-gradient-to-br from-[#34BDDF] to-[#00A4CD] text-white rounded-full p-2 text-sm'>
              12
            </button>
            <button className='bg-white hover:bg-gradient-to-br from-[#34BDDF] to-[#00A4CD] hover:text-white rounded-full p-2 text-sm'>
              13
            </button>
            <button className='bg-white hover:bg-gradient-to-br from-[#34BDDF] to-[#00A4CD] hover:text-white rounded-full p-2 text-sm'>
              14
            </button>

            <button className='bg-white hover:bg-gradient-to-br from-[#34BDDF] to-[#00A4CD] hover:text-white rounded-full p-2'>
              <BsChevronRight size={15} className='relative' />
            </button>
            <button className='bg-white hover:bg-gradient-to-br from-[#34BDDF] to-[#00A4CD] hover:text-white rounded-full p-2'>
              <BsChevronDoubleRight size={15} className='relative' />
            </button>
          </div>
        </div>
      </div>


    </div>
  )
}