import {http, HttpResponse} from "msw";

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
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

interface HeaderInfo {
  name: string;
  type: string;
  score: string;
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

    //질문요청
    http.post('/api/questions', async({request}) => {
        const body = (await request.json()) as SubmitBody;

        return HttpResponse.json(body, {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }),

    
]