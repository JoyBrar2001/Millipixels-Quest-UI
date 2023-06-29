import { DraggableQuestionData, McqQuestionData, QuizDatabase, QuizLiveStats, QuizSidebarData, TextQuestionData } from '@/constants/data'
import LiveStats from './components/LiveStats'
import TextQuestion from './components/TextQuestion'
import DraggableQuestion from './components/DraggableQuestion'
import McqQuestion from './components/McqQuestion'
import { BsChevronDoubleLeft, BsChevronLeft, BsChevronRight, BsChevronDoubleRight } from 'react-icons/bs'
import Pagination from './components/Pagination'
import Sidebar from './sidebar'
import QuestionContainer from './components/QuestionContainer'

export default function Page() {
  return (
    <QuestionContainer data={QuizDatabase} />
  )
}