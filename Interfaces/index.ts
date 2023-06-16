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
  datasets: BarCharDatasets[],
}
export interface BarCharDatasets{
  label: string,
  data: number[],
}

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