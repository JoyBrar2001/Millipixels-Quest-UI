'use client';

import { type } from 'os';

interface marksdata {
  type: string,
  marks: number,
  color: string,
}

const correct: marksdata = {
  type: 'correct',
  marks: 24,
  color: '#4ade80',
}

const incorrect: marksdata = {
  type: 'incorrect',
  marks: 2,
  color: '#ef4444',
}

const unanswered: marksdata = {
  type: 'unanswered',
  marks: 4,
  color: '#f59e0b',
}

const data: marksdata[] = [
  correct, incorrect, unanswered
];
let index: number = 0;

// { type:string, marks:number, color:string }

const CreateGraph = ({ }) => (
  <div className='w-[160px]'>
    <div className='skill w-[160px] h-[160px] relative'>
      <div className={`h-full w-full rounded-full flex justify-center items-center`} style={{ boxShadow: `0px 10px 30px ${data[index].color}66` }}>
        <div className='h-[80%] w-[80%] rounded-full shadow-lg flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold'>{data[index].marks}<span className='text-base font-light'>/30</span></h1>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
        <circle cx="80" cy="80" r="70" stroke-linecap="round" style={{ stroke: data[index].color}} />
      </svg>
    </div>
    <h1 className='text-center text-xl capitalize mt-5'>{data[index++].type}</h1>
  </div>
)

const CreateOverallCard = ({ }) => {

  const percentage:number = (data[0].marks - data[1].marks)/30*100;
  const displayPercentage:string = percentage.toFixed(2);

  return (
    <div className='w-[260px]'>
      <div className='skill w-[260px] h-[260px] relative'>
        <div className={`h-full w-full rounded-full flex justify-center items-center`} style={{ boxShadow: `0px 10px 30px #00000044` }}>
          <div className='h-[80%] w-[80%] rounded-full flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold'>{displayPercentage}<span className='text-2xl font-medium'>%</span></h1>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="260px" height="260px">
          <circle cx="130" cy="130" r="120" stroke-linecap="round" style={{ stroke: '#000000DD', strokeDasharray: '700', strokeDashoffset: '700' }} />
        </svg>
      </div>
    </div>
  )
}

const MainDashboard = () => {
  return (
    <div className='py-10 px-16'>
      <h1 className='text-3xl md:text-4xl font-bold mb-6'>Your Scores</h1>
      <div className='flex flex-col bg-gray-100 p-6 rounded-2xl shadow-xl justify-center items-center'>
        <h1 className='text-5xl font-bold'>Web Developement Quiz</h1>
        <div className='flex flex-wrap justify-center items-center mt-10 gap-24'>
          {data.map((element, index) => (
            <CreateGraph key={index} />
          ))}
        </div>
        <div className='w-full flex flex-col gap-6 justify-center items-center mt-12'>
          <CreateOverallCard />
          <h1 className='text-4xl font-bold'>Overall Score</h1>
        </div>
      </div>

    </div>
  )
}

export default MainDashboard
