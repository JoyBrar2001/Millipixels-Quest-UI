import { TopScorersData } from '@/constants/data'
import '@/app/admin/admin.css'
import { TopScorersList } from '@/app/components/admin-components'

export default function Page() {
  return (
    <div className='w-full h-full'>
      <h1 className="text-[#1f1f1f] text-center text-5xl font-bold">Top Scorers</h1>
      <div className="text-center flex-col md:flex-row text-[#1f1f1f] bg-gray-200 h-full md:min-h-[90vh] flex-center items-start rounded-3xl shadow-lg">
        <TopScorersList data={TopScorersData} />
      </div>
    </div>
  )
}