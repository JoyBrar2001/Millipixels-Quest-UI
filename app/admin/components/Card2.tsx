"use client";

import '../admin.css';
import { PieChart } from 'react-minimal-pie-chart';

export default function Card2() {
    return (
        <div className='flex-center bg-white rounded-xl h-full w-full'>
            <PieChart
                className='relative w-[60%]'
                data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]}
            />;
        </div>
    )
}