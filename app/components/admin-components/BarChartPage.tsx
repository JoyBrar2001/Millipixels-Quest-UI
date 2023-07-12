"use client"

import '@/app/admin/admin.css';

import { IoIosArrowBack } from 'react-icons/io'
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { BarChartPageProps, BarChartProps } from '@/Interfaces';
import Link from 'next/link';
import { useContext } from 'react';
import { DashboardContext } from '@/app/admin/page';

export default function BarChartPage( { labels, datasets }: BarChartPageProps ) {
  Chart.register(...registerables);

  const context = useContext(DashboardContext);
  if(!context){
    return null;
  }
  const { section, handleSectionSelect } = context;

  return (
    <div className='flex-center justify-start flex-col gap-4 bg-white p-10 rounded-xl h-full w-full shadow-lg'>
      <div className='relative w-full border-b-[1px] border-b-[#1f1f1f99]'>
        <h1 className="text-4xl font-bold">Distribution</h1>
          <IoIosArrowBack onClick={() => handleSectionSelect("Dashboard")} size={25} className="absolute top-[50%] -translate-y-[50%] left-0 cursor-pointer" />
      </div>
      <div className="flex-center w-full h-[70vh]">

        {/* Bar Chart */}
        <Bar
          data={{
            labels: labels,
            datasets: [{
              backgroundColor: 'rgb(50,188,222)',
              borderRadius: 5,
              barPercentage: 1,
              barThickness: 70,
              maxBarThickness: 90,
              minBarLength: 10,


              label: datasets.label,
              data: datasets.dataValues,
            }],
          }}
        />


      </div>
    </div>
  )
}