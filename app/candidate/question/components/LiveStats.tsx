import { QuizLiveStatsProps } from '@/Interfaces'
import { AiFillCheckCircle, AiFillEye } from 'react-icons/ai'
import { BsPenFill } from 'react-icons/bs'
import { FaClock } from 'react-icons/fa'

const LiveStats = ({ data }: { data: QuizLiveStatsProps }) => {
  return (
    <div className='w-full md:w-1/4 h-full flex flex-col gap-3 md:gap-0'>
      <div className='flex gap-2 justify-center md:justify-start items-center'>
        <FaClock size={40} className='drop-shadow-xl' />
        <h1 className='text-2xl font-bold'>{data.time.minutes}:{data.time.seconds} left</h1>
      </div>
      <ul className='flex flex-row md:flex-col text-sm md:text-base gap-2 mt-4 pl-2'>
        {data.questionData.map((item, index) => (
          <li className='question-side-li'>
            {item.title === "Answered" ? <AiFillCheckCircle className='text-green-400 green__glow relative' size={25} /> : 
            item.title === "Visited" ? <AiFillEye className='text-amber-500 yellow__glow relative' size={25} /> : 
            <BsPenFill className='text-red-500 red__glow relative' size={22} />} {item.value}/{item.total} {item.title}
          </li>
        ))}
        {/* <li className='question-side-li'>
          <AiFillCheckCircle className='text-green-400 green__glow relative' size={25} /> {data.questionData.Answered}/30 Answered
        </li>
        <li className='question-side-li'>
          <AiFillEye className='text-amber-500 yellow__glow relative' size={25} /> 15/30 Viewed
        </li>
        <li className='question-side-li'>
          <BsPenFill className='text-red-500 red__glow relative' size={22} /> 3/30 Reviewed
        </li> */}
      </ul>
    </div>
  )
}

export default LiveStats
