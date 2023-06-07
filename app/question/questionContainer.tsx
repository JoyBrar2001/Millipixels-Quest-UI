import { AiFillCheckCircle, AiFillEye, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { BsPenFill, BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'
import { FaClock } from 'react-icons/fa'

const QuestionContainer = () => {
  return (
    <div className='py-10 px-16'>
      <h1 className='text-3xl md:text-4xl font-bold mb-6'>Interview Questions</h1>
      <div className='flex flex-col bg-gray-100 p-6 rounded-2xl shadow-xl'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='w-full md:w-3/4 h-full'>

            <div className='flex flex-col'>
              <div className='flex flex-row justify-start items-center gap-4 mb-8'>
                <h1 className='text-5xl font-bold'>Q12</h1>
                <p>Which one of the following tags would we use to include JavaScript inside a HTML Document ? </p>
              </div>
              <ul className='flex flex-col w-fulll'>
                <li>
                  <input type="radio" id="q12a" value="script" className='hidden peer' />
                  <label htmlFor="q12a" className='question-option-li'>
                    <h2>script</h2>
                  </label>
                </li>
                <li>
                  <input type="radio" id="q12b" value="js" className='hidden peer' />
                  <label htmlFor="q12b" className='question-option-li'>
                    <h2>js</h2>
                  </label>
                </li>
                <li>
                  <input type="radio" id="q12c" value="style" className='hidden peer' />
                  <label htmlFor="q12c" className='question-option-li'>
                    <h2>style</h2>
                  </label>
                </li>
                <li>
                  <input type="radio" id="q12d" value="form" className='hidden peer' />
                  <label htmlFor="q12d" className='question-option-li'>
                    <h2>form</h2>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className='w-full md:w-1/4 h-full flex flex-col gap-3 md:gap-0'>
            <div className='flex gap-2 justify-center md:justify-start items-center'>
              <FaClock size={40} className='drop-shadow-xl' />
              <h1 className='text-2xl font-bold'>12:42 left</h1>
            </div>
            <ul className='flex flex-row md:flex-col text-sm md:text-base gap-2 mt-4 pl-2'>
              <li className='question-side-li'>
                <AiFillCheckCircle className='text-green-400 green__glow' size={25} /> 11/30 Answered
              </li>
              <li className='question-side-li'>
                <AiFillEye className='text-amber-500 yellow__glow' size={25} /> 15/30 Viewed
              </li>
              <li className='question-side-li'>
                <BsPenFill className='text-red-500 red__glow' size={22} /> 3/30 Reviewed
              </li>
            </ul>
          </div>
        </div>

        <div className='w-[80%] mx-auto mt-8 md:mt-6 flex flex-row justify-evenly items-center'>
          <button className='navigation-btn pr-5'><BsCaretLeftFill size={18}/> Prev</button>
          <p>12/30</p>
          <button className='navigation-btn pl-5'>Next <BsCaretRightFill size={18}/></button>
        </div>
      </div>


    </div>
  )
}

export default QuestionContainer