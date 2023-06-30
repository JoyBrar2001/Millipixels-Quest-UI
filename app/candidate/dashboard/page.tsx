import { MarksPieChartData } from '@/constants/data'
import { MarksPieChart, OverallPieChart } from '@/app/components/candidate-components'

export default function Page(){
    return(
        <div className="text-center text-[#1f1f1f] bg-gray-200 h-full md:min-h-[90vh] rounded-3xl shadow-lg p-10 gap-10">
            <h1 className='text-5xl font-bold my-2'>Javascript Quiz Results</h1>
            <MarksPieChart data={MarksPieChartData} />
            <OverallPieChart data={MarksPieChartData} />
        </div>
    )
}