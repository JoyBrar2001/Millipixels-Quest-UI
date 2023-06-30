import { QuizDatabaseProps, SingleQuestionProps } from "@/Interfaces"

const McqQuestion = ({ data }: { data: SingleQuestionProps }) => {
  const index = 1

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-start items-center gap-4 mb-8'>
        <h1 className='text-5xl font-bold'>Q{data.questionNo}</h1>
        <p>{data.question}</p>
      </div>
      <ul className='flex flex-col w-fulll'>
        {data.options.map((option, index) => (
          <li key={index}>
            <input type="radio" id={`q-${data.questionNo}-${index}`} value="script" className='hidden peer' />
            <label htmlFor={`q-${data.questionNo}-${index}`} className='question-option-li'>
              <h2>{option}</h2>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default McqQuestion
