"use client"

import { DraggableQuestionProps } from '@/Interfaces'
import { useState } from 'react'
import { Reorder, useDragControls, useMotionValue, DragControls } from 'framer-motion'
import { MdDragHandle } from 'react-icons/md'

const DraggableQuestion = ({ data }: { data: DraggableQuestionProps }) => {

  const optionsList = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]

  const [options, setOptions] = useState(data.options)
  const handleReorder = ( newOptions: string[] ) => {
    setOptions(newOptions)
  } 
  const y = useMotionValue(0)

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-start items-center gap-4 mb-8'>
        <h1 className='text-5xl font-bold'>Q{data.questionNumber}</h1>
        <p>{data.question}</p>
      </div>
      <ul className='flex flex-col w-fulll'>
        <Reorder.Group layoutScroll className='flex-center flex-col gap-4' axis="y" onReorder={setOptions} values={options}>
          {options.map((item) => (
            <Reorder.Item 
              key={item} 
              value={item} 
              id={item}
            >
              <span className='bg-white px-4 py-2 text-center'>{item}</span>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </ul>
    </div>
  )
}

export default DraggableQuestion
