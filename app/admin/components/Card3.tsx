"use client"

import '../admin.css';

import { BsArrowUpRight } from 'react-icons/bs';
import { Bar } from 'react-chartjs-2';
import { BarChartProps } from '@/Interfaces';

export default function Card3( data : BarChartProps) {

  return (
    <div className='flex-center gap-4 bg-white p-10 rounded-xl h-full w-full shadow-lg'>
      <div className='relative w-full border-b-[1px] border-b-[#1f1f1f99]'>
        <h1 className="text-lg font-bold">Distribution</h1>
        <BsArrowUpRight className="absolute top-1.5 left-1.5" />

        <Bar data={data}/>
        
      </div>
    </div>
  )
}