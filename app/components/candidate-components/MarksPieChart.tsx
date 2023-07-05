"use client"

import { MarksPieChartProps } from "@/Interfaces"
import { PieChart } from "react-minimal-pie-chart"

const MarksPieChart = ({ data }: MarksPieChartProps) => {
  return (
    <div className="w-full mx-auto flex-center flex-wrap gap-6 md:gap-12 lg:px-10">
      {data.map((item, index) => (
        <div key={index} className="flex-center flex-col gap-2">
          <div className="relative">
            <PieChart
              className="relative w-[150px]"
              key={index}
              data={[
                { title: item.title, value: item.value, color: item.color },
                { title: "Total", value: item.total - item.value, color: "#FFFFFF" },
              ]}
            />
            <div className="absolute flex-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full bg-white h-[80%] w-[80%]">
              <h1 className="text-3xl font-bold">{item.value}<span className="text-lg font-normal">/{item.total}</span></h1>
            </div>
          </div>
          <h1 className="text-2xl font-semibold">{item.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default MarksPieChart
