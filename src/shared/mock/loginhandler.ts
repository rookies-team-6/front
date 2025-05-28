import { http, HttpResponse } from "msw";

export interface LoginRequestBody {
  email: string;
  password: string;
}

export const loginHandler = [
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
  })
];
