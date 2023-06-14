import '../admin.css';

import Link from 'next/link';
import { TopScorersProps } from '@/Interfaces';
import { BsArrowUpRight } from 'react-icons/bs';

export default function Card4({ data }: TopScorersProps) {
  const cutOutData = data.slice(0,4)

  return (
    <div className="bg-white col-span-2 h-full p-10 rounded-lg shadow-xl">
      <div className='relative w-full border-b-[1px] border-b-[#1f1f1f99]'>
        <h1 className="text-lg font-bold">Top Scorers</h1>
        <Link href="/admin/topscorers">
          <BsArrowUpRight className="absolute top-1.5 left-1.5" />
        </Link>
      </div>
      <div className='flex flex-col gap-4 mt-6'>
        {cutOutData.map(item => (
          <div className="grid grid-cols-6">
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