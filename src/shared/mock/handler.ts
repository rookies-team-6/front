import {http, HttpResponse} from "msw";

interface Question {
  id: number;
  title: string;
  content: string;
}

interface SubmitBody {
  answer: string;
}

export const handler = [
    //로그인

    //회원가입


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