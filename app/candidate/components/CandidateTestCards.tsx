import { QuizDetailsProps } from '@/Interfaces'
import '@/app/candidate/candidate.css'

import { BsQuestionCircle, BsClock, BsArrowRightShort } from 'react-icons/bs'
import { ImStatsBars } from 'react-icons/im'

const CandidateTestCards = ({ data }: QuizDetailsProps) => {
  return (
      <>
      {data.map(item => (
        <div className='w-full h-full bg-white text-left p-12 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-150'>
          <h2 className="quiz-details-title">{item.title}</h2>

          <div className='flex flex-col text-xl mx-2 my-8 gap-4 border-b-[2px] border-b-[#606060] pb-6'>
            <p className='quiz-details-text'><BsQuestionCircle className='relative' size={30} /> {item.questions} Questions</p>
            <p className='quiz-details-text'><BsClock className='relative' size={30} /> {item.time} Minutes</p>
            <p className='quiz-details-text'><ImStatsBars className='relative' size={30} /> {item.difficulty} </p>
          </div>

          <div className='flex flex-col text-xl mx-2 my-6 gap-2'>
            <h3 className="text-2xl font-semibold">Topics</h3>
            <ul className='list-disc pl-6'>
              {item.topics.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>

          <button className="candidate-button blue__gradient">
            Start Quiz <BsArrowRightShort className="text-white relative" size={30} />
          </button>
        </div>
      ))}
      </>
  )
}

export default CandidateTestCards
