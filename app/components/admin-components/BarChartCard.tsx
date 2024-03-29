"use client"

import '@/app/admin/admin.css';

import { BsArrowUpRight } from 'react-icons/bs';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { BarChartProps } from '@/Interfaces';
import Link from 'next/link';
import { useContext } from 'react';
import { DashboardContext } from '@/app/admin/page';

export default function BarChartCard( { labels, datasets }: BarChartProps ) {
  Chart.register(...registerables);

  const context = useContext(DashboardContext);
  if(!context){
    return null;
  }
  const { section, handleSectionSelect } = context;

  return (
    <div className='flex-center justify-start flex-col gap-4 bg-white p-10 rounded-xl h-full w-full shadow-lg'>
      <div className='relative w-full border-b-[1px] border-b-[#1f1f1f99]'>
        <h1 className="text-lg font-bold">Distribution</h1>
          <BsArrowUpRight onClick={() => handleSectionSelect("Distribution")} className="absolute top-1.5 left-1.5 cursor-pointer" />
      </div>
      <div className="flex-center">

        {/* Bar Chart */}
        <Bar
          data={{
            labels: labels,
            datasets: [{
              backgroundColor: 'rgb(50,188,222)',
              borderRadius: 5,
              barPercentage: 1,
              barThickness: 30,
              maxBarThickness: 50,
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