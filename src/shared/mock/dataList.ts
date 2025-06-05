interface Answer {
  id: number;
  title: string;
  content: string;
  date: string;
  score: number;
}

// ✅ 북마크된 답변 mock
const bookmarkedAnswers: Answer[] = [
  {
    id: 1,
    title: "비밀번호 안전 관리",
    content: "복잡하고 고유한 비밀번호를 사용합니다.",
    date: "2025.12.12",
    score: 9,
  },
  {
    id: 2,
    title: "2단계 인증",
    content: "2단계 인증으로 계정을 보호할 수 있어요.",
    date: "2025.12.13",
    score: 8,
  },
];

// ✅ 내 답변 mock
const myMockAnswers: Answer[] = [
  {
    id: 1,
    title: "모의 질문 1",
    content: "제생각에는 너무힘든것같은기분이드는것같은기분이드는것같기도하고고",
    date: "2025.12.12",
    score: 9,
  },
  {
    id: 2,
    title: "모의 질문 2",
    content: "제생각에도 힘든것같습니다. 하지만 다정한 프론트분들과 힘내어보겠습니다람쥐한마리리",
    date: "2025.12.13",
    score: 8,
  },
    {
    id: 3,
    title: "모의 질문 1",
    content: "제생각에는 너무힘든것같은기분이드는것같은기분이드는것같기도하고고",
    date: "2025.12.12",
    score: 9,
  },
  {
    id: 4,
    title: "모의 질문 2",
    content: "제생각에도 힘든것같습니다. 하지만 다정한 프론트분들과 힘내어보겠습니다람쥐한마리리",
    date: "2025.12.13",
    score: 8,
  },
    {
    id: 5,
    title: "모의 질문 1",
    content: "제생각에는 너무힘든것같은기분이드는것같은기분이드는것같기도하고고",
    date: "2025.12.12",
    score: 9,
  },
  {
    id: 6,
    title: "모의 질문 2",
    content: "제생각에도 힘든것같습니다. 하지만 다정한 프론트분들과 힘내어보겠습니다람쥐한마리리",
    date: "2025.12.13",
    score: 8,
  },
    {
    id: 7,
    title: "모의 질문 1",
    content: "제생각에는 너무힘든것같은기분이드는것같은기분이드는것같기도하고고",
    date: "2025.12.12",
    score: 9,
  },
  {
    id: 8,
    title: "모의 질문 2",
    content: "제생각에도 힘든것같습니다. 하지만 다정한 프론트분들과 힘내어보겠습니다람쥐한마리리",
    date: "2025.12.13",
    score: 8,
  }
];

// ✅ 조별 답변 mock
const teamMockAnswers: Answer[] = [
  {
    id: 1,
    title: "조별 질문 1",
    content: "주말에도도",
    date: "2025.12.12",
    score: 88,
  },
  {
    id: 2,
    title: "조별 질문 2",
    content: "열심히히",
    date: "2025.12.13",
    score: 92,
  },
   {
    id: 3,
    title: "조별 질문 1",
    content: "아하하하하",
    date: "2025.12.12",
    score: 88,
  },
  {
    id: 4,
    title: "조별 질문 2",
    content: "즐거워요요",
    date: "2025.12.13",
    score: 92,
  },
   {
    id: 5,
    title: "조별 질문 1",
    content: "즐거워서 미춰버리겠어요",
    date: "2025.12.12",
    score: 88,
  },
  {
    id: 6,
    title: "조별 질문 2",
    content: "우리 조는 이렇게 생각했어요.",
    date: "2025.12.13",
    score: 92,
  },
   {
    id: 7,
    title: "조별 질문 1",
    content: "조 평균 응답입니다.",
    date: "2025.12.12",
    score: 88,
  },
  {
    id: 8,
    title: "조별 질문 2",
    content: "우리 조는 이렇게 생각했어요.",
    date: "2025.12.13",
    score: 92,
  },
];

export {myMockAnswers, teamMockAnswers, bookmarkedAnswers};