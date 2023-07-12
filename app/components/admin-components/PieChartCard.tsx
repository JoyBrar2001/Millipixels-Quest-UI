"use client";

import '@/app/admin/admin.css'

import { PieChartProps, PieChartItem } from '@/Interfaces';
import { PieChart } from 'react-minimal-pie-chart';
import { BsArrowUpRight } from 'react-icons/bs';
import { DashboardContext } from '@/app/admin/page';
import { useContext } from 'react';

export default function PieChartCard({ data }: PieChartProps) {

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
    <>
      <div className='flex-center justify-center items-center flex-col gap-4 bg-white rounded-xl h-full w-full shadow-lg p-8'>
        <div className='relative w-full border-b-[1px] border-b-[#1f1f1f99]'>
          <h1 className="text-lg font-bold">Scores</h1>
          <BsArrowUpRight onClick={() => { handleSectionSelect("Score Distribution") }} className="absolute top-1.5 left-1.5 cursor-pointer" />
        </div>

        <div className='flex-center gap-4'>

          <div className='flex-center w-full flex-[1]'>
            <PieChart
              className='relative w-full'
              data={CreateArrayForPie({ data })}
            />
          </div>
          <section className='flex-center flex-col text-left gap-3 text-sm flex-[1]'>
            {data.map((item, index) => (
              <div key={index} className='flex justify-start items-center w-full gap-1'>
                <div className={`w-[24px] h-[24px] rounded-md`} style={{ backgroundColor: `${item.color}` }} />
                <p>{item.title}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  )
}