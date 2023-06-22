import { McqQuestionProps } from "@/Interfaces"

const McqQuestion = ({ data }: {data: McqQuestionProps}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-start items-center gap-4 mb-8'>
        <h1 className='text-5xl font-bold'>Q{data.questionNumber}</h1>
        <p>{data.question}</p>
      </div>
      <ul className='flex flex-col w-fulll'>
        {data.options.map((option, index) => (
          <li>
          <input type="radio" id={`q-${data.questionNumber}-${index}`} value="script" className='hidden peer' />
          <label htmlFor={`q-${data.questionNumber}-${index}`} className='question-option-li'>
            <h2>{option}</h2>
          </label>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default McqQuestion
