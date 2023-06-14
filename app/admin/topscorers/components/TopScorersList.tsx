import { TopScorersProps } from "@/Interfaces"


const TopScorersList = ({ data }: TopScorersProps) => {
  return (
    <div className="w-full p-10 flex flex-col gap-3">
      <div className="col-span-12 grid grid-cols-12 w-full justify-center items-center border-b-2 border-b-[#1f1f1f] mb-6">
        <h1 className="col-span-1 text-2xl font-bold">S.No</h1>
        <h1 className="col-span-4 text-2xl font-bold">Name</h1>
        <h1 className="col-span-3 text-2xl font-bold">Applied For</h1>
        <h1 className="col-span-3 text-2xl font-bold">Quiz Taken</h1>
        <h1 className="col-span-1 text-2xl font-bold">Score</h1>
      </div>
      {data.map(item => (
        <div className="col-span-12 grid grid-cols-12 w-full justify-center items-center">
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
