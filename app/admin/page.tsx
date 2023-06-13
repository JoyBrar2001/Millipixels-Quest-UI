import './admin.css'

import AdminSidebar from './components/AdminSidebar'
import Card1 from './components/Card1'
import Card2 from './components/Card2'

export default function Page() {
  return (
    <div className="text-center flex-col md:flex-row text-[#1f1f1f] bg-gray-200 h-full md:min-h-[90vh] flex-center rounded-3xl shadow-lg">
      <div className="flex-center flex-col gap-2 flex-[1] w-full px-10 border-r-[1px] border-black">
        <AdminSidebar />
      </div>
      <div className="flex-[3] lg:flex-[4] grid grid-cols-3 justify-center items-center gap-8 py-4 px-8">
        <Card1 />
        <Card2 />
      </div>
    </div>
  )
}