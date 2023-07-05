import { MarksPieChartData } from '@/constants/data'
import { MarksPieChart, OverallPieChart } from '@/app/components/candidate-components'

export default function Page() {
    return (
        <div className="text-center text-[#1f1f1f] bg-gray-200 h-full md:min-h-[90vh] mt-14 rounded-3xl shadow-lg p-10 gap-10">
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold my-2'>Javascript Quiz Results</h1>
            <div className='flex-center max-md:flex-col max-md:gap-8 mt-10'>
                <MarksPieChart data={MarksPieChartData} />
                <OverallPieChart data={MarksPieChartData} />
            </div>
        </div>
    )
}