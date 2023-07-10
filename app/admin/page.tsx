"use client"

import '@/app/admin/admin.css'

import React, { useState } from 'react'
import { AdminSidebar, TitleTextCard, PieChartCard, BarChartCard, DataListCard, TopScorersList } from '@/app/components/admin-components'
// import { AdminSidebar, TitleTextCard, PieChartCard, Card3, Card4 } from './components'
import { BarChartData, PieChartData, TextCardData, TopScorersData } from '@/constants/data'
import AdminDashboard from '@/app/components/admin-components/AdminDashboard'

export default function Page() {

  const [option, setOption] = useState("Dashboard");

  function handleOptionSelect(option:string){
    setOption(option);
  }

  return (
    <>
      <AdminSidebar activeOption={option} onOptionSelect={handleOptionSelect}/>
      <div className="md:ml-48 text-center flex-col items-start lg:flex-row text-[#1f1f1f] bg-gray-200 h-full md:min-h-[90vh] flex-center rounded-3xl shadow-lg">
        {option === "Dashboard" ?
          <AdminDashboard /> : 
          option === "Top Scorers" ? 
          <TopScorersList data={TopScorersData} /> :
          option === "Distribution" ? 
          <BarChartCard labels={BarChartData.labels} datasets={BarChartData.datasets} />:
          option === "Score Distribution" ? 
          <PieChartCard data={PieChartData} /> :
          null          
        }
      </div>
    </>
  )
}