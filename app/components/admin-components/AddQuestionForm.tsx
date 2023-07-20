import React, { useState } from 'react'
import { BiMinus } from 'react-icons/bi';
import { TiTick } from 'react-icons/ti'

const AddQuestionForm = () => {

  const [questionType, setQuestionType] = useState('');
  const [options, setOptions] = useState(['']);
  const [answer, setAnswer] = useState('None');

  const handleCorrectOption = (option: string) => {
    setAnswer(option);
  }

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  }

  const handleAddOption = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOptions([...options, '']);
  }

  const handleRemoveOption = (index: number) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  }

  return (
    <div className='flex-center flex-col w-full py-10'>
      <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Add Question</h1>

      <div className="w-full flex-center px-20">

        <form className="flex-center w-full items-start flex-col gap-2 my-12">
          <input className="block px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" type="text" placeholder="Question" />

          <select defaultValue="Question Type" onChange={(e) => setQuestionType(e.target.value)} className="block text-[#a5abb6] px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" name="" id="">
            <option selected>Question Type</option>
            <option value="MCQ">MCQ</option>
            <option value="Textarea">Textarea</option>
            <option value="Draggable">Draggable</option>
          </select>

          <select className="block text-[#a5abb6] px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" name="" id="">
            <option selected>Question Domain</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Textarea">Textarea</option>
            <option value="Draggable">Draggable</option>
          </select>

          <select className="block text-[#a5abb6] px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" name="" id="">
            <option selected>Difficulty</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <input className="block px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" type="text" placeholder="Added By" />
        </form>

        {(questionType === "MCQ" || questionType === "Draggable") && (
          <form className="flex-center w-full items-start flex-col gap-2 my-12" >
            <h2 className='text-2xl font-semibold text-[#666a71] border-b-[1px] border-b-[#1f1f1f]'>Add Options Here</h2>
            {options.map((option, index) => (
              <div className="flex-center gap-2" key={index}>
                <input className="block px-4 py-2 outline-none bg-transparent border-b-[1px] border-b-[#1f1f1f] focus:bg-white focus:border-b-cyan-500 focus:border-b-2 focus:rounded-xl focus:placeholder-cyan-500" type="text" placeholder={`Add Option ${index + 1}`} value={option} onChange={(e) => handleOptionChange(index, e.target.value)} />
                {index >= 0 && (
                  <>
                    <button
                      type='button'
                    onClick={() => handleCorrectOption(option)}
                      className={` rounded-full  px-2 py-1 shadow-lg shadow-cyan-500/30 font-bold text-5xl ${option === answer ? 'bg-cyan-500 text-white' : 'bg-white text-cyan-500'}`}
                      >
                      <TiTick size={15} className='relative' />
                    </button>
                    <button
                      type='button'
                      onClick={() => handleRemoveOption(index)}
                      className="bg-white rounded-full text-cyan-500 px-2 py-1 shadow-lg shadow-cyan-500/30 font-bold text-5xl"
                    >
                      <BiMinus size={15} className='relative' />
                    </button>
                  </>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddOption}
              className="bg-white rounded-full text-cyan-500 text-sm mt-4 px-4 py-2 shadow-lg shadow-cyan-500/30"
            >
              Add Option
            </button>

            <h3 className='bg-white rounded-full text-cyan-500 mt-4 px-4 py-2 shadow-lg shadow-cyan-500/30'>Correct Answer : {answer || 'None'}</h3>
          </form>
        )}
      </div>

      <button type="submit" className="bg-white rounded-full text-cyan-500 text-lg px-8 py-2 shadow-lg shadow-cyan-500/30">
        Add Question
      </button>
    </div>
  )
}

export default AddQuestionForm
