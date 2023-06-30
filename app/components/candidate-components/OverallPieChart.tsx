"use client"

import { MarksPieChartProps } from '@/Interfaces';
import { PieChart } from "react-minimal-pie-chart"

const OverallPieChart = ({ data }: MarksPieChartProps) => {

  const calculateOverallScore = () => {
    const OverallPercentage = ((data[0].value - data[1].value) / data[0].total) * 100;
    return OverallPercentage;
  }

  let OverallPercentage = calculateOverallScore()

  return (
    <div className='w-full flex-center flex-col'>
      <div className='w-[30%] relative'>

        <PieChart
          className="relative"
          data={[
            { title: "Overallpercentage", value: OverallPercentage, color: OverallPercentage > 66 ? "#4ADE80" : OverallPercentage > 33 ? "#F59E0B" : "#EF4444" },
            { title: "Null", value: 100 - OverallPercentage, color: "#FFFFFF" },
          ]}
        />

        <div className='bg-white flex-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[75%] h-[75%] rounded-full'>
          <h1 className="text-5xl font-bold">{OverallPercentage.toFixed(2)}<span className='text-2xl'>%</span></h1>
        </div>
      </div>
        <h1 className="text-2xl font-semibold">Overall Score</h1>
    </div>
  )
}

export default OverallPieChart
