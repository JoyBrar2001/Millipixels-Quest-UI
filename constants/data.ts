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
];

export const BarChartData = {
  labels: ["Cloud", "UI/UX", "AI/ML", "Software", "Manager"],
  datasets: {
    label: "No. of Candidates",
    dataValues: [20, 24, 18, 19, 20]
  },
}

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

export const MarksPieChartData = [
  {
    value: 24,
    total: 30,
    title: "Correct",
    color: "#4ADE80",
  },
  {
    value: 2,
    total: 30,
    title: "Incorrect",
    color: "#EF4444",
  },
  {
    value: 4,
    total: 30,
    title: "Unattempted",
    color: "#F59E0B",
  },
];

export const QuizSidebarData = [
  {
    questionNumber: 1,
    status: "Answered",
  },
  {
    questionNumber: 2,
    status: "Answered",
  },
  {
    questionNumber: 3,
    status: "Answered",
  },
  {
    questionNumber: 4,
    status: "Answered",
  },
  {
    questionNumber: 5,
    status: "Answered",
  },
  {
    questionNumber: 6,
    status: "Visited",
  },
  {
    questionNumber: 7,
    status: "Marked",
  },
  {
    questionNumber: 8,
    status: "Marked",
  },
  {
    questionNumber: 9,
    status: "Visited",
  },
  {
    questionNumber: 10,
    status: "Unvisited",
  },
  {
    questionNumber: 11,
    status: "Unvisited",
  },
  {
    questionNumber: 12,
    status: "Unvisited",
  },
  {
    questionNumber: 13,
    status: "Unvisited",
  },
];


export const QuizLiveStats = {
  time: {
    minutes: 12,
    seconds: 42,
  },
  questionData: [
    {
      title: "Answered",
      value: 3,
      total: 10,
    },
    {
      title: "Visited",
      value: 1,
      total: 10,
    },
    {
      title: "Review",
      value: 2,
      total: 10,
    }
  ]
}



export const QuizDatabase = {
  title: "Javascript Quiz",
  totalQuestions: 10,
  questions: [
    {
      questionNo: 1,
      type: "MCQ",
      status: "Answered",
      question: "Which one of the following tags would we use to include JavaScript inside a HTML Document ?",
      options: ["Script", "Js", "Style", "Form"],
    },
    {
      questionNo: 2,
      type: "Textbox",
      status: "Answered",
      question: "Which one of the following tags would we use to include JavaScript inside a HTML Document ?",
      options: [],
    },
    {
      questionNo: 3,
      type: "Draggable",
      status: "Answered",
      question: "Which one of the following tags would we use to include JavaScript inside a HTML Document ?",
      options: ["Script", "Js", "Style", "Form"],
    },
    {
      questionNo: 4,
      type: "MCQ",
      status: "Marked",
      question: "Which one of the following tags would we use to include JavaScript inside a HTML Document ?",
      options: ["Script", "Js", "Style", "Form"],
    },
    {
      questionNo: 5,
      type: "Textbox",
      status: "Visited",
      question: "Which one of the following tags would we use to include JavaScript inside a HTML Document ?",
      options: [],
    },
    {
      questionNo: 6,
      type: "Draggable",
      status: "Marked",
      question: "Which one of the following tags would we use to include JavaScript inside a HTML Document ?",
      options: ["Script", "Js", "Style", "Form"],
    },
    {
      questionNo: 7,
      type: "MCQ",
      status: "Unvisited",
      question: "Which one of the following tags would we use to include JavaScript inside a HTML Document ?",
      options: ["Script", "Js", "Style", "Form"],
    },
    {
      questionNo: 8,
      type: "Textbox",
      status: "Unvisited",
      question: "Which one of the following tags would we use to include JavaScript inside a HTML Document ?",
      options: [],
    },
    {
      questionNo: 9,
      type: "Draggable",
      status: "Unvisited",
      question: "Which one of the following tags would we use to include JavaScript inside a HTML Document ?",
      options: ["Script", "Js", "Style", "Form"],
    },
    {
      questionNo: 10,
      type: "MCQ",
      status: "Unvisited",
      question: "Which one of the following tags would we use to include JavaScript inside a HTML Document ?",
      options: ["Script", "Js", "Style", "Form"],
    },
  ],
}