import { QuizDatabase } from '@/constants/data'
import { QuestionContainer } from '@/app/components/candidate-components'

export default function Page() {
  return (
    <QuestionContainer data={QuizDatabase} />
  )
}