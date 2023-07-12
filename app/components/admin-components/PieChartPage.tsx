"use client";

import '@/app/admin/admin.css'

import { PieChartProps, PieChartItem, PieChartPageProps } from '@/Interfaces';
import { PieChart } from 'react-minimal-pie-chart';
import { IoIosArrowBack } from 'react-icons/io';
import { useContext } from 'react';
import { DashboardContext } from '@/app/admin/page';

export default function PieChartPage({ data }: PieChartPageProps) {

  const context = useContext(DashboardContext);
  if(!context){
    return null;
  }
  const { section, handleSectionSelect } = context;

  const CreateArrayForPie = ({ data }: PieChartProps) => {
    let arr: any[] = [];
    data.map((item) => {
      let obj = { title: item.title, value: item.amount, color: item.color };
      arr.push(obj);
    });
    return arr;
  }

  return (
    <div className='h-full w-full flex-center flex-col p-6'>
      <div className='relative w-full'>
        <h1 className='w-full text-4xl font-bold'>Pie Chart Data</h1>
        <IoIosArrowBack onClick={() => handleSectionSelect("Dashboard")} size={25} className="absolute top-[50%] -translate-y-[50%] left-0 cursor-pointer" />
      </div>
      <div className='h-full w-[70%] flex-center justify-center items-center mt-6 p-6 max-lg:flex-col gap-4 bg-white rounded-xl shadow-lg'>
        <div className='flex-center flex-[3]'>
          <PieChart
            className='relative w-[75%]'
            data={CreateArrayForPie({ data })}
          />
        </div>
        <section className='flex-center flex-col text-left gap-3 text-sm flex-[1]'>
          {data.map((item, index) => (
            <div key={index} className='flex justify-start items-center w-full gap-1'>
              <div className={`w-6 h-6 rounded-md`} style={{ backgroundColor: `${item.color}` }} />
              <p>{item.title}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}