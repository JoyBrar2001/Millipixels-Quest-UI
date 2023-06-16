export const TextCardData = [
  {
    amount: 25,
    title: "Candidates have finished the quiz",
  },
  {
    amount: 13,
    title: "Candidates quizzes are assigned to",
  },
  {
    amount: 9,
    title: "Candidates quizzes are yet to be assigned",
  },
];

export const PieChartData = [
  {
    title: "Satisfactory",
    amount: 25,
    color: "#4ADE80"
  },
  {
    title: "Somewhat Satisfactory",
    amount: 12,
    color: "#F59E0B"
  },
  {
    title: "Not Satisfactory",
    amount: 20,
    color: "#EF4444"
  },
  {
    title: "New",
    amount: 10,
    color: "#1f1f1f"
  },
];

export const TopScorersData = [
  {
    position: 1,
    name: "William Johnson",
    applied: "UI/UX Developer",
    quiz: "UI/UX - Figma",
    percentage: 89,
  },
  {
    position: 2,
    name: "Steve Rogers",
    applied: "Senior Developer",
    quiz: "Cloud Computing",
    percentage: 85,
  },
  {
    position: 3,
    name: "Clark Kent",
    applied: "Junior Developer",
    quiz: "AI/ML",
    percentage: 82,
  },
  {
    position: 4,
    name: "Thomas Wayne",
    applied: "Junior Developer",
    quiz: "Software Development",
    percentage: 78,
  },
  {
    position: 5,
    name: "Stan Lee",
    applied: "Junior Developer",
    quiz: "Manager",
    percentage: 75,
  },
  {
    position: 6,
    name: "Barry Allen",
    applied: "Graphic Designer",
    quiz: "Photoshop & Illustrator",
    percentage: 72,
  },
  {
    position: 7,
    name: "Natasha",
    applied: "UI/UX Developer",
    quiz: "UI/UX - Adobe Ps",
    percentage: 70,
  },
];


export interface QuizDetails{
  title: string,
  questions: number,
  time: number,
  difficulty: string,
  topics: [],
}

export const QuizDetailsData = [
  {
    title: "Javascript Quiz",
    questions: 30,
    time: 45,
    difficulty: "Intermediate",
    topics: ["DOM Manipulation", "Promise APIs", "Await Async Functions", "Components", "Etc."],
  },
  {
    title: "Python Quiz",
    questions: 45,
    time: 60,
    difficulty: "Easy",
    topics: ["Topic 1", "Topic 2", "Topic 3"],
  },
];