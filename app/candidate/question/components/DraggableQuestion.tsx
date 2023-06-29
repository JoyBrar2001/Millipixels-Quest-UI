"use client"

import { DraggableQuestionProps, SingleQuestionProps } from '@/Interfaces'
import { useState } from 'react'
import { Reorder, useDragControls, useMotionValue, DragControls } from 'framer-motion'
import { MdDragHandle } from 'react-icons/md'

const DraggableQuestion = ({ data }: { data: SingleQuestionProps }) => {

  const [options, setOptions] = useState(data.options)
  const handleReorder = ( newOptions: string[] ) => {
    setOptions(newOptions)
  } 

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-start items-center gap-4 mb-8'>
        <h1 className='text-5xl font-bold'>Q{data.questionNo}</h1>
        <p>{data.question}</p>
      </div>
      <ul className='flex flex-col w-fulll'>
        <Reorder.Group layoutScroll className='flex-center flex-col gap-4' axis="y" onReorder={setOptions} values={options}>
          {options.map((item, index) => (
            <Reorder.Item
              key={index} 
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
