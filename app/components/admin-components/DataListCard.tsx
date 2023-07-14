import '@/app/admin/admin.css';

import Link from 'next/link';
import { TopScorersProps } from '@/Interfaces';
import { BsArrowUpRight } from 'react-icons/bs';
import { useContext } from 'react';
import { DashboardContext } from '@/app/admin/page';

export default function DataListCard({ data }: TopScorersProps,) {
  const context = useContext(DashboardContext);
  if(!context){
    return null;
  }
  const { section, handleSectionSelect } = context;

  const cutOutData = data.slice(0, 4)

  return (
    <div className="bg-white lg:col-span-2 h-full p-10 rounded-lg shadow-xl">
      <div className='relative w-full border-b-[1px] border-b-[#1f1f1f99]'>
        <h1 className="text-lg font-bold">Top Scorers</h1>
          <BsArrowUpRight onClick={() => handleSectionSelect("Top Scorers")} className="absolute top-1.5 left-1.5 cursor-pointer" />
      </div>
      <div className='flex flex-col gap-4 mt-6'>
        {cutOutData.map((item, index) => (
          <div key={index} className="grid grid-cols-6">
            <p>{item.position}.</p>
            <p className="col-span-2">{item.name}</p>
            <p className="col-span-2">{item.quiz}</p>
            <p>{item.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}