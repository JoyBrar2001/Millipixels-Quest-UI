"use client"

import { MarksPieChartProps } from "@/Interfaces"
import { PieChart } from "react-minimal-pie-chart"

const MarksPieChart = ({ data }: MarksPieChartProps) => {
  return (
    <div className="w-[80%] mx-auto grid grid-cols-3 gap-12 lg:px-10">
      {data.map((item, index) => (
        <div className="flex-center flex-col gap-4 p-10">
          <div className="relative">
            <PieChart
              className="relative"
              key={index}
              data={[
                { title: item.title, value: item.value, color: item.color },
                { title: "Total", value: item.total - item.value, color: "#FFFFFF" },
              ]}
            />
            <div className="absolute flex-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full bg-white h-[80%] w-[80%]">
              <h1 className="text-5xl font-bold">{item.value}<span className="text-xl font-normal">/{item.total}</span></h1>
            </div>
          </div>
          <h1 className="text-2xl font-semibold">{item.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default MarksPieChart
