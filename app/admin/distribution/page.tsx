"use client"

import '@/app/admin/admin.css'
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

export default function Page() {
  Chart.register(...registerables);

  return (
    <div className='w-full h-full'>
      <h1 className="text-[#1f1f1f] text-center text-5xl font-bold">Distribution</h1>
      <div className="text-center flex-col md:flex-row text-[#1f1f1f] bg-gray-200 h-full md:h-[80vh] flex-center items-start rounded-3xl shadow-lg p-10">
        <Bar
          data={{
            labels: ["Cloud", "UI/UX", "AI/ML", "Software"],
            datasets: [{
              backgroundColor: 'rgb(50,188,222)',
              borderRadius: 10,
              barPercentage: 1,
              barThickness: 100,
              maxBarThickness: 100,
              minBarLength: 10,
              label: "No. of Candidates",
              data: [20, 24, 18, 19]
            }],
          }}
        />
      </div>
    </div>
  )
}