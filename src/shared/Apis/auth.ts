import { devServerInstance } from "@shared/apiInstance";

interface LoginRequestBody {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  token: string;
}

interface RegisterFormContent {
    email: string;
    password: string;
    passwordConfirm: string;
}

const postLogin = async (body: LoginRequestBody): Promise<LoginResponse> => {
  const res = await devServerInstance.post("/api/login", { data: body });
  return res.data;
};

const postRegisterData = async (formData:RegisterFormContent) => {
  const res = await devServerInstance.post(
    "/api/registerforms",
    {
      data: formData, // 객체를 그대로 data에 전달
    }
  );

  console.log("서버 응답 데이터:", res.data);
  return res.data;
};

const requestEmailVerification = async (email:string) => {
  const res = await devServerInstance.post(
    "/api/email-verfication",
    {
      email,
    }
  );

  console.log("서버 응답 데이터:", res.data);
  return res.data;
};

const verifyEmailCode = async (email:string, emailCode:string) => {
  const res = await devServerInstance.post(
    "/api/email-verfication/verify",
    {
      email,emailCode,
    }
  );

  console.log("서버 응답 데이터:", res.data);
  return res.data;
};

export { postLogin, postRegisterData, requestEmailVerification, verifyEmailCode}