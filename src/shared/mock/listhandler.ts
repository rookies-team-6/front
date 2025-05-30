// src/shared/mock/listhandler.ts

import { http, HttpResponse } from "msw";

interface Answer {
  id: number;
  title: string;
  content: string;
  date: string;
  score: number;
}

const mockAnswers: Answer[] = [
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
];

export const listHandler = [
  http.get("/api/getmyanswers", () => {
    return HttpResponse.json(mockAnswers, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),
];
