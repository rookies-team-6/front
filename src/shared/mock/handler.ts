import {http, HttpResponse} from "msw";
import { myMockAnswers, teamMockAnswers } from "@shared/mock/dataList";

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
  name: string;
  type: string;
  score: string;
}

interface ScoreItem {
  team: string;
  score: string;
}

interface EmployeeInfo {
  employeeNumber: string;
  employeeName: string;
}


export const handler = [
    //헤더
     http.get("/api/header", () => {
        const mockData: HeaderInfo = {
          name: "홍길동",
          type: "수강생",
          score: "점수: 00",
        };
    
        return HttpResponse.json(mockData, {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }),
    
    //로그인
    http.post("/api/login", async ({ request }) => {
        const body = (await request.json()) as LoginRequestBody;
    
        // 여기선 단순 mock 응답, 실제론 인증 로직에 따라 응답 구성
        return HttpResponse.json(
            {
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

    //회원가입
    http.post('/api/registerforms', async({request}) => {
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

    //조별 점수가져오기
    http.get("/api/scores", () => {
        const mockScoresData: ScoreItem[] = [
            { team: "1조", score: "100점" },
            { team: "2조", score: "95점" },
            { team: "3조", score: "88점" },
            { team: "4조", score: "92점" },
            { team: "5조", score: "75점" },
            { team: "6조", score: "100점" },
            { team: "7조", score: "80점" },
            { team: "8조", score: "100점" },
        { team: "9조", score: "95점" },
        { team: "10조", score: "88점" },
        { team: "11조", score: "92점" },
        { team: "12조", score: "75점" },
        { team: "13조", score: "100점" },
        { team: "14조", score: "80점" },
        ];
    
        return HttpResponse.json(mockScoresData, {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }),

    //사원번호 조회
    http.get("/api/emregister", () => {
        const mockEmployee: EmployeeInfo = {
        employeeNumber: "12345678",
        employeeName: "홍길동",
        };
    
        return HttpResponse.json(mockEmployee, {
        status: 200,
        headers: { "Content-Type": "application/json" },
        });
    }),

    //get요청 예시
    http.get('/api/questions', () => {
    const questions: Question[] = [
        { id: 1, title: '모의 질문 1', content: '내용 1' },
        { id: 2, title: '모의 질문 2', content: '내용 2' },
        ];
        return HttpResponse.json(questions, {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }),

      // 내 답변 요청 핸들러
    http.get("/api/getmyanswers", () => {
        return HttpResponse.json(myMockAnswers, {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
        });
    }),

    // 조별 답변 요청 핸들러
    http.get("/api/team-answers", () => {
        return HttpResponse.json(teamMockAnswers, {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
        });
    }),

    //답변 디테일 조회
    http.get('/api/answer/:id', ({ params }) => {
        return HttpResponse.json({
            data:{
                "content": "답변 정리 1"
            }
        }, {
        status: 200,
        });
    }),

    //질문 디테일 조회
    http.get('/api/question/:id', ({ params }) => {
        // const id = Number(params.id);
        // const question = questions.find((q) => q.id === id);

        // if (!question) {
        //   return HttpResponse.json({ message: '질문을 찾을 수 없습니다.' }, { status: 404 });
        // }

        return HttpResponse.json({
            data:{
                "title": "질문제목퉤스트트",
                "content": "내용내용내용용내용이 겁나 길어요요오오ㅗㅇ오오오"
            }
        }, {
        status: 200,
        });
    }),

    //질문요청
    http.post('/api/answer', async({request}) => {
        const body = (await request.json()) as SubmitBody;

        return HttpResponse.json(body, {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }),

    
]
