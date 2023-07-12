import React from 'react'
import { AdminSidebar, TitleTextCard, PieChartCard, BarChartCard, DataListCard } from '@/app/components/admin-components'
import { BarChartData, PieChartData, TextCardData, TopScorersData } from '@/constants/data'
import { AdminDashboardInterface, AdminSidebarProps } from '@/Interfaces'
import { DashboardContext } from '@/app/admin/page'

const AdminDashboard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 py-4 px-8">
      <h1 className='md:col-span-2 lg:col-span-3 text-2xl md:text-4xl lg:text-5xl font-bold'>Admin Dasboard</h1>
      <TitleTextCard data={TextCardData} />
      <PieChartCard data={PieChartData} />
      <BarChartCard labels={BarChartData.labels} datasets={BarChartData.datasets} />
      <DataListCard data={TopScorersData} />
    </div>
  )
}

export default AdminDashboard
