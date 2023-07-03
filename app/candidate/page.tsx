import '@/app/candidate/candidate.css'
import { CandidateTestCards } from '@/app/components/candidate-components'
import { QuizDetailsData } from '@/constants/data'

export default function Page() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 text-center text-[#1f1f1f] bg-gray-200 h-full md:min-h-[90vh] rounded-3xl shadow-lg p-10 gap-10 mt-10">
            <h1 className='md:col-span-2 text-3xl md:text-4xl lg:text-5xl font-bold my-2'>Pending Quizzes</h1>
            <CandidateTestCards data={QuizDetailsData} />
        </div>
    )
}