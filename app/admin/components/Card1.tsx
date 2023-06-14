import '../admin.css';

import { TextCardProps } from '@/Interfaces';

export default function Card1({ data }: TextCardProps) {
    return (
        <div className="bg-white col-span-2 h-full grid grid-cols-3 p-10 rounded-lg gap-6 shadow-xl">
            {data.map(item => (
                <div className="card1__card__styles hover:card1__card__styles-hover hover:blue__gradient transition-150">
                    <h1 className="text-5xl font-bold">{item.amount}</h1>
                    <p className="text-base font-light">{item.title}</p>
                </div>
            ))}
        </div>
    )
}