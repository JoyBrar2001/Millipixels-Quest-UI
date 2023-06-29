import { SingleQuestionProps, TextQuestionProps } from "@/Interfaces"

const TextQuestion = ({ data }: { data: SingleQuestionProps }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-start items-center gap-4 mb-8'>
        <h1 className='text-5xl font-bold'>Q{data.questionNo}</h1>
        <p>{data.question}</p>
      </div>
      <textarea className="rounded-xl px-4 py-2 outline-none shadow-lg focus:shadow-blue-400/40" name="" id="" cols={30} rows={10} placeholder="Your Answer Here..."></textarea>
    </div>
  )
}

export default TextQuestion
