"use client";

import '@/app/admin/admin.css'

import { PieChartProps, PieChartItem } from '@/Interfaces';
import { PieChart } from 'react-minimal-pie-chart';

export default function Card2({ data }: PieChartProps) {

  const CreateArrayForPie = ({ data } : PieChartProps) => {
    let arr:any[] = [];
    data.map((item) => {
      let obj = { title: item.title, value: item.amount, color: item.color };
      arr.push(obj);
    });
    console.log(arr);
    return arr;
  }

  return (
    <div className='flex-center gap-4 bg-white rounded-xl h-full w-full shadow-lg'>
      <PieChart
        className='relative w-[40%]'
        data={CreateArrayForPie({data})}
      />
      <section className='flex-center flex-col text-left gap-3 text-sm'>
        {data.map((item, index) => (
          <div key={index} className='flex justify-start items-center w-full gap-1'>
            <div className={`w-6 h-6 rounded-md`} style={{backgroundColor: `${item.color}`}} />
            <p>{item.title}</p>
          </div>
        ))}
      </section>
    </div>
  )
}