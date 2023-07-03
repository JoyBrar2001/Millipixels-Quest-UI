import '@/app/admin/admin.css'

import { AdminSidebar, TitleTextCard, PieChartCard, BarChartCard, DataListCard } from '@/app/components/admin-components'
// import { AdminSidebar, TitleTextCard, PieChartCard, Card3, Card4 } from './components'
import { BarChartData, PieChartData, TextCardData, TopScorersData } from '@/constants/data'

export default function Page() {
  return (
    <div className="text-center flex-col lg:flex-row text-[#1f1f1f] bg-gray-200 h-full md:min-h-[90vh] flex-center rounded-3xl shadow-lg">
      <div className="flex-center flex-col gap-2 flex-[1] w-full px-10 max-lg:border-b-[1px] py-4 lg:border-r-[1px] border-black">
        <AdminSidebar />
      </div>
      <div className="lg:flex-[4] grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 py-4 px-8">
        <h1 className='md:col-span-2 lg:col-span-3 text-2xl md:text-4xl lg:text-5xl font-bold'>Admin Dasboard</h1>
        <TitleTextCard data={TextCardData} />
        <PieChartCard data={PieChartData}/>
        <BarChartCard labels={BarChartData.labels} datasets={BarChartData.datasets}/>
        <DataListCard data={TopScorersData}/>
      </div>
    </div>
  )
}