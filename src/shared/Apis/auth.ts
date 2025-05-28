import { devServerInstance } from "@shared/apiInstance";

interface LoginRequestBody {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token: string;
}

const postLogin = async (body: LoginRequestBody): Promise<LoginResponse> => {
  const res = await devServerInstance.post("/api/login", { data: body });
  return res.data;
};

const postRegisterData = async (formData: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}) => {
  const res = await devServerInstance.post(
    "/api/registerforms",
    {
      data: formData, // 객체를 그대로 data에 전달
    }
  );

  console.log("서버 응답 데이터:", res.data);
  return res.data;
};

export { postLogin, postRegisterData}