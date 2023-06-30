import { QuizDatabase } from '@/constants/data'
import QuestionContainer from './components/QuestionContainer'

export default function Page() {
  return (
    <QuestionContainer data={QuizDatabase} />
  )
}