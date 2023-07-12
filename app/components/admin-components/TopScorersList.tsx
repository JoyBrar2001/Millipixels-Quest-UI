import '@/app/admin/admin.css'
import { DashboardContext } from '@/app/admin/page';

import { TopScorersPageProps, TopScorersProps } from "@/Interfaces"
import { useContext } from 'react';
import { IoIosArrowBack } from 'react-icons/io'

const TopScorersList = ({ data }: TopScorersPageProps) => {
  
  const context = useContext(DashboardContext);
  if(!context){
    return null;
  }
  const { section, handleSectionSelect } = context;

  return (
    <div className="w-full p-10 flex flex-col justify-start gap-3">
      <div className='relative w-full pb-2'>
        <h1 className='w-full text-4xl font-bold'>Top Scorers</h1>
        <IoIosArrowBack onClick={() => handleSectionSelect("Dashboard")} size={25} className="absolute top-[50%] -translate-y-[50%] left-0 cursor-pointer" />
      </div>

      <div className="col-span-12 grid grid-cols-12 w-full justify-center items-center mt-6 border-b-2 border-b-[#1f1f1f] mb-6">
        <h1 className="col-span-1 text-2xl font-bold">S.No</h1>
        <h1 className="col-span-4 text-2xl font-bold">Name</h1>
        <h1 className="col-span-3 text-2xl font-bold">Applied For</h1>
        <h1 className="col-span-3 text-2xl font-bold">Quiz Taken</h1>
        <h1 className="col-span-1 text-2xl font-bold">Score</h1>
      </div>
      {data.map((item, index) => (
        <div className="col-span-12 grid grid-cols-12 w-full justify-center items-center" key={index}>
          <p className="col-span-1 text-lg font-medium">{item.position}.</p>
          <p className="col-span-4 text-lg font-medium">{item.name}</p>
          <p className="col-span-3 text-lg font-medium">{item.applied}</p>
          <p className="col-span-3 text-lg font-medium">{item.quiz}</p>
          <p className="col-span-1 text-lg font-medium">{item.percentage}%</p>
        </div>
      ))}
    </div>
  )
}

export default TopScorersList
