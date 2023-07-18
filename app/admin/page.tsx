"use client"

import '@/app/admin/admin.css'

import React, { useState, createContext } from 'react'
import { AdminSidebar, TitleTextCard, PieChartCard, BarChartCard, DataListCard, TopScorersList, PieChartPage, AddQuestionForm } from '@/app/components/admin-components'
// import { AdminSidebar, TitleTextCard, PieChartCard, Card3, Card4 } from './components'
import { BarChartData, PieChartData, TextCardData, TopScorersData } from '@/constants/data'
import AdminDashboard from '@/app/components/admin-components/AdminDashboard'
import BarChartPage from '../components/admin-components/BarChartPage'

export interface DashboardContextValues {
  section: string;
  handleSectionSelect: (section: string) => void;
}
export const DashboardContext = React.createContext<DashboardContextValues | undefined>(undefined);

export default function Page() {

  const [section, setSection] = useState("Dashboard");

  function handleSectionSelect(section: string) {
    setSection(section);
  }

  return (
    <>
      <DashboardContext.Provider value={{ section, handleSectionSelect }}>
        <AdminSidebar />
        <div className="md:ml-48 text-center flex-col items-start lg:flex-row text-[#1f1f1f] bg-gray-200 h-full flex-center rounded-3xl shadow-lg">
        {section === "Dashboard" ?
          <AdminDashboard /> :
          section === "Score Distribution" ?
            <PieChartPage data={PieChartData}/> :
          section === "Top Scorers" ?
            <TopScorersList data={TopScorersData} /> :
          section === "Distribution" ?
            <BarChartPage labels={BarChartData.labels} datasets={BarChartData.datasets} /> :
          section === "Add Question" ?
            <AddQuestionForm /> :
          null
        }
        </div>
      </DashboardContext.Provider>
    </>
  )
}