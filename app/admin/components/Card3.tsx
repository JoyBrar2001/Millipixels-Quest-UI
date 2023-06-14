import '../admin.css';

import { BsArrowUpRight } from 'react-icons/bs';
import Chart from 'react-apexcharts'

export default function Card3() {

  const state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  };

  return (
    <div className='flex-center gap-4 bg-white p-10 rounded-xl h-full w-full shadow-lg'>
      <div className='relative w-full border-b-[1px] border-b-[#1f1f1f99]'>
        <h1 className="text-lg font-bold">Distribution</h1>
        <BsArrowUpRight className="absolute top-1.5 left-1.5" />
        {/* <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="500"
        /> */}

        
      </div>
    </div>
  )
}