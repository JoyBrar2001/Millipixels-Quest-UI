"use client";

import { PieChartProps } from '@/Interfaces';
import '../admin.css';
import { PieChart } from 'react-minimal-pie-chart';

export default function Card2({ data }: PieChartProps) {
  return (
    <div className='flex-center gap-4 bg-white rounded-xl h-full w-full shadow-lg'>
      <PieChart
        className='relative w-[40%]'
        data={[
          { title: data[0].title, value: data[0].amount, color: data[0].color },
          { title: data[1].title, value: data[1].amount, color: data[1].color },
          { title: data[2].title, value: data[2].amount, color: data[2].color },
        ]}
      />
      <section className='flex-center flex-col text-left gap-3 text-sm'>
        {data.map((item, index) => (
          <div key={index} className='flex justify-start items-center w-full gap-1'>
            <div className={`w-6 h-6 bg-[${item.color}] rounded-md`} />
            <p>{item.title}</p>
          </div>
        ))}
      </section>
    </div>
  )
}