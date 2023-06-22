export interface TitleProps {
  mainTitle: string,
}

export interface TextCardProps {
  data: TextCard[],
}
export interface TextCard {
  amount: number,
  title: string,
}

export interface PieChartProps{
  data: PieChartItem[],
}
export interface PieChartItem {
  title: string,
  amount: number,
  color: string,
}

export interface TopScorersProps {
  data: TopScorers[],
}
export interface TopScorers {
  position: number,
  name: string,
  applied: string,
  quiz: string,
  percentage: number,
}

export interface BarChartProps{
  labels: string[],
  datasets: {
    label: string,
    dataValues: number[],
  },
}
// export interface BarCharDatasets{
//   label: string,
//   data: number[],
// }

export interface QuizDetailsProps{
  data: QuizDetails[],
}
export interface QuizDetails{
  title: string,
  questions: number,
  time: number,
  difficulty: string,
  topics: string[],
}

export interface MarksPieChartProps{
  data: MarksPieChart[],
}

export interface MarksPieChart{
  value: number,
  total: number,
  title: string,
  color: string,
}

export interface QuizSidebarQuestionsProps{
  data: QuizSidebarQuestions[],
}
export interface QuizSidebarQuestions{
  questionNumber: number,
  status: string,
}

export interface McqQuestionProps{
  questionNumber: number,
  question: string,
  options: string[],
}

export interface QuizLiveStatsQuestionData{
  title: string,
  value: number,
  total: number,
}
export interface QuizLiveStatsProps{
  time: {
    minutes: number,
    seconds: number,
  },
  questionData: QuizLiveStatsQuestionData[],
}
