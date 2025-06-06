import { http, HttpResponse } from "msw";
import { myMockAnswers, teamMockAnswers } from "@shared/mock/dataList";

const bookmarkedState: { [id: number]: boolean } = {};

interface Question {
  id: number;
  title: string;
  content: string;
}

interface SubmitBody {
  answer: string;
}

interface LoginRequestBody {
  email: string;
  password: string;
}

interface RegisterFormContent {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface HeaderInfo {
  userId: number;
  name: string;
  employeeType: string;
  personalScore: string;
  groupNum: number;
}

interface ScoreItem {
  groupNum: number;
  groupScore: number;
}

interface EmployeeInfo {
  employeeNumber: string;
  employeeName: string;
}

export const handler = [
  // List 컴포넌트
  http.get("/api/questions/me", () => {
    return HttpResponse.json(myMockAnswers);
  }),

  // /api/home 핸들러 (개인 정보 + 그룹 점수)
  http.get("/api/home", () => {
    const user = {
      userId: 5,
      name: "홍길동",
      groupNum: 2,
      employeeType: "TRAINEE",
      personalScore: 20,
    };

    const groupScores: ScoreItem[] = [
      { groupNum: 1, groupScore: 100 },
      { groupNum: 2, groupScore: 95 },
      { groupNum: 3, groupScore: 88 },
      { groupNum: 4, groupScore: 92 },
      { groupNum: 5, groupScore: 75 },
      { groupNum: 6, groupScore: 100 },
      { groupNum: 7, groupScore: 80 },
      { groupNum: 8, groupScore: 100 },
      { groupNum: 9, groupScore: 95 },
      { groupNum: 10, groupScore: 88 },
      { groupNum: 11, groupScore: 92 },
      { groupNum: 12, groupScore: 75 },
      { groupNum: 13, groupScore: 100 },
      { groupNum: 14, groupScore: 80 },
    ];

    return HttpResponse.json(
      {
        success: true,
        code: 200,
        data: {
          user,
          groupScores,
        },
        message: "홈 정보 조회 성공",
        timestamp: new Date().toISOString(),
        requestId: "mock-home-req-id",
      },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }),

  // 북마크 GET
  http.get("/api/record/bookmarked", () => {
    const bookmarkedIds = Object.entries(bookmarkedState)
      .filter(([_, marked]) => marked)
      .map(([id]) => Number(id));

    const bookmarkedData = myMockAnswers.filter((item) =>
      bookmarkedIds.includes(item.id)
    );

    return HttpResponse.json(bookmarkedData);
  }),

  // 북마크 POST
  http.post("/api/record/bookmarked", async ({ request }) => {
    const body = (await request.json()) as { id: number };
    const { id } = body;
    bookmarkedState[id] = !bookmarkedState[id];

    return HttpResponse.json({
      success: true,
      data: {
        id,
        bookMarked: bookmarkedState[id],
      },
    });
  }),

// handler.ts 안에 있는 /api/home 핸들러 수정
http.get("/api/home", () => {
  const user = {
    userId: 5,
    name: "홍길동",
    groupNum: 2,
    employeeType: "TRAINEE",
    personalScore: 20,
  };

  return HttpResponse.json(
    {
      success: true,
      code: 200,
      data: {
        user
      },
      message: "홈 정보 조회 성공",
      timestamp: new Date().toISOString(),
      requestId: "mock-home-req-id",
    },
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}),


  // 로그인
  http.post("/auth/signin", async ({ request }) => {
    const body = (await request.json()) as LoginRequestBody;
    return HttpResponse.json(
      {
        success: true,
        token: "mock-jwt-token",
        email: body.email,
        message: "로그인 성공",
      },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }),

  // 회원가입
  http.post("/api/registerforms", async ({ request }) => {
    const body = (await request.json()) as RegisterFormContent;
    return HttpResponse.json(
      {
        token: "mock-jwt-token",
        email: body.email,
        message: "회원가입 성공",
      },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }),

  // 사원번호 조회
  http.get("/auth/verify", () => {
    const mockEmployee: EmployeeInfo = {
      employeeNumber: "12345678",
      employeeName: "홍길동",
    };

    return HttpResponse.json(
      {
        success: true,
        code: 200,
        data: mockEmployee,
        message: "조회 성공",
        timestamp: new Date().toISOString(),
        requestId: "mocked-request-id",
      },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }),

  // 질문 전체 조회 예시
  http.get("/api/questions", () => {
    const questions: Question[] = [
      { id: 1, title: "모의 질문 1", content: "내용 1" },
      { id: 2, title: "모의 질문 2", content: "내용 2" },
    ];
    return HttpResponse.json(questions, {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }),

  // 내 답변
  http.get("/api/getmyanswers", () => {
    return HttpResponse.json(myMockAnswers, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),

  // 조별 답변
  http.get("/api/team-answers/:team", ({ params }) => {
    const resData = params.team === "1" ? teamMockAnswers : { data: "None" };
    return HttpResponse.json(resData, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),

  // 답변 디테일
  http.get("/api/answer/:id", ({ params }) => {
    return HttpResponse.json({
      data: {
        content: "답변 정리 1",
      },
    });
  }),

  // 질문 디테일
  http.get("/api/questions/:id", ({ params }) => {
    return HttpResponse.json({
      data: {
        title: "질문제목퉤스트트",
        content: "내용내용내용용내용이 겁나 길어요요오오ㅗㅇ오오오",
      },
    });
  }),

  // 게시판
  http.get("/api/board?page=0&size=10", async () => {
    const result = [
      {
        id: "ttt",
        number: 1,
        category: "test",
        title: "테스트",
        date: "2025-06-04",
        author: "조우성",
      },
    ];
    return HttpResponse.json(result, {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }),

  // 답변 제출
  http.post("/api/answer", async ({ request }) => {
    const body = (await request.json()) as SubmitBody;
    return HttpResponse.json(body, {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }),
];